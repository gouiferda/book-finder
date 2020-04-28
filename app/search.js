
//var loadingText = '<br><p class="text-center">Loading...</p><br>'
var loadingText = '<br><div class="text-center"><img src="assets/img/loader2.gif" height="100" width="100"></div><br>'


function searchBooksList(bookP = "", authorP = "") {
  var bookAPISearch = "https://openlibrary.org/search.json?";
  var apiFlags = "&jscmd=data&format=json";

  resultTag.innerHTML = loadingText;
  var output = "";

  var bookTitle = bookP;
  var bookAuthor = authorP;

  var bookAuthorEdited = betterArgName(bookAuthor);
  var bookTitleEdited = betterArgName(bookTitle);

  var linkAPI = "";

  if (bookTitle != "" && bookAuthor == "") {
    linkAPI = bookAPISearch + "title=" + bookTitleEdited;
  } else if (bookTitle == "" && bookAuthor != "") {
    linkAPI = bookAPISearch + "author=" + bookAuthorEdited;
  } else if (bookTitle != "" && bookAuthor != "") {
    linkAPI =
      bookAPISearch +
      "title=" +
      bookTitleEdited +
      "&author=" +
      bookAuthorEdited;
  }

  //console.log(bookAPIauthorSearch + bookAuthor + apiFlags);
  getJSONData(linkAPI + apiFlags).then((data) => {
    if (data.docs.length == 0) {
      resultTag.innerHTML = "No result";
      return;
    }
    var booksArr = [];

    var currentBook = "";
    var bookFound = null;
    var bookISBN = "";

    //console.log("len: " + data.docs.length);

    for (var i = 0; i < data.docs.length; i++) {
      currentBook = data.docs[i];

      if (bookTitle != "") {
        if (
          !currentBook.title.toLowerCase().includes(bookTitle.toLowerCase())
        ) {
          continue;
        }
      }
      booksArr.push(currentBook);
    }

    if (booksArr.length == 0) {
      resultTag.innerHTML = "No result";
    }

    if (booksArr.length > 0) {
      resultTag.innerHTML = getBooksTable(booksArr);
    }
  });
}

function searchBookDetails(bookISBN= "")
{

var bookApiISBNget = 'https://openlibrary.org/api/books?bibkeys=ISBN:'


  var apiFlags = "&jscmd=data&format=json";

  resultTag.innerHTML = loadingText;


  var linkAPI = "";

  linkAPI = bookApiISBNget + bookISBN;

  //console.log(bookAPIauthorSearch + bookAuthor + apiFlags);
  getJSONData(linkAPI + apiFlags).then((data) => {
    // console.log(data)

    if (isEmptyObj(data)) {
      resultTag.innerHTML = "No result";
      return;
    }
    
    resultTag.innerHTML = getBookDetailsTable(data);

  });

}

function search()
{
   

    if (isbnTag.value != '')
    {
        searchBookDetails(isbnTag.value)
    }else{
        searchBooksList(bookTitleTag.value,authorTag.value)
    }
}