import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Shelf from './Shelf';


class BookShelves extends Component {
 render(){
  const allBooks = this.props.books;
  const currentlyReadingBooks = allBooks.filter(b => (b.shelf === "currentlyReading"));
  const wantToReadBooks = allBooks.filter(b => (b.shelf === "wantToRead"));
  const readBooks = allBooks.filter(b => (b.shelf === "read"));
   
     return(
        <div className="list-books">

          {/* header of the application */}
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

        {/* wrapper of the 3 shelves */}
          <div className="list-books-content">

              {/* currentlyReading shelf */}
                  <Shelf 
                  books={allBooks}
                  shelfBooks={currentlyReadingBooks} 
                  title="Currently Reading"
                  changeShelf={this.props.changeShelf} />
            
              
              {/* want to read shelf */}
                  <Shelf 
                  books={allBooks}
                  shelfBooks={wantToReadBooks} 
                  title="Want to Read" 
                  changeShelf={this.props.changeShelf} />
              
              
              {/* Read shelf */}
                  <Shelf 
                  books={allBooks}
                  shelfBooks={readBooks}
                  title="Read" 
                  changeShelf={this.props.changeShelf} />
            
          </div>

          {/* search button */}
          <div className="open-search">
            <Link to="/search" className="searchBtn">Add a book</Link>
          </div>
        
        </div>
      
     )
 }
};

export default BookShelves;