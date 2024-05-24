const chatForm = document.getElementById('chatForm') as HTMLFormElement;
chatForm.addEventListener('submit', function(event: Event) {
    event.preventDefault();
    const messageInput = document.getElementById('message') as HTMLInputElement;
    const message: string = messageInput.value;
    console.log('Form submitted:', message);

    const response = document.getElementById('response') as HTMLParagraphElement;
    fetch(`http://localhost:8080/api/generate?message=${message}`)
        .then((response) => response.text())
        .then((data) => {
            response.innerHTML = '<pre>' + data; + '</pre>'
        });
});