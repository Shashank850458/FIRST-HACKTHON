"use strict";
//Getting books datas from api
async function getBooksData() {
    try {
      const getdata = await fetch("https://anapioficeandfire.com/api/books");
      const booksdata = await getdata.json();
      console.log(booksdata); //10 data
      return booksdata;
    } catch (err) {
      alert(err);
    }
  }
  
  async function displayBooksdata() {
    try {
      //getting books data from api
      const books = await getBooksData();
      //display books data in html DOM
  
      books.forEach((book) => {
        const bookContainer = document.createElement("div");
        bookContainer.className = "book-container";
        let release = book.released; //to split released date alone
        let rdate = release.split("T");
  
        bookContainer.innerHTML = `
              <h4><p>📕Book Name : ${book.name}</p></h4>
              <h5><p>🔢ISBN : ${book.isbn}</p></h5>
              <h5><p>📃Pages : ${book.numberOfPages}</p></h5>
              <h5><p>📝Authors : ${book.authors[0]}</p></h5>
              <h5><p>🤵Publisher : ${book.publisher}</p></h5>
              <h5><p>⏰Released Date : ${rdate[0]}</p></h5>
              <h5>👥Characters:
                    <ol>
                    <li>${book.characters[0]}</li>
                    <li>${book.characters[1]}</li>
                    <li>${book.characters[2]}</li>
                    <li>${book.characters[3]}</li>
                    <li>${book.characters[4]}</li>
                    </ol>
                </h4>
              `;
        document.body.appendChild(bookContainer);
      });
    } catch (error) {
      alert("error");
    }
  }
  
  displayBooksdata();
