
const customCursor = document.getElementById('custom-cursor');
const cursorLabel = document.getElementById('cursor-label');

document.addEventListener('mousemove', (event) => {
    customCursor.style.left = event.pageX + 'px';
    customCursor.style.top = event.pageY + 'px';

    cursorLabel.style.left = event.pageX + 'px';
    cursorLabel.style.top = event.pageY + 'px';
});


document.addEventListener('click', changeBackground);