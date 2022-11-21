const container = document.querySelector('.container');


let createGrid = () => {
    if(document.body.contains(document.querySelector('.container-killer'))){
        document.querySelector('.container-killer').remove()
    };

    const containerKiller = document.createElement('div');
    containerKiller.classList.add('container-killer');
    let container = document.getElementById('container');
    
    lengthOfGrids = prompt("How big would you like to make the grid, enter a number", "Make it really Big");
    if(isNaN(lengthOfGrids)){
        alert("Enter a number wiseguy!!!");
    }
    else{
        for(let i = 0; i < lengthOfGrids; i++){
             const row = document.createElement('div');
            row.classList.add('grid-row')

            for(let j = 0; j < lengthOfGrids; j++){
                const widthAndHeight = 960/ lengthOfGrids;
                const gridBox = document.createElement('div');
                gridBox.classList.add('grid-box');
                gridBox.style.width = `${widthAndHeight}px`;
                gridBox.style.height = `${widthAndHeight}px`;
                row.appendChild(gridBox);
                gridBox.addEventListener('mouseover', function (e) {
                    e.target.style.background = 'blue';
                });
            }
            containerKiller.appendChild(row);
        }
        container.appendChild(containerKiller);
    }
}
