const router = require('express').Router();
const user_service = require('./users.service')

router.get('/one', (req, res) => {
    res.send("Hellow From User One");
})

router.get('/user/:id', async (req, res) => {
    const id = req.params.id
    user_service.getUser(id).then(data => {
        res.send({data: data});
    }).catch(err => {
        res.status(500).send({error: "User Not Found"});
        console.log(err);
    })
})
module.exports = router;