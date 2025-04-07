const fs = require('fs');

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

const filePath = process.argv[2];

  
cat(filePath);