CREATE DATABASE dbApiLivro;
USE dbApiLivro;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YES';
FLUSH PRIVILEGES;

CREATE TABLE livro(
	isbn varchar(13) primary key,
    book_name varchar(30),
    author varchar(50),
    number_pages int,
    copies_available int
);

INSERT INTO livro (isbn, book_name, author, number_pages, copies_available)
				VALUES ("9783161484100", "none", "none", "0", "0");
                
SELECT * FROM livro;

