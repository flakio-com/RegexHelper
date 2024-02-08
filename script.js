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
    if(inputElements.length > 0) {
        // Remove the last input field
        container.removeChild(inputElements[inputElements.length - 1]);
        // Also remove the last <br> element if it exists
        let brElements = container.querySelectorAll('br');
        if(brElements.length > 0) {
            container.removeChild(brElements[brElements.length - 1]);
        }
    }
});
