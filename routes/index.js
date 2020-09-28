var express = require('express');
var router = express.Router();
const goodreads = require('goodreads-api-node');

const myCredentials = {
  key: process.env.GOODREADS_KEY,
  secret: process.env.GOODREADS_SECRET
};
 
const gr = goodreads(myCredentials);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Book Reviews' });
});

router.get('/books', async function(req, res) {
let searchTerm= req.query.search;
const result = await gr.searchBooks( { q: searchTerm, page: 1, field: 'title' } );
let books= result.search.results.work;
res.render('books', {books});
})

router.get('/reviews', async function(req,res){
const bookId= req.query.bookId;
let book= await gr.showBook(bookId)
const reviewData = book.book.reviews_widget;
 res.send('reviews', reviewData)
})


module.exports = router;
