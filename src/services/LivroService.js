const db = require('../db');

module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito,rejeitado)=>{
            db.query('SELECT * FROM livro', (error, results)=>{
                if(error){rejeitado(error); return;}
                aceito(results);
            });
        });
    },
    buscarUm: (isbn) =>{
        return new Promise((aceito,rejeitado)=>{
            db.query('SELECT * FROM livro WHERE isbn = ?', [isbn], (error,results)=>{
                if(error){rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },
    inserir: (isbn, book_name, author, number_pages, copies_available) =>{
        return new Promise((aceito,rejeitado)=>{
            db.query('INSERT INTO livro (isbn, book_name, author, number_pages, copies_available) VALUES (?, ?, ?, ?, ?);', 
            [isbn, book_name, author, number_pages, copies_available], 
            (error,results)=>{
                if(error){rejeitado(error); return;}
                aceito(results.insertIsbn);
            });
        });
    },
    alterar: (isbn, book_name, author, number_pages, copies_available) =>{
        return new Promise((aceito,rejeitado)=>{
            db.query('UPDATE livro SET book_name= ?, author= ?, number_pages= ?, copies_available= ? WHERE isbn=?', 
            [isbn, book_name, author, number_pages, copies_available], 
            (error,results)=>{
                if(error){rejeitado(error); return;}
                aceito(results);
            });
        });
    },
    excluir: (isbn) =>{
        return new Promise((aceito,rejeitado)=>{
            db.query('DELETE FROM livro WHERE isbn = ?',[isbn], (error, results)=>{
                if(error){rejeitado(error); return;}
                aceito(results);
            });
        });
    }
};