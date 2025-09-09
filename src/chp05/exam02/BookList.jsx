import React from "react";
import Book from "./Book";
import "./BookList.css";

const books = [
    {
        title:"The Art of React",
        author:"abc",
        coverImage:"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F474x%2Ffb%2F97%2F8a%2Ffb978a5961939fe2b6d5658dc620205b.jpg&type=a340"
    },
    {
        title:"The Art of React",
        author:"abc",
        coverImage:"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20250307%2Fourmid%2Fpngtree-open-book-icon-png-image_15738279.png&type=a340"
    },
    {
        title:"The Art of React",
        author:"abc",
        coverImage:"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn.crowdpic.net%2Fdetail-thumb%2Fthumb_d_6A25895025C51C79B0B9E60AB8F1D3A9.png&type=a340"
    }
]
function BookList(props) {
    return(
      <div className={"bookListWrapper"}>
          {
              books.map((book) =>{
                  return(
                      <Book
                        title={book.title}
                        author={book.author}
                        coverImage={book.coverImage}
                      />
                  )
              })
          }
      </div>
    );
}
export default BookList;