document
  .getElementById("markdown-input")
  .addEventListener("input", function () {
    const markdownText = this.value;
    const htmlOutput = marked(markdownText);
    document.getElementById("markdown-output").innerHTML = htmlOutput;
  });
