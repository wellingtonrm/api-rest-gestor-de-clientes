const Error = {
   mensagemErrorRota(req, res) {

    res.sendError("Endpoint incorreto, verefique a documentação", 400);
        // res.status(400).json({ 
        //     status: "Acesso negado!" 
        // });
    }
}
module.exports = Error;