let heights = [164, 157, 160, 143, 170];

const heightList = document.getElementById('height-list');
const addHeightButton = document.getElementById('add-height');
const filterHeightButton = document.getElementById('filter-height');


function renderHeights() {

    heightList.innerHTML = '';

    heights.forEach((height, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}) ${height}`;
        heightList.appendChild(listItem);
    });
}

function addHeight() {
    const newHeight = prompt('Введите новый рост:');

    if (!newHeight) {
        alert('Рост не введён!');
        return;
    }

    const parsedHeight = parseInt(newHeight, 10);
    if (isNaN(parsedHeight)) {
        alert('Пожалуйста, введите корректное число.');
        return;
    }

    heights.push(parsedHeight);
    renderHeights();
}


function filterHeights() {
    const minHeight = prompt('Введите минимальный рост для фильтрации:');


    if (!minHeight) {
        renderHeights();
        return;
    }


    const parsedMinHeight = parseInt(minHeight, 10);
    if (isNaN(parsedMinHeight)) {
        alert('Пожалуйста, введите корректное число.');
        return;
    }


    const filteredHeights = heights.filter(height => height >= parsedMinHeight);


    heightList.innerHTML = '';
    filteredHeights.forEach((height, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}) ${height}`;
        heightList.appendChild(listItem);
    });
}


addHeightButton.addEventListener('click', addHeight);
filterHeightButton.addEventListener('click', filterHeights);


renderHeights();