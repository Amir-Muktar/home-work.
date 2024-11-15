document.addEventListener('DOMContentLoaded', function () {
    const gmail = document.getElementById('gmail_input');
    const gmailButton = document.getElementById('gmail_button');
    const result = document.getElementById('gmail_result');
    const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    function solve() {
        gmailButton.addEventListener('click', function () {
            if (regExp.test(gmail.value)) {
                result.textContent = 'Correct email address';
                result.style.color = 'green';
            } else {
                result.textContent = 'Invalid email address';
                result.style.color = 'red';ьдлвьмдлаьм
            }
            solve()
        });
    } solve()
    const parentBlock = document.querySelector('.parent_block');
    const childBlock = document.querySelector('.child_block');
    let positionX = 0;
    let positionY = 0;
    const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
    const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;
    const moveBlock = () => {
        if (positionX < offsetWidth && positionY === 0) {
            positionX++;
            childBlock.style.left = `${positionX}px`;
        }
        else if (positionX >= offsetWidth && positionY < offsetHeight) {
            positionY++;
            childBlock.style.top = `${positionY}px`;
        }
        else if (positionY >= offsetHeight && positionX > 0) {
            positionX--;
            childBlock.style.left = `${positionX}px`;
        }
        else if (positionX === 0 && positionY > 0) {
            positionY--;
            childBlock.style.top = `${positionY}px`;
        }
        requestAnimationFrame(moveBlock);
    };
    moveBlock();
    const seconds = document.getElementById('seconds');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');
    let second = 0;
    let timer;
    let timerRun = false;
    start.addEventListener('click', function () {
        if (!timerRun) {
            timerRun = true;
            seconds.style.fontFamily = 'fantasy'
            second++;
            seconds.innerHTML = second;
            timer = setInterval(() => {
                second++;
                seconds.innerHTML = second;
            }, 1000);
        }
    });
    stop.addEventListener('click', function () {
        clearInterval(timer);
        timerRun = false;
    });
    reset.addEventListener('click', function () {
        clearInterval(timer);
        second = 0;
        seconds.innerHTML = second;
        timerRun = false;
    });
})
const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const closeItem = document.querySelector('.modal_close');
const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    window.removeEventListener('scroll', checkScrollPosition); // Удаляем обработчик скролла
};
const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};
modalTrigger.onclick = () => openModal();
closeItem.onclick = () => closeModal();
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
};
const checkScrollPosition = () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        openModal();
    }
};
window.addEventListener('scroll', checkScrollPosition);
setTimeout(openModal, 10000000);
const catalog = document.getElementById("persons-container");