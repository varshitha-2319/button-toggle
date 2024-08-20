document.getElementById('toggleButton').addEventListener('click', function() {
    const container = document.getElementById('container');
    const text = document.getElementById('text');
    const button = document.getElementById('toggleButton');
    const isActive = container.classList.toggle('active');
    if (isActive) {
        container.style.backgroundColor = '#0dcaf0'; 
        text.textContent = 'I am Abhinay'; 
        button.textContent = 'Submit Again'; 
        button.style.backgroundColor = '#d63384'; 
    } else {
        container.style.backgroundColor = 'violet';
        text.textContent = 'Hi'; 
        button.textContent = 'Submit'; 
        button.style.backgroundColor = '#007bff'; 
    }
});