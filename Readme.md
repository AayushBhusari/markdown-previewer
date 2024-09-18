# Text Formatter

## Project Link

Check out the live project [here](https://aayushbhusari.github.io/markdown-previewer/).

## About

A simple web application to format and preview text with Markdown-like syntax. The application allows users to input text with Markdown-like annotations, such as headings and bold text, and then see the formatted output. Users can also copy the content from both the input and output sections.

## Features

- **Markdown-like Formatting**: Converts Markdown-like text into HTML headings and bold text.
- **Live Preview**: Updates the formatted output in real-time as text is entered.
- **Copy to Clipboard**: Copy text from both input and output sections.
- **Responsive Design**: Works well on both desktop and mobile devices.

## Technologies Used

- HTML
- CSS
- JavaScript

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/text-formatter.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd text-formatter
   ```

3. **Open the Project**

   You can open `index.html` directly in a web browser or use a local server for development:

   ```bash
   # Using Python's built-in HTTP server (Python 3.x)
   python -m http.server

   # Using a local server (e.g., Live Server extension in VSCode)
   ```

## Usage

1. **Input Text**: Enter Markdown-like text into the textarea.
2. **View Output**: See the formatted text in the output section.
3. **Copy Content**: Click the "Copy" button next to the input or output section to copy the respective content to the clipboard.

### Markdown-like Syntax Supported

- **Headings**:

  - `# Heading 1`
  - `## Heading 2`
  - `### Heading 3`
  - `#### Heading 4`
  - `##### Heading 5`
  - `###### Heading 6`

- **Bold Text**:
  - `**Bold Text**`

## Code Explanation

- **HTML**: Defines the structure of the application, including input and output sections.
- **CSS**: Styles the application for a modern and responsive look.
- **JavaScript**:
  - **updateOutput**: Converts input text with Markdown-like syntax into HTML and updates the output section.
  - **copyToClipboard**: Copies content from the textarea or output div to the clipboard.
  - **Event Listeners**: Updates the output and handles copy actions.

## Contributing

If you want to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch**: `git checkout -b feature-branch`
3. **Make Changes**.
4. **Commit Changes**: `git commit -am 'Add new feature'`
5. **Push to the Branch**: `git push origin feature-branch`
6. **Create a Pull Request**.
