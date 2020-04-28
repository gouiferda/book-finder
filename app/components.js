function getBlock(className, content) {
  var res = "";
  res += '<div class="' + className + '">';
  res += content;
  res += "</div>";
  return res;
}

function getBooksTable(books) {
  var currentBookIsbn = "N/A";
  var contentText = "";

  contentText += '<div class="table-responsive">';
  contentText += '<table class="table table-sm table-bordered">';
  contentText += '<thead class="text-center">';
  contentText += "<tr>";
  //contentText += "<th>ID</th>";
  contentText += "<th>Title</th>";
  contentText += "<th>Author</th>";
  contentText += "<th>ISBN</th>";
  contentText += "<th>Details</th>";
  contentText += "</tr>";
  contentText += "</thead>";
  contentText += " <tbody>";
  var authorName = "N/A";
  //console.log("books: " + books.length);

  resultCount.innerHTML = ' (Found '+books.length+' books)'

  for (var i = 0; i < books.length; i++) {
    currentBook = books[i];
    //console.log(currentBook.isbn[0])
    if (issetObj(currentBook.isbn))
    {
    currentBookIsbn = currentBook.isbn[0];
    }

    contentText += "<tr>";
   // contentText += "<td>" + (i + 1) + "</td>";
    contentText += "<td>" + currentBook.title + "</td>";
    if (issetObj(currentBook.author_name))
    {
    authorName = currentBook.author_name[0];
    }
    contentText +=
      '<td><a href="?a=' +
      betterArgName(authorName) +
      '">' +
      authorName +
      "</a></td>";
    contentText += '<td>' + currentBookIsbn + '</td>';

    if (currentBookIsbn != "N/A")
    {
        contentText += '<td><a href="?i=' +
        betterArgName(currentBookIsbn) +
        '">Details</a></td>';
    }else{
        contentText += '<td>' + currentBookIsbn + '</td>';
    }
   
    contentText += "</tr>";
  }
  contentText += "</tbody>";
  contentText += "</table>";
  contentText += "</div>";
  return contentText;
}

function getBookDetailsTable(dataBook) {

    //console.log(dataBook);

  var firstKey = Object.keys(dataBook)[0];
  var bookDetails = dataBook[firstKey];

  var bookISBN = firstKey.split(":")[1];
  var bookTitle = betterNA(bookDetails.title)
  var bookAuthor = "N/A"

  if (issetObj(bookDetails.authors)){
      bookAuthor = '<a href="?a=' + betterArgName(bookDetails.authors[0]["name"]) + '">' + bookDetails.authors[0]["name"] +  '</a>'
    }


  var bookPagesCount = betterNA(bookDetails.number_of_pages);

  var bookSubejcts = '';
  if ("subjects" in bookDetails) {
    for (var i = 0; i < bookDetails.subjects.length; i++) {
      bookSubejcts += betterNA(bookDetails.subjects[i].name);
      bookSubejcts += "<br>";
    }
  }

  var bookCover = 'assets/img/book.png'

  if (issetObj(bookDetails.cover))
  {
    if (!isEmptyObj(bookDetails.cover))
    {
      bookCover = bookDetails.cover["medium"]
    }
  }


  var contentText = "";
  contentText += '<div class="table-responsive">';
  contentText += '<table class="table table-sm table-bordered table-bordered">';
  contentText += '<thead class="text-center">';
  contentText += "<tr>";
  contentText += "<th>Details</th>";
  contentText += "<th>Info</th>";
  contentText += "</tr>";
  contentText += "</thead>";
  contentText += " <tbody>";
  contentText += "<tr>";
  contentText += "<td>ISBN</td>";
  contentText += "<td>"+bookISBN+"</td>";
  contentText += "</tr>";
  contentText += "<tr>";
  contentText += "<td>Title</td>";
  contentText += "<td>"+bookTitle+"</td>";
  contentText += "</tr>";
  contentText += "<tr>";
  contentText += "<td>Author</td>";
  contentText += "<td>"+bookAuthor+"</td>";
  contentText += "</tr>";
  contentText += "<tr>";
  contentText += "<td>Pages</td>";
  contentText += "<td>"+bookPagesCount+"</td>";
  contentText += "</tr>";
  contentText += "<tr>";
  contentText += "<td>Subjects</td>";
  contentText += "<td>"+bookSubejcts+"</td>";
  contentText += "</tr>";
  contentText += "<tr>";
  contentText += "<td>Cover</td>";
  contentText += '<td><img class="img-fluid rounded" src="'+bookCover+'" /></td>';
  contentText += "</tr>";
  contentText += "</tbody>";
  contentText += "</table>";
  contentText += "</div>";
  return contentText;
}
