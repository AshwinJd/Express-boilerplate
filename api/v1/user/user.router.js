const router = require('express').Router();

router.get('/', (req, res) => {
    console.log("HI");
    res.end();
})

module.exports = router;