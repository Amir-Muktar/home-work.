// const phoneInput = document.querySelector('#phone_input');
// const phoneButton = document.querySelector('#phone_button');
// const phoneResult = document.querySelector('#phone_result');
// const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}/;
// phoneButton.onclick = () => {
//     if (regExp.test(phoneInput.value)) {
//         phoneResult.textContent = 'OK';
//         phoneResult.style.color = 'green';
//     } else {
//         phoneResult.textContent = 'NOT OK';
//         phoneResult.style.color = 'red';
//     }
// }
// //
// const tabContentBlock = document.querySelectorAll('.tab_content_block');
// const tabItems = document.querySelectorAll('.tab_content_item');
// const tabParent = document.querySelector('.tab_content_items');
// let currentIndex = 0;
// const hideTabContent = () => {
//     tabContentBlock.forEach((item) => {
//         item.style.display = 'none';
//     });
//     tabItems.forEach((item) => {
//         item.classList.remove('tab_content_item_active');
//     });
// };
// const showTabContent = (index) => {
//     tabContentBlock[index].style.display = 'block';
//     tabItems[index].classList.add('tab_content_item_active');
// };
// hideTabContent();
// showTabContent(0);
// setInterval(() => {
//     currentIndex = (currentIndex + 1) % tabItems.length;
//     hideTabContent();
//     showTabContent(currentIndex);
// }, 3000);
// tabParent.onclick = (event) => {
//     if (event.target.classList.contains('tab_content_item')) {
//         tabItems.forEach((item, index) => {
//             if (event.target === item) {
//                 hideTabContent();
//                 showTabContent(index);
//                 currentIndex = index;
//             }
//         });
//     }
// };
// CONVERTER
const usdInput = document.querySelector('#usd');
const somInput = document.querySelector('#kgz');
const eurInput = document.getElementById('eur');

const converter = (element, targetElement1, targetElement2) => {
    element.oninput = async () => {
        try {
            const response = await fetch('main.json', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            });
            if (!response.ok) throw new Error(`Error: ${response.statusText}`);
            const data = await response.json();

            // Проверка на корректные данные в JSON
            if (!data.usd || !data.eur) {
                throw new Error("Currency data is missing in main.json");
            }

            // Проверка, что введено корректное число
            const value = parseFloat(element.value);
            if (isNaN(value)) {
                targetElement1.value = '';
                targetElement2.value = '';
                return;
            }

            // Логика конвертации
            if (element.id === 'kgz') {
                targetElement1.value = (value / data.usd).toFixed(2);
                targetElement2.value = (value / data.eur).toFixed(2);
            } else if (element.id === 'usd') {
                targetElement1.value = (value * data.usd).toFixed(2);
                targetElement2.value = (value * (data.usd / data.eur)).toFixed(2);
            } else if (element.id === 'eur') {
                targetElement1.value = (value * data.eur).toFixed(2);
                targetElement2.value = (value * (data.eur / data.usd)).toFixed(2);
            }

            // Очистка полей, если значение пустое
            if (element.value === '') {
                targetElement1.value = '';
                targetElement2.value = '';
            }
        } catch (error) {
            console.error('Failed to fetch conversion data:', error);
        }
    }
}

// Применяем конвертер к каждому элементу
converter(somInput, usdInput, eurInput);
converter(usdInput, somInput, eurInput);
converter(eurInput, somInput, usdInput);
