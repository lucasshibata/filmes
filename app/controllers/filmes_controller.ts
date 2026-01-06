import type { HttpContext } from '@adonisjs/core/http'

import Filme from "#models/filme";

export default class FilmesController {
    index(){
        return Filme.query()
    }

    show({params}:HttpContext){
        const id = params.id
        return Filme.findOrFail(id)
    }

    async store({request}:HttpContext){
        const dados = request.only(['nome', 'classificacao', 'sinopse', 'duracao', 'categoria_id'])
        return await Filme.create(dados)
    }

    async update({request, params}:HttpContext){
        const id = params.id
        const filme = await Filme.findOrFail(id)
        const dados = request.only(['nome', 'classificacao', 'sinopse', 'duracao', 'categoria_id']);
        filme.merge(dados)
        await filme.save()
        return filme
    }

    async destroy({params}:HttpContext){
        const id = params.id
        const filme = await Filme.findOrFail(id)
        filme.delete()
        return {sucess:true}
    }
}