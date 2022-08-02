import {Client} from "../Models/ClientModel.js";


export class ClientController{

    static listarTodos(req, res){
        let cliente = new Client('pedro','17','6576767')
        return res.status(200).json({
            mgs : "Rota tá funfando "
        })
    }
}