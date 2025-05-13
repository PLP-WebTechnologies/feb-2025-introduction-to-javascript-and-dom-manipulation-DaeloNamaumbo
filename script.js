document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('dynamicText').textContent = 'Text has been changed!';
});

document.getElementById('toggleStyleBtn').addEventListener('click', function() {
    document.getElementById('dynamicText').classList.toggle('highlight');
});

document.getElementById('addElementBtn').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'New element added!';
    document.getElementById('container').appendChild(newElement);
});