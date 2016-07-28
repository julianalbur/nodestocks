var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var stocks = [];
var id = 0;

app.listen(3000);
console.log('on port 3000');

app.get('/stocks', function(req, res){
  res.json(stocks);
});


app.get('/stocks/:id', function(req, res){
    var stock = _.find(stocks, {id: req.params.id});
    res.json(stock || {});
});

app.post('/stocks', function(req, res){
   var lion = req.body;
    id++;
    stock.id = id + '';
    
    stocks.push(stock);
    
    res.json(stock);
    
});

app.put('/stocks/:id', function(req, res){
    var update = req.body;
    if (update.id){
        delete update.id
    }
    
    var stock = _.findindex(stocks, {id: req.params.id});
    if(!stocks[stock]){
        res.send();
        
    }else{
        var updatedStock = _.assign(stocks[stock], update);
        res.json(updatedStock);
    }
});

app.delete('/stocks/id:', function(req, res){
    var stock = _.findIndex(stocks, {id: req.params.id});
    
    if (!stocks[stock]){
        res.send();
        
    } else{
        var deletedStock = stocks[stock];
        stocks.splice(stock, 1);
        res.json(deletedStock);
    }
});

app.listen(3002);
console.log('on port 3002'); 