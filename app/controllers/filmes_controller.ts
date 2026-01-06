import type { HttpContext } from '@adonisjs/core/http'

import Filme from "#models/filme";

export default class FilmesController {
    index(){
        return Filme.query()
    }

    show(){

    }

    async store({request}:HttpContext){
        const dados = request.only(['nome', 'classificacao', 'sinopse', 'duracao', 'categoria_id'])
        return await Filme.create(dados)
    }
}