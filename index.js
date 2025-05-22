// 1
const extractNumbers = (str) => {
    const numbers = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!isNaN(parseInt(char))) {
            numbers.push(parseInt(char));
        }
    }
    return numbers;
}

console.log("Extracted numbers", extractNumbers("a1fg5hj6"));

// 2
const fibonacciWithDelay = (n, a = 0, b = 1) => {
    if (a > 144) {
        return;
    }
    console.log(a);
    setTimeout(() => {
        fibonacciWithDelay(n - 1, b, a + b);
    }, 1000);
}

fibonacciWithDelay(12);


// 3
const fetchAndLogTitles = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        data.forEach(product => {
            console.log(product.title);
        });
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

fetchAndLogTitles();


// 4
const buttonContainer = document.getElementById('colorButtons');
const body = document.body;

buttonContainer.addEventListener('click', function(event) {
    const target = event.target;

    if (target.tagName === 'BUTTON') {
        body.style.backgroundColor = target.dataset.color;
    }
});


// 5
const toggleBlock = document.getElementById('toggleBlock');
const toggleButton = document.getElementById('toggleButton');
let isVisible = true;

toggleButton.addEventListener('click', function() {
    if (isVisible) {
        toggleBlock.style.display = 'none';
        toggleButton.textContent = 'Показать';
        isVisible = false;
    } else {
        toggleBlock.style.display = 'block';
        toggleButton.textContent = 'Скрыть';
        isVisible = true;
    }
});

// 6
const counterElement = document.getElementById('counter');
let count = 0;
let intervalId;

const updateCounter = () => {
    counterElement.textContent = count.toString();
    count++;
    if (count > 100) {
        clearInterval(intervalId);
    }
}

intervalId = setInterval(updateCounter, 1);


// 7
const getBtn = document.querySelector('#getJson');

getBtn.onclick = async () => {
    try {
        const response = await fetch("../data/characters.json")
        const data = await response.json()
        console.log("JSON Data", data)
    } catch (e) {
        console.log(e)
    }
}

