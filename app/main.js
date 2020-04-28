
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
