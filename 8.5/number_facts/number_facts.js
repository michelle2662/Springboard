

function part1(){
    const promise = fetch("http://numbersapi.com/22?json")
    .then(response => {
        return response.json();
    })
    .then (data => document.getElementById('apiContent').textContent=data.text)
    .catch(error => console.error("Error getting data from API"));
    
}

let numberAPIPart2 = "http://numbersapi.com/"
function part2(){
    const promises = [getFact(10),getFact(17),getFact(11),getFact(22)];
    Promise.all(promises)
    .then(results => {
        for (let i = 0; i < results.length; i++) {
            document.getElementById('part2').innerHTML += results[i] + "<br>"
        }
    })
    .catch((error) => console.error(error))
}

function getFact(num){
    return fetch(numberAPIPart2 + num + '?json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.text)
        return data.text;

    })
    .catch(error => console.log(error))
    
}


part1();
part2();