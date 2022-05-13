const express = require('express');
const app = express();

app.use(express.json());

app.get('/user', (req, res) => {
    res.send("hello World")
})

console.log("Hello Pritam")

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
