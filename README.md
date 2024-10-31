# Chatbot using LangChain's LangGraph and OpenAI's GPT-4o-mini Model

This is a simple chatbot application using LangChain's LangGraph library and OpenAI's `gpt-4o-mini` model. The bot is set up to run a conversation loop, allowing continuous interaction until the user types "exit." This project was developed as part of our weekly AI sessions at KCA University.

## Features

- **Conversation Management**: The chatbot tracks conversation history to respond contextually.
- **State Machine**: Utilizes LangChain's `StateGraph` for managing the chatbot's conversation workflow.
- **Memory Storage**: Conversation states are saved using LangChain's `MemorySaver`.
- **Unique Conversations**: A unique `thread_id` is generated for each new conversation using `uuid`.
- **Configurable Language Model**: The chatbot uses OpenAI's `gpt-4o-mini` with a temperature setting of 0 for deterministic responses.

## Prerequisites

1. **Node.js**: Ensure you have Node.js installed.
2. **OpenAI API Key**: You'll need an OpenAI API key, which can be obtained from [OpenAI's API portal](https://platform.openai.com/signup).
3. **Environment Variables**: Create a `.env` file in the root directory with your OpenAI API key as follows:

```plaintext
OPENAI_API_KEY=your_openai_api_key_here
```

## Installation

### Clone this Repository:
```bash
git clone https://github.com/DanKamNdi/langchain-chatbot-PT1.git
cd langchain-chatbot-PT1
```

### Install Dependencies:
```bash
npm install
```

### Run the Chatbot:
```bash
node index.js
```

## Code Overview

The code is structured to maintain a conversation workflow using LangChain's StateGraph and memory saving capabilities. Here's a brief explanation of the main components:

- **ChatOpenAI**: Configures the OpenAI model, `gpt-4o-mini`, with specific parameters.
- **callModel Function**: Handles the API call to OpenAI, returning the assistant's response.
- **StateGraph Workflow**: Defines the conversation workflow with START and END points for state management.
- **chatbot Function**: Manages the interactive command-line interface for the conversation, allowing for continuous dialogue until the user exits.

## Usage

1. Run the application as described above.
2. Type your message at the prompt.
3. Type `exit` to end the conversation.

## Customization

- **Temperature**: Adjust the temperature setting for more diverse or deterministic responses.
- **MemorySaver**: Customize the memory persistence strategy if needed.

## Acknowledgments

This project is inspired by our weekly AI sessions at KCA University, where we explore the practical applications of AI tools and libraries like LangChain and OpenAI. Special thanks to the KCA University AI club for their collaboration and insights.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
