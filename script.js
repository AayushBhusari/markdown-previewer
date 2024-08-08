// Get references to the elements
const copyBtn = document.getElementById("copy-btn");
const markdownInput = document.getElementById("markdown-input");
const markdownOutput = document.getElementById("markdown-output");

// Function to update the output as Markdown is typed
function updateOutput() {
  const markdownText = markdownInput.value;
  const htmlOutput = marked(markdownText);
  markdownOutput.innerHTML = htmlOutput;
}

// Function to copy the textarea content to the clipboard using Clipboard API
async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(markdownInput.value); // Write text to clipboard
    alert("Content copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

// Event listener to update the output when the input changes
markdownInput.addEventListener("input", updateOutput);

// Event listener to copy content to the clipboard when the button is clicked
copyBtn.addEventListener("click", () => {
  copyToClipboard();
});
