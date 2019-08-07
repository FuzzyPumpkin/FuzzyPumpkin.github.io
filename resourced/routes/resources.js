const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("get data");
});

router.post('/', (req, res) => {
    res.send("add to data");
});

router.put('/:id', (req, res) => {
    res.send("edit data");
});

router.delete('/:id', (req, res) => {
    res.send("delete data");
});

module.exports = router;