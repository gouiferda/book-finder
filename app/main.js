//var titleField = document.getElementById('title');
var authorField = document.getElementById('author');
var resultTag = document.getElementById('result');
var bookAPIauthorSearch = 'http://openlibrary.org/search.json?author='
var bookApiISBNget = 'https://openlibrary.org/api/books?bibkeys=ISBN:'
var apiFlags = '&jscmd=data&format=json'

function search(bookTitleP = '', authorP = '') {

    resultTag.innerHTML = 'Loading...'
    var output = ''

    if (!issetObj(authorField)) return
    //var bookTitle = (bookTitleP == '') ? titleField.value : bookTitleP
    var bookAuthor = (authorP == '') ? authorField.value : authorP
    if (bookAuthor == '') {
        resultTag.innerHTML = 'Bad parameters!'
        return
    };


    var authorBetter = capitalizeWords(bookAuthor).replace(/\s/g, '+')

    //console.log(bookAPIauthorSearch + authorBetter + apiFlags);
    getJSONData(bookAPIauthorSearch + authorBetter + apiFlags).then((data) => {
        if (data.docs.length == 0) {
            resultTag.innerHTML = 'No result'
            return
        }
        // output += 'For the  Author: "' + bookAuthor + '"'
        // output += '<br>'
        // output += 'Total books found: ' + data.docs.length
        //console.log(data.docs)
        // output += '<br>'
        // output += '<br>'

        var booksArr = []

        var currentBook = ''
        var bookFound = null
        var bookISBN = ''
        for (var i = 0; i < data.docs.length; i++) {
            currentBook = data.docs[i]
            booksArr.push(currentBook);
            // if (currentBook.title.toLowerCase().includes(bookTitle.toLowerCase())) {
            //     console.log(currentBook)
            //     bookFound = currentBook
            //     bookISBN = currentBook.isbn[0]
            //     console.log('isbn: ' + bookISBN)
            //     break;
            // }
        }

        if (booksArr.length == 0) {
            resultTag.innerHTML = 'No result'
        }

        if (booksArr.length > 0) {
            resultTag.innerHTML = getBooksTable(booksArr)
        }

        // if (bookFound != null) {
        //     output += 'Book found details:<br>'
        //     output += 'Title: ' + bookFound.title
        //     output += '<br>'
        //     output += 'Author: ' + bookFound.author_name[0]
        //     output += '<br>'
        //     if (bookISBN != '') {
        //         console.log(bookApiISBNget + bookISBN + apiFlags);
        //         getJSONData(bookApiISBNget + bookISBN + apiFlags).then((dataBook) => {
        //             var firstKey = Object.keys(dataBook)[0];
        //             var bookDetails = dataBook[firstKey]
        //             console.log(bookDetails)
        //             output += '<br>'
        //             output += 'Pages count: ' + bookDetails.number_of_pages
        //             output += '<br>'

        //             if ("subjects" in bookDetails) {
        //                 output += '<br>'
        //                 output += 'Subjects: '
        //                 for (var i = 0; i < bookDetails.subjects.length; i++) {
        //                     output += '<br>'
        //                     output += bookDetails.subjects[i].name
        //                 }
        //             }
        //             outputChannel = output
        //         })
        //     }
        // }
    })

}