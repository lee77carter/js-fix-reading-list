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
  const book = addBook(titleValue, authorvalue, pagesValue);

  // Render to DOM
  addToTable();

  // Clear form
  clearForm();
});

const addToTable = function () {
  const tr = document.createElement("tr");
  const rowContents = `<td>${book.title}</td><td>${book.author}</td><td>${book.pages}</td>`;
  tr.innerHTML = rowContents;
  tableBody.append(tr);
};

const clearForm = function () {
  form.reset();
  error.innerText = "";
};
