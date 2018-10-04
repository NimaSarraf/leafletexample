var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('Getting from ldp.');
});
router.post('/', function(req, res){
    res.send('Posting to ldp');
});

//export this router to use in our index.js
module.exports = router;