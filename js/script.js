const form = document.querySelector("form");
const button = document.querySelector(".add-book");
const tableBody = document.querySelector(".table-body");
const error = document.querySelector(".error");

// Factory function
const addBook = function (title, author, pages) {
  const book = {
    title: title,
    author: author,
    pages: pages
  };
  return book;
};

button.addEventListener("click", function (e) {
  // Grab form info
  e.preventDefault();

  const inputs = form.elements;
  const titleValue = inputs["title"].value;
  const authorValue = inputs["author"].value;
  const pagesValue = inputs["pages"].value;
  if (
    titleValue.length === 0 ||
    authorValue.length === 0 ||
    pagesValue.length === 0
  ) {
    error.innerText = "Please fill all fields.";
    return;
  }

  // Create new book object
  const book = addBook(titleValue, authorValue, pagesValue);

  // Render to DOM
  addToTable(book);

  // Clear form
  clearForm();
});

const addToTable = function (book) {
  const tr = document.createElement("tr");
  console.log(book.title);
  const rowContents = `<td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td>`;
  tr.innerHTML = rowContents;
  tableBody.append(tr);
};

const clearForm = function () {
  form.reset();
  error.innerText = "";
};
