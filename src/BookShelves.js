import React  from 'react'
import { Link } from 'react-router-dom';
import Shelf from './Shelf';


function BookShelves(props){
  const {books , changeShelf } = props;
  const shelves = [
    {name : "Currently Reading" , id : "currentlyReading"},
    {name : "Want to Read" , id : "wantToRead"},
    {name : "Read" , id : "read"}
  ]; 
     return(
        <div className="list-books">

          {/* header of the application */}
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

        {/* wrapper of the 3 shelves */}
          <div className="list-books-content">
            
            {shelves.map(sh => (
              <Shelf 
                books={books}
                title={sh.name}
                shelfBooks={books.filter(b => b.shelf === sh.id)}
                key={sh.id}
                changeShelf={changeShelf} 
              />))}
            
          </div>

          {/* search button */}
          <div className="open-search">
            <Link to="/search" className="searchBtn">Add a book</Link>
          </div>
        
        </div>
      
     )
};

export default BookShelves;