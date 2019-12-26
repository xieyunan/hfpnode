let express = require('express');
let product_router = require('./router/product');

//创建实例
let app = express();
let bodyParser = require('body-parser');

//content-type application/json
app.use(bodyParser.json())
//content-type application/urlform-data
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use('/product',product_router)

app.listen(8080,function(){
    console.log('go...')
})