# MyReads Project

This is the starter template for the final assessment project for Udacity's React Fundamentals course. 
## About the project

  - In the main page, books are sorted using 3 catogries (or shelves) {currently reading , want to read , read}
  - user can change the place of the book between the 3 shelves using <select> element
  - Another page to search for any book you want using its title or author using an <input> field

   <!-- NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here: [SEARCH_TERMS.md] file
            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms. -->

  - Books from search page have the same <select> element, user can change between (currently reading , want to read , read). If user select any option ,it appears in the main page and vice versa.

  ## installation 

  The project uses Node.js and the Create-React-App starter. If you do not have Node , you can download it here: [Node.js](https://nodejs.org/en/)

  Once Node is installed, navigate to the directory where you want to store the app
  // using terminal 
        git clone https://github.com/aya-monem/MyReadsApp-React.git
        npm install
        npm start

A new browser window should automatically open displaying the app. If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser


## Backend Server
To simplify your development process, we've provided a backend server for you to develop against. The provided file BooksAPI.js contains the methods you will need to perform necessary operations on the backend:

       * getAll
       * update
       * search

     ## getAll()
Returns a Promise which resolves to a JSON object containing a collection of book objects.
This collection represents the books currently in the bookshelves in your app.

     ## update(book, shelf)
book: <Object> containing at minimum an id attribute
shelf: <String> contains one of ["wantToRead", "currentlyReading", "read"]
Returns a Promise which resolves to a JSON object containing the response data of the POST request

     ## search(query)
query: <String>
Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

