const { ChatOpenAI } = require("@langchain/openai");
require("dotenv").config();

const {
  START,
  END,
  MessagesAnnotation,
  StateGraph,
  MemorySaver,
} = require("@langchain/langgraph");
const { v4: uuidv4 } = require("uuid");

const llm = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Use API key from .env file
  model: "gpt-4o-mini",
  temperature: 0,
});

const callModel = async (state) => {
  const response = await llm.invoke(state.messages);
  return { messages: response };
};

// Define the conversation workflow
const workflow = new StateGraph(MessagesAnnotation)
  .addNode("model", callModel)
  .addEdge(START, "model")
  .addEdge("model", END);

// Set up memory and application
const memory = new MemorySaver();
const app = workflow.compile({ checkpointer: memory });

// Config for unique conversation thread
const config = { configurable: { thread_id: uuidv4() } };

const main = async () => {
  console.log("Welcome to the chatbot! Type 'exit' to end the conversation.");
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // user, assistant(gpt-4o-mini), system
  let conversationHistory = [
    { role: "system", content: "Hello! I'm here to chat with you." }
  ];

  async function chatloop() {
    readline.question("You: ", async (userMessage) => {
      if(userMessage.toLowerCase() === "exit") {
        readline.close();
        return;
      }

      conversationHistory.push({ role: "user", content: userMessage });
      const output = await app.invoke({messages: conversationHistory}, config);
      const aiResponse = output.messages[output.messages.length - 1].content;

      console.log(`AI: ${aiResponse}`);
      conversationHistory.push({ role: "assistant", content: aiResponse})

      await chatloop()
    })
  }
  await chatloop()
};



main().then()