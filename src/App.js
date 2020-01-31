import React from 'react'
import {Route}  from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookShelves from './BookShelves'
import * as BooksAPI from './BooksAPI'
import './App.css'

class App extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
   // showSearchPage: false
      query : "",
      searchBooks :[],
      searchError : false,
      
      books : [],
      shelf : ""
  }

  componentDidMount(){
     BooksAPI.getAll()
     .then((books) => {
         this.setState({books});
     }) 
  }         

             // changing shelf in main page

   updateShelves = (bookToupdate,newShelf) => {
     BooksAPI.update(bookToupdate,newShelf).then(res => {
        // get new shelf name and assign it to the book
        bookToupdate.shelf = newShelf;
        // updating (setState) all books array to re-render it 
        this.setState( prevState => ({
          books : prevState.books.filter( b => b.id !== bookToupdate.id ).concat(bookToupdate)
        })) ;
        // // updating (setState) search books array to see the change
        
        // for(let book of this.state.searchBooks){
        //   if(book.id === bookToupdate.id){
        //       book.shelf = bookToupdate.shelf
        //       break
        //   }
        // }
     })
  }

  // when user change input field   (SearchBooks component)
  handleInputChange = event => {
    const query = event.target.value;
    this.setState({query});
     // all possibles of query 

   if (query){
    BooksAPI.search(query)
    .then(books => {
      books.length > 0 ?
      this.setState({searchBooks : books, searchError : false}) :
      this.setState({searchBooks : [], searchError : true}) 
    })
    // in case of query is empty (reset states)
   } else { this.setState({searchBooks : [], searchError : false}) }

  } 
   
  render() {
    return (
      <div className="app">
        <Route exact path="/">
           < BookShelves 
           books={this.state.books}
           changeShelf={this.updateShelves} />
        </Route>  

        <Route path="/search">
           <SearchBooks 
           books={this.state.books}
           query={this.state.query}
           searchBooks={this.state.searchBooks}
           searchError={this.state.searchError}
           inputChange={this.handleInputChange}
           changeShelf={this.updateShelves}
            />
        </Route>

      </div>
    )
  }
}

export default App

