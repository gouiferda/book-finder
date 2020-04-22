function getBlock(className, content) {
    var res = '';
    res += '<div class=\"' + className + '\">';
    res += content;
    res += '</div>';
    return res;
}

function getBooksTable(books) {
    var contentText = '';
    contentText += '<div class="table-responsive">';
    contentText += '<table class="table">';
    contentText += '<caption>List of books</caption>';
    contentText += '<thead>';
    contentText += '<tr>';
    contentText += '<th>Title</th>';
    contentText += '<th>Author</th>';
    contentText += '<th>ISBN</th>';
    contentText += '</tr>';
    contentText += '</thead>';
    contentText += ' <tbody>';
    for (var i = 0; i < books.length; i++) {
        currentBook = books[i]
       // console.log(currentBook)
        contentText += '<tr>';
        contentText += '<td>'+currentBook.title+'</td>';
        contentText += '<td>'+currentBook.author_name[0]+'</td>';
        if (issetObj(currentBook.isbn))
            {
                contentText += '<td>'+currentBook.isbn[0]+'</td>';
            }else{
                contentText += '<td>N/A</td>';
            }
        contentText += '</tr>';
    }
    contentText += '</tbody>';
    contentText += '</table>';
    contentText += '</div>';
    return contentText;
}
