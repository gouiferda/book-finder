var titleField = document.getElementById('title');
var authorField = document.getElementById('author');
var resultTag = document.getElementById('result');
var bookAPIauthorSearch = 'http://openlibrary.org/search.json?author='
var bookApiISBNget = 'https://openlibrary.org/api/books?bibkeys=ISBN:'
var apiFlags = '&jscmd=data&format=json'

function search() {

    resultTag.innerHTML = 'Loading...'
    var res = ''
    var bookTitle = titleField.value
    var bookAuthor = authorField.value
    var authorBetter = capitalizeWords(bookAuthor).replace(/\s/g, '+')

    getJSONData(bookAPIauthorSearch + authorBetter + apiFlags).then((data) => {
        res += 'For the  Author: "' + bookAuthor + '"'
        res += '<br>'
        res += 'Total books found: ' + data.docs.length
        //console.log(data.docs)
        res += '<br>'
        res += '<br>'
        var currentBook = ''
        var bookFound = null
        var bookISBN = ''
        for (var i = 0; i < data.docs.length; i++) {
            currentBook = data.docs[i]
            if (currentBook.title.toLowerCase().includes(bookTitle.toLowerCase())) {
                console.log(currentBook)
                bookFound = currentBook
                bookISBN = currentBook.isbn[0]
                console.log('isbn: ' + bookISBN)
                break;
            }
        }

        if (bookFound != null) {
            res += 'Book found details:<br>'
            res += 'Title: ' + bookFound.title
            res += '<br>'
            res += 'Author: ' + bookFound.author_name[0]
            res += '<br>'
            if (bookISBN != '') {
                console.log(bookApiISBNget + bookISBN + apiFlags);
                getJSONData(bookApiISBNget + bookISBN + apiFlags).then((dataBook) => {
                    var firstKey = Object.keys(dataBook)[0];
                    var bookDetails = dataBook[firstKey]
                    console.log(bookDetails)
                    res += '<br>'
                    res += 'Pages count: ' + bookDetails.number_of_pages
                    res += '<br>'

                    if ("subjects" in bookDetails) {
                        res += '<br>'
                        res += 'Subjects: '
                        for (var i = 0; i < bookDetails.subjects.length; i++) {
                            res += '<br>'
                            res += bookDetails.subjects[i].name
                        }
                    }
                    resultTag.innerHTML = res
                })
            }
        }
    })

}