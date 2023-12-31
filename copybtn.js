function copyTextToClipboard(text) {
    // Create a temporary textarea element
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    
    // Select the text in the textarea
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the text to clipboard
    document.execCommand('copy');
    
    // Remove the temporary textarea element
    document.body.removeChild(tempTextArea);
    
    // Provide user feedback
    copyButton.textContent = 'Матриця була успішно скопіювана!';
    setTimeout(() => {
        copyButton.textContent = 'Скопіювати Матрицю';
    }, 2000); // Reset button text after 2 seconds
}

// Add click event listener to the copy button
const copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', function() {
    const dynamicText = document.getElementById('dynamicText');
    copyTextToClipboard(dynamicText.textContent);
});
