
document.getElementById("task1").innerText = "Changed using 'innerText'."

 document.getElementById("task2").innerHTML = '<button type="submit">Submit</button>'


document.body.style.backgroundColor = '#232323'

let list = Array.from(document.getElementsByClassName("item"))
console.log(list)

list.forEach(element => {
    element.style.border = "thick solid #0000FF";
});


let task5 = document.getElementById("task5")
task5.href = 'https://www.springboard.com/'

document.getElementById("task6").value = 'DOM Master'

document.getElementById("task7").classList.add('new-class')

document.getElementById("task8").innerHTML += '<button type="submit">Submit</button>'

document.getElementById("task9").remove()