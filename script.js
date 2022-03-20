let myLibrary = [];
let idx = 0;

document.querySelector("#add_book_button").addEventListener('click', () => {
    let form = document.querySelector("#add_book_form");
    if (form.style.display === "none"){
        form.style.display = "block";
    }else{
        form.style.display = "none";
    }
});

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.idx = idx++;
}

let b1 = new Book("Harry Potter", "JK Rowling", 1055, false, 0);
let b2 = new Book("Star Wars", "George Lucas", 297, false, 1);
let b3 = new Book("Pooh Bear", "Tom Eddington", 44, true, 2);

myLibrary.push(b1);
myLibrary.push(b2);
myLibrary.push(b3);
displayLibrary();

function displayLibrary(){
    const library = document.querySelector("#library");
    for (book of myLibrary){
        div = document.createElement('div');
        div.id = `${book.idx}`;
        div.classList.add("book");

        let entry = document.createElement('p');
        entry.innerHTML = `${book.title} by ${book.author} | ${book.pages} pages | ${book.read ? 'read': 'not read'}`;
        
        let remove_button = document.createElement('button');
        remove_button.innerHTML = "Remove";
        
        let read_button = document.createElement('button');
        read_button.innerHTML = "Change Read Status";
        
        div.appendChild(entry);
        div.appendChild(remove_button);
        div.appendChild(read_button);
        library.append(div);
    }
}

function add_book_button(){

}
