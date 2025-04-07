const fs = require('fs');
const axios = require('axios'); 


function writeOutput(data){
    fs.writeFile(out, data, err => {
        if (err) {
            console.error(err)
            return
        }
        console.log("File written")
    })
}
function cat(path) {
    fs.readFile(path, 'utf8', (err,data) => {
        if (err){
            console.error(`Error reading ${path}: `, err.message)
            process.exit(1)
        }else {
            if (out){
                writeOutput(data)
            }else {
                console.log(data)
            }
        }
    })
}


function webCat(url){

    axios.get(url)
    .then(response => {
        if (out){
            writeOutput(response.data)
        }else {
            console.log(response.data)
        }
    })
    .catch(error => {
        console.error("There was an error!", error)
    })
}



let path;
let out = null;
console.log(process.argv[2])

if (process.argv[2] === '--out') {
  out = process.argv[3];
  path = process.argv[4];
} else {
  path = process.argv[2];
}

if (path.slice(0, 4) === 'http') {
  webCat(path, out);
} else {
  cat(path, out);
}