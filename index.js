import express from 'express';
import bodyParser from 'body-parser';
import booksRoutes from './routes/books.js';
//import mongoose from 'mongoose';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

/**app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
mongoose.connect(url, { useNewUrlParser: true })
**/

app.use('/books', booksRoutes);

app.get('/', (req, res) => res.send('Bookstore API'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

// BOOKS COLLECTION OF THE MongoDB DATABASE

const bookSchema = {
    image: String,
    price: String
};

/**app.get("/books", function(req,res){
    Book.find(function(err, foundBooks){
        if (!err)
        {
           res.send(foundBooks); 
        }
        else
        {
            res.send(err);
        }
    })
}); */

app.route("/books/:id")

/**
.get(function(req,res){
Book.findOne({bookid:req.params.id}, function(err,foundBook){
  if (foundBook)
  {
    res.send(foundBook);
  }
  else
  {
    res.send(err);
  }
});
}); */

// USERS COLLECTION OF THE MongoDB DATABASE

const userSchema = {
    image: String,
    price: String
};

/**app.get("/users", function(req,res){
  User.find(function(err, foundUsers){
      if (!err)
      {
         res.send(foundUsers); 
      }
      else
      {
          res.send(err);
      }
  })
});
 */