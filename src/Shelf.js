import React  from 'react';
import ShelfChanger from './ShelfChanger';

function Shelf(props){
      const {books , shelfBooks , title , changeShelf} = props;
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {shelfBooks.map((book)=>(
                          <li key={book.id}>
                              <div className="book">
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                  <div className="book-shelf-changer">
                                    <ShelfChanger 
                                     book={book}
                                     mainPageBooks={books}
                                     changeShelf={changeShelf} 
                                     />
                                    {/* <select value={book.shelf} onChange={e => changeShelf(book , e.target.value)}>
                                      <option value="move" disabled>Move to...</option>
                                      <option value="currentlyReading">Currently Reading</option>
                                      <option value="wantToRead">Want to Read</option>
                                      <option value="read">Read</option>
                                      <option value="none">None</option>
                                    </select> */}
                                  </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">
                                     {book.authors.map((author,index) => (
                                     <p key={index} style={{marginBottom:0 , marginTop:0}}>{author}</p>
                                     ))}
                                </div>
                              </div>
                          </li>
                        ))}
                    </ol>
                  </div>
                </div>
        )
    
}
export default Shelf;
