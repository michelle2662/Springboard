const express = require('express')
let items = require('./fakeDb')
const app = express();

app.use(express.json())


app.get('/items' , (req,res) => {
    res.json(items)
})

app.post('/items', (req, res) => {
    const {name, price} = req.body

    if (!name || typeof price !== "number") {
        return res.status(400).json({error: "Item must have valid input"})
    }

    items.push(req.body)
    res.json({added: req.body})
})

app.get('/items/:name', (req, res) => {
    const name = req.params.name.toLowerCase();

    items.forEach(element => {
        console.log(element.name)
        if (element.name === name) {
            return res.json(element)
        }
    });

    return res.status(404).json({error: "Item not found"})
})


app.patch('/items/:name',(req,res) =>{
    const itemName = req.params.name.toLowerCase();
    const item = items.find(i => i.name.toLowerCase() === itemName)


  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  const { name, price } = req.body;

  if (name !== undefined) item.name = name;
  if (price !== undefined) item.price = price;

  return res.json({ updated: item });
  
})


app.delete('/items/:name',(req,res) =>{
    const itemName = req.params.name.toLowerCase();
    const item = items.find(i => i.name.toLowerCase() === itemName)
    if (!item) {
        return res.status(404).json({ error: "Item not found" });
      }

    const newItems = items.filter(item => item.name.toLowerCase() !== itemName)
    items.splice(0, items.length, ...newItems);

    return res.json({items})
})


if (require.main === module) {
    app.listen(3000, function() {
      console.log('App on port 3000');
    });
  }


module.exports = app;
