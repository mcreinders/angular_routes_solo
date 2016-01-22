/**
 * Created by user on 1/21/16.
 */
var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(request, response){
   response.sendFile(path.join(__dirname, "../public/views/index.html"));
});

//this keeps the page from getting an error when you refresh
router.get('/*', function(request, response){
   response.redirect('/');
});

module.exports = router;