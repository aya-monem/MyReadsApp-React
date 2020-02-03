import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ShelfChanger from './ShelfChanger'

class SearchBooks extends Component { 
  state = {
      query : "",
      searchBooks :[],
      searchError : false  
  }
  
        // when user change input field   (SearchBooks component)
  handleInputChange = event => {
    const query = event.target.value;
    this.setState({query});
     // all possibles of query 

   if (query){
    BooksAPI.search(query)
    .then(srBooks => {
         if(srBooks.length > 0){
          this.setState({searchBooks : srBooks, searchError : false});
          }
          else {this.setState({searchBooks : [], searchError : true})}
         })
    // in case of query is empty (reset states)
   } else { this.setState({searchBooks : [], searchError : false, query : ""}) }

  } 
  
render(){
    const {query ,searchBooks , searchError} = this.state;
    // filter search books before displaying them (has thumbunial and authors);
    const searchBooksAfterFilter = searchBooks.filter(b => ((b.imageLinks !== undefined) && (b.authors !== undefined)));
      //searchBooksAfterFilter.map(book => book.shelf = "none");  
          
   return (
        <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
               <div className="search-books-input-wrapper">
                  <input
                  type="text" 
                  placeholder="Search by title or author"
                  value={query}
                  onChange={this.handleInputChange}
                  />
               </div>
            </div>
                  {/* displayig search books */}
            <div className="search-books-results">
                             {/* // case 1  errror */}
                {searchError === true && 
                <h3 style={{textAlign:"center" , color:"grey"}}>No results match</h3>
                }

                                     {/* case 2 no error , no books  */}
                {searchError === false && searchBooks === [] && 
                <h3 style={{textAlign:"center" , color:"grey"}}>Search Result</h3>
                }

                          {/* //case 3 (have books finally) */}
                 { searchError === false && searchBooks.length > 0 &&
                 <div>

                  <h3 style={{textAlign:"center" , color:"grey"}}>Search Result: {searchBooksAfterFilter.length} books</h3>
                  <ol className="books-grid">
                      {searchBooksAfterFilter.map((book)=>(
                         <li key={book.id}>
                             <div className="book">
                               <div className="book-top">
                                 <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                  <div className="book-shelf-changer">
                                    <ShelfChanger 
                                     book={book}
                                     mainPageBooks={this.props.books}
                                     shownSearchBooks={searchBooksAfterFilter}
                                     changeShelf={this.props.changeShelf} 
                                     />
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
                 </div>}
              
              
            </div>
        </div>
    )
}
}

export default SearchBooks