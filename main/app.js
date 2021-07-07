createGrid = function (n) {
    let cellSize = screen.height > screen.width ? Math.floor(screen.width / n) : Math.floor(screen.height / n);
    let table = document.createElement('table');
    for (let i = 0; i < n; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < n; j++) {
            let column = document.createElement('td');
            column.style.backgroundColor = getRandomColor();
            column.style.height = `${cellSize.toString()}px`;
            column.style.width = `${cellSize.toString()}px`;
            row.appendChild(column);
        }
        table.appendChild(row);
    }
    document.body.appendChild(table);
}

function getRandomColor() {
    return `#${getRandomSingleHex()}${getRandomSingleHex()}${getRandomSingleHex()}`
}

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomSingleHex() {
    return getRandomInt(0, 255).toString(16);
}

setTimeout(() => {
    createGrid(16)
    setInterval(() => {
        document.querySelectorAll('td').forEach(e => {
            e.style.backgroundColor = getRandomColor()
        })
    }, 10)
}, 2000);




