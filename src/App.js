import React from 'react'
import {Route}  from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookShelves from './BookShelves'
import * as BooksAPI from './BooksAPI'
import './App.css'

class App extends React.Component {
  state = {
      books : [],
      shelf : ""
  }
        // get all books using API method
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
        
     })
  } 
  render() {
    return (
      <div className="app">
        <Route exact path="/">
           <BookShelves 
           books={this.state.books}
           changeShelf={this.updateShelves} />
        </Route>  

        <Route path="/search">
           <SearchBooks 
           books={this.state.books}
           changeShelf={this.updateShelves}
            />
        </Route>

      </div>
    )
  }
}

export default App

