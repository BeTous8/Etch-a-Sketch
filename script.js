const container = document.querySelector(".container");
// container.textContent = `hello world`

let isDrawing = false;

document.addEventListener('mousedown', () => {
    isDrawing = true;
})

document.addEventListener('mouseup', () => {
    isDrawing = false;
})


function colorChange() {
    const letter = '0123456789ABCDEF';
    let color = '#'
    for (i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)]
    }
    return color;
}


const btn = document.querySelector('.btn');
const reset = document.querySelector('.reset');



btn.addEventListener('click', () => {
    container.replaceChildren();
    let palletSize = +prompt("enter the size of the pallet: ");
    while (palletSize > 100) {
        alert("insert number smaller than 100")
       palletSize = prompt("enter the size of the pallet: ");
    }
    const totalBoxes = palletSize ** 2;
    const width = container.offsetWidth / palletSize;
    const height = container.offsetWidth / palletSize;
    console.log(width)

    // use for loop on each iteration create one box
    for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement("div");
        
        box.classList.add("boxes");
        box.style.width = `${width}px`;
        box.style.height = `${height}px`;
        container.append(box);

        box.addEventListener('mouseover', () => {
            if (isDrawing) {
                box.style.backgroundColor = colorChange();
                
            }
            
        });
        box.addEventListener('mousedown', () => {
            box.style.backgroundColor = 'white';
        });

        reset.addEventListener('click', () => {
            for (let i = 0; i < totalBoxes; i++) {
                if (box.style.backgroundColor !== 'black') {
                    box.style.backgroundColor = 'black';
                }
            }
        });    
        
    }

   
});








