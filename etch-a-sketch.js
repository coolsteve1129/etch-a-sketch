const sizeOfGrid = 16;
const resetButton = document.querySelector('button');
const container = document.querySelector('.container');

const createAGrid = (lengthOfGrids) => {
    for(let i = 0; i < lengthOfGrids; i++){
        const row = document.createElement('div');
        row.classList.add('grid-row')

        for(let j = 0; j < lengthOfGrids; j++){
            const column = document.createElement('div');
            column.classList.add('grid-column');
            row.appendChild(column);
        }
        container.appendChild(row);
    }
}
createAGrid(sizeOfGrid);