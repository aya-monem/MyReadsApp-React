import React , {Component} from 'react'

class ShelfChanger extends Component{
    changeShelf = event => {
        this.props.changeShelf(this.props.book , event.target.value);
        // console.log(event.target.value);
        // console.log(this.props.book)
    }
   render(){
    const {book , mainPageBooks } = this.props;
        // console.log(book.shelf);
          let currentValue = "none";

        for(let item of mainPageBooks){
            if(item.id === book.id){
               currentValue = item.shelf;
               //console.log(currentValue);
            } 
        }
       
    return (
        <select value={currentValue} onChange={this.changeShelf}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    )
}
}

export default ShelfChanger;