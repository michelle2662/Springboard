const express = require('express')

const app = express();


app.get('/mean', (req,res) =>{
    let mean = 0
    var nums = req.query.nums

    if (!nums){
        return res.status(400).send("No nums")
    }

    const numArr = nums.split(',').map(Number)
    console.log(numArr)

    if (numArr.some(isNaN)) {
        return res.status(404).send("Bad input")
    } else {
        mean = numArr.reduce((acc,cur) => acc + cur, 0) / numArr.length
        console.log(mean)
        res.json({
            response: {
                operation: "mean",
                value: mean
            }
        })
    }

})

app.get('/median', (req,res) =>{
    var median = 0
    var nums = req.query.nums

    if (!nums){
        return res.status(400).send("No nums")
    }

    let numArr = nums.split(',').map(Number)
    console.log(numArr)

    if (numArr.some(isNaN)) {
        return res.status(404).send("Bad input")
    } else {
        numArr = [...numArr].sort((a,b) => a-b)
        
        const half = Math.floor(numArr.length/2)

        median = numArr.length % 2 ? numArr[half]: (numArr[half-1] + numArr[half])/2

        res.json({
            response: {
                operation: "median",
                value: median
            }
        })
    }

})

app.get('/mode', (req,res) =>{
    var mode = 0
    var nums = req.query.nums

    if (!nums){
        return res.status(400).send("No nums")
    }

    let numArr = nums.split(',').map(Number)
    console.log(numArr)

    if (numArr.some(isNaN)) {
        return res.status(404).send("Bad input")
    } else {
        numArr = [...numArr].sort((a,b) => a-b)
        
        const freqMap = {};
    let maxCount = 0;

    for (let num of numArr) {
        freqMap[num] = (freqMap[num] || 0) + 1;
        if (freqMap[num] > maxCount) {
            maxCount = freqMap[num];
        }
    }

    const modes = Object.keys(freqMap)
        .filter(key => freqMap[key] === maxCount)
        .map(Number);
    

        res.json({
            response: {
                operation: "mode",
                value: modes.length === 1 ? modes[0] : modes
            }
        })
    }

})


app.listen(3000, () => {
    console.log("Server running on port 3000")
})