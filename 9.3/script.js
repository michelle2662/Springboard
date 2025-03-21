document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Loaded")

    let boxContainer = document.getElementById("box-container");
    console.log(boxContainer)

    let newBoxButton = document.getElementById("new-box-button")
    console.log(newBoxButton)

    let colorForm = document.getElementById("color-form")
    console.log(colorForm)

    let colorInput = document.getElementById("color-input")
    console.log(colorInput)
    let newBoxColor = "black";
    let boxCounter = 0;

    function createBox(){
        const newBox = document.createElement('div');
        newBox.classList.add('box');
        newBox.style.backgroundColor = newBoxColor;
        boxCounter += 1; 
        newBox.textContent = `${boxCounter}`; 

        newBox.addEventListener('mouseenter', function(event){
            const coordX = event.pageX
            const coordY = event.pageY;
            newBox.textContent = `${coordX}, ${coordY}`
        })

        newBox.addEventListener('mouseleave', function(event){
            newBox.textContent = `${boxCounter}`; 
        })

        newBox.addEventListener('dblclick', function(event){
            boxContainer.removeChild(newBox)
        })

        boxContainer.appendChild(newBox);
    }

    //user should be able to add boxes with the set color to the div with the ID box-container
    newBoxButton.addEventListener('click', function(){
        createBox()

    });
    

    document.addEventListener('keypress', function(event){
        if (event.key === 'N') {
            createBox()
        }
        
    })


    colorForm.addEventListener('submit', function(e){
        e.preventDefault();
        newBoxColor = colorInput.value
        console.log(newBoxColor)
        
        const boxes = document.querySelectorAll('.box'); // For elements with class "box"
        boxes.forEach(box => {
            box.style.backgroundColor = newBoxColor
        })

    })


})






/*
In this exercise:
- The user should be able to remove a box when the box is double-clicked on.
- Each box should display its page coordinates when hovered (when the mouse leaves, it displays its ID back).
*/