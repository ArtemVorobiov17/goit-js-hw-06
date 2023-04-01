const changeInput = document.querySelector('#font-size-control');
const onText = document.querySelector('#text');

onText.style.fontSize = changeInput.value + 'px';

const textResizing = () => {
    onText.style.fontSize = `${changeInput.value}px`
};

changeInput.addEventListener('input', textResizing);



