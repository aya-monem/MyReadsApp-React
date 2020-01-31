import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {  
render(){
    const {searchBooks , searchError} = this.props
    // filter search books before displaying them (has thumbunial and authors);
    const searchBooksAfterFilter = searchBooks.filter(b => ((b.imageLinks !== undefined) && (b.authors !== undefined)));
   return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
               <div className="search-books-input-wrapper">
                  {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <input
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.props.query}
                  onChange={this.props.inputChange}
                  />
               </div>
            </div>
                  {/* displayig search books */}
            <div className="search-books-results">
                             {/* // case 1  errror */}
                {searchError === true && 
                <h3 style={{textAlign:"center" , color:"grey"}}>No results match</h3>
                }

                                    {/* // case 2 no error , no books */}
                {/* {searchError === false && searchBooks === [] && 
                <h3 style={{textAlign:"center" , color:"grey"}}>Search Result: {searchBooks.length} books</h3>
                } */}
                          {/* //case 3 (have books finally) */}
                 { searchError === false && searchBooks.length > 0 &&
                 <div>

                  <h3 style={{textAlign:"center" , color:"grey"}}>Search Result: {searchBooks.length} books</h3>
                  <ol className="books-grid">
                      {searchBooksAfterFilter.map((book)=>(
                         <li key={book.id}>
                             <div className="book">
                               <div className="book-top">
                                 <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                  <div className="book-shelf-changer">
                                   <select defaultValue="none" value={book.shelf} onChange={e => this.props.changeShelf(book , e.target.value)}>
                                     <option value="move" disabled>Move to...</option>
                                     <option value="currentlyReading">Currently Reading</option>
                                     <option value="wantToRead">Want to Read</option>
                                     <option value="read">Read</option>
                                     <option value="none">None</option>
                                   </select>
                                  </div> 
                                </div>
                               <div className="book-title">{book.title}</div>
                               <div className="book-authors">{book.authors[0]}</div>
                             </div>
                         </li>
                      ))}
                   </ol>
                 </div>}
              
              
            </div>
        </div>
    )
}
}

export default SearchBooks