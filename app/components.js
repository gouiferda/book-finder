function getBlock(className, content) {
    var res = '';
    res += '<div class=\"' + className + '\">';
    res += content;
    res += '</div>';
    return res;
}

function getBooksTable(books) {

    var bookApiISBNget = 'https://openlibrary.org/api/books?bibkeys=ISBN:'
    var apiFlags = '&jscmd=data&format=json'
    var currentBookIsbn = '';
    var currentBookPagesCount = '';
    var contentText = '';
    contentText += '<div class="table-responsive">';
    contentText += '<table class="table table-sm table-bordered">';
    contentText += '<thead>';
    contentText += '<tr>';
    contentText += '<th>Title</th>';
    contentText += '<th>Author</th>';
    contentText += '<th>Pages</th>';
    contentText += '<th>ISBN</th>';
    contentText += '</tr>';
    contentText += '</thead>';
    contentText += ' <tbody>';
    for (var i = 0; i < books.length; i++) {
        // console.log(currentBook)
        currentBookIsbn = 'N/A';
        currentBookPagesCount = 'N/A';
        currentBook = books[i]
        if (issetObj(currentBook.isbn)) {
            currentBookIsbn = currentBook.isbn[0]
        }
        // await getJSONData(bookApiISBNget + currentBookIsbn + apiFlags).then((dataBook) => {
        //     var firstKey = Object.keys(dataBook)[0];
        //     var bookDetails = dataBook[firstKey]
        //     currentBookPagesCount = bookDetails.number_of_pages
        

        contentText += '<tr>';
        contentText += '<td>' + currentBook.title + '</td>';
        contentText += '<td>' + currentBook.author_name[0] + '</td>';
        contentText += '<td>' + currentBookPagesCount + '</td>';
        contentText += '<td>' + currentBookIsbn + '</td>';
        contentText += '</tr>';
        // })
    }
    contentText += '</tbody>';
    contentText += '</table>';
    contentText += '</div>';
    return contentText;
}
