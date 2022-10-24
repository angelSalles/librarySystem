const LivroService = require('../services/LivroService');

module.exports = {
    buscarTodos: async (req, res)=>{
        let json = {error:'', result:[]};
        let livro = await LivroService.buscarTodos();
        for(let i in livro){
            json.result.push({
                isbn: livro[i].isbn,
                book_name: livro[i].book_name,
                author: livro[i].author,
                number_pages: livro[i].number_pages,
                copies_available: livro[i].copies_available
            });
        }
        res.json(json);
    },
    buscarUm: async (req,res)=>{
        let json = {error:'', result:{}};
        let isbn = req.params.isbn;
        let livro = await LivroService.buscarUm(isbn);

        if(livro){
            json.result = livro;
        }

        res.json(json);
    },
    inserir: async (req,res)=>{
        let json = {error:'', result:{}};
        let isbn = req.body.isbn;
        let book_name= req.body.book_name;
        let author = req.body.author;
        let number_pages = req.body.number_pages;
        let copies_available = req.body.copies_available;

        console.log(req.params);

        if(isbn && book_name && author && number_pages && copies_available){
            await LivroService.inserir(isbn, book_name, author, number_pages, copies_available)
            json.result = {
                isbn, book_name, author, number_pages, copies_available
            }
        }else{
            json.error = 'Campos não enviados'
        }

        res.json(json);
    },
    alterar: async (req,res)=>{
        let json = {error:'', result:{}};
        let isbn = req.params.isbn;
        let book_name= req.body.book_name;
        let author = req.body.author;
        let number_pages = req.body.number_pages;
        let copies_available = req.body.copies_available;

        if(isbn && book_name && author && number_pages && copies_available){
            await LivroService.alterar(isbn, book_name, author, number_pages, copies_available)
            json.result = {
                isbn, book_name, author, number_pages, copies_available
            }
        }else{
            json.error = 'Campos não enviados'
        }

        res.json(json);
    },
    excluir: async(req,res)=>{
        let json = {error:'', result:{}};
        console.log(req.params);
        await LivroService.excluir(req.params.isbn)
        res.json(json);
    }
}