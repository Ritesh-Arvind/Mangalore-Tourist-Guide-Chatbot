# Mangalore Tourist Guide Chatbot

## Project Overview
The "Mangalore Tourist Guide Chatbot" is a web-based application designed to assist visitors with information about Mangalore, India. The chatbot provides users with relevant responses based on their queries regarding parks, restaurants, hotels, transportation, beaches, and other attractions. This project aims to offer an intuitive and interactive interface for users to get helpful information about Mangalore.

## Features
- Interactive chat interface for user interaction.
- Dynamic responses based on user input.
- Covers various topics including parks, restaurants, hotels, beaches, and more.
- Professional and user-friendly design.

## Technologies Used
- **HTML**: For structuring the web page.
- **CSS**: For styling the chatbot interface.
- **JavaScript**: For implementing chatbot functionality and handling user interactions.

## Code Overview

### 1. HTML (index.html)
- **`<!DOCTYPE html>`**: Declares the document type and HTML version.
- **`<html>`**: Root element of the HTML document.
- **`<head>`:**
  - **`<title>`**: Sets the title of the webpage displayed on the browser tab.
  - **`<link rel="stylesheet" type="text/css" href="KG_Chatbot.css">`**: Links to the external CSS file for styling.
  - **`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">`**: Includes Font Awesome icons for styling.
- **`<body>`:**
  - **`<div class="chat-container">`**: Main container for the chat interface.
    - **`<div class="chat-header">`**: Contains the header with the chatbot's name and description.
    - **`<div class="chat-box" id="chat-box"></div>`**: Displays the conversation between the user and the chatbot.
    - **`<div class="input-container">`**: Contains the input field and send button.
  - **`<script src="KG_Chatbot.js"></script>`**: Links to the external JavaScript file for chatbot functionality.

### 2. CSS (KG_Chatbot.css)
- **`body`**: Sets global styles including font, margin, padding, and background color.
- **`.chat-container`**: Styles the main chat container with width, padding, border, and shadow.
- **`.chat-header`**: Centers and styles the header text.
- **`.chat-box`**: Styles the chat area including height, padding, and background color.
- **`.input-container`**: Styles the input area with flexbox alignment.
- **`input[type="text"]`**: Styles the text input field.
- **`button`**: Styles the send button with padding, color, and hover effects.
- **`.user-message` and `.responder-message`**: Styles for user and bot messages, including background color, font, and bubble styling.
- **`.message-bubble::before`**: Creates a visual pointer for message bubbles.

### 3. JavaScript (KG_Chatbot.js)
- **`getBotResponse(userInput)`**: Determines the chatbot's response based on user input. Uses keyword matching to return relevant information about Mangalore.
- **`sendMessage()`**: Handles user input, appends user and bot messages to the chat box, and triggers the response generation.
- **`appendMessage(sender, message, isUser)`**: Appends a message to the chat box with the appropriate styling for user or bot messages.

## Enhancements for Professional View
1. **Improved Styling:**
   - Enhance the color scheme for a more modern and clean design.
   - Use contemporary and readable fonts to improve user experience.
   
2. **Interactive Elements:**
   - Add loading indicators to provide feedback while the chatbot processes responses.
   - Implement smooth transitions and animations to enhance the user experience.

3. **Accessibility:**
   - Add ARIA labels and ensure sufficient color contrast for accessibility.
   
4. **Additional Features:**
   - Include a welcome message or introductory guide for new users.
   - Allow users to view previous messages or search within the conversation history.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mangalore-tourist-guide-chatbot.git
2. Navigate to the project directory:
   ```bash
   cd mangalore-tourist-guide-chatbot

## Usage

Open KG_Chatbot.html in a web browser to view the chatbot interface.
Type your query in the input field and click "Send" to receive a response.

## Contributing

Feel free to submit issues or pull requests. Contributions are welcome!
