document.getElementById('addInput').addEventListener('click', function() {
    const container = document.getElementById('inputContainer');
    const input = document.createElement('input');
    let inputElements = container.querySelectorAll('input[type="text"]');

    input.type = 'text';
    input.name = 'dynamicInput[]';
    input.placeholder = 'Enter something...';
    input.id = 'inputField';
    
    if(inputElements.length < 3) {
    container.appendChild(input);
    container.appendChild(document.createElement('br')); // Optional: adds a line break after each input for better readability
    } else {
        alert('Too many fields. Maximum of 3.')
    }
});

document.getElementById('removeInput').addEventListener('click', function() {
    const container = document.getElementById('inputContainer');
    let inputElements = container.querySelectorAll('input[type="text"]');
    if(inputElements.length > 1) {
        // Remove the last input field
        container.removeChild(inputElements[inputElements.length - 1]);
        // Also remove the last <br> element if it exists
        let brElements = container.querySelectorAll('br');
        if(brElements.length > 0) {
            container.removeChild(brElements[brElements.length - 1]);
        }
    } else {
        alert('You must keep at least 1 field.')
    }
});

document.getElementById('submitRegex').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission to stay on page
    const inputElements = document.querySelectorAll('#inputContainer input[type="text"]');
    let patterns = [];

    inputElements.forEach(input => {
        // Escape special regex characters to treat them as literal characters in the pattern
        const escapedInput = input.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        patterns.push(escapedInput);
    });

    // Create a regex pattern that matches any of the inputs
    // This uses the "or" operator (|) within the regex to match any of the provided inputs
    const regexPattern = patterns.join('|');

    // Display the generated pattern somewhere on the page or log it
    console.log('Generated pattern:', regexPattern);
    // For example, append the pattern to the form
    const patternDisplay = document.createElement('div');
    patternDisplay.textContent = `Generated pattern: /${regexPattern}/`;
    document.querySelector('.formContainer').appendChild(patternDisplay);
});

