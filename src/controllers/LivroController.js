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
    }
}