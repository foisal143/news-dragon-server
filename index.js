const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const categories = require('./data/category.json');
const news = require('./data/news.json');
app.use(cors());
app.get('/', (req, res) => {
  res.send('data  is comming');
});

app.get('/category', (req, res) => {
  res.send(categories);
});

app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  if (id == 0) {
    res.send(news);
  } else {
    const categoriesNews = news.filter(n => n.category_id === id);
    res.send(categoriesNews);
  }
});

app.get('/:id', (req, res) => {
  const id = req.params.id;
  const singleNews = news.find(n => n._id === id);
  res.send(singleNews);
});

app.listen(port, () => {
  console.log('server is running');
});
