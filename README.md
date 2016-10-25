Reactjs skilaverkefni
==========================

Opnum git bash og búum til möppu fyrir verkefnið:

    mkdir reactjs_skilaverkefni

Búum til package.json skrá með því að keyra

    npm init

og fara í gegnum spurningarnar.
(ef npm init exitar ekki, er hægt að ýta á ctrl+c)

Búum til skrá sem mun innihalda config fyrir express vefserver

    touch server.js

installið express

    npm install --save express

og setjið eftirfarandi í server.js skrána:

    var express = require('express');
    var app = express();

    app.get('/', function(req,res){
      app.use(express.static(__dirname + 'index.html'));
    });

    app.listen(3000, function(){
      console.log('server is listening on port 3000');
    });

Búum til index.html

    touch index.html


