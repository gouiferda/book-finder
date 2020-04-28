var bookTitleTag = document.getElementById("bookTitle");
var authorTag = document.getElementById("author");
var isbnTag = document.getElementById("isbn");



function enterEv(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    search();
  }
}

bookTitleTag.addEventListener("keyup", enterEv);
authorTag.addEventListener("keyup", enterEv);
isbnTag.addEventListener("keyup", enterEv);

var resultTag = document.getElementById("result");
var resultCountTag = document.getElementById("resultCount");

//params

var authorGet = findGetParameter("a");
var isbnGet = findGetParameter("i");
var titleGet = findGetParameter("t");

if (issetObj(isbnGet)) {
  searchBookDetails(isbnGet);
} else {
  if (issetObj(authorGet) && issetObj(titleGet)) {
    searchBooksList(titleGet, authorGet);
  } else if (issetObj(authorGet) && !issetObj(titleGet)) {
    searchBooksList("", authorGet);
  } else if (!issetObj(authorGet) && issetObj(titleGet)) {
    searchBooksList(titleGet, "");
  }
}
