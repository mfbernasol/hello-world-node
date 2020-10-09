
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'));

app.use(express.urlencoded({
  extended: true
}));

app.get('/',(req,res) => {
  res.render('home.ejs');
});

app.listen(process.env.PORT || 5000,console.log('5000'));