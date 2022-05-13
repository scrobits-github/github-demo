const express = require('express');
const app = express();

app.use(express.json());

app.get('/one', (req, res) => {
    res.send('Hello World One');
})

app.get('/two', (req,res) => {
    res.send("Hello World Two");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})