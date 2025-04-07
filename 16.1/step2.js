const fs = require('fs');
const axios = require('axios'); 

function cat(path) {
    fs.readFile(path, 'utf8', (err,data) => {
        if (err){
            console.error(`Error reading ${path}: `, err.message)
            process.exit(1)
        }else {
            console.log(data)
        }
    })
}


function webCat(url){

    axios.get(url)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.error("There was an error!", error)
    })
}

const path = process.argv[2];
  
if (path.slice(0, 4) === 'http') {
    webCat(path);
  } else {
    cat(path);
  }