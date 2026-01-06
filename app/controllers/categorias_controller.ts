// import type { HttpContext } from '@adonisjs/core/http'

import Categoria from "#models/categoria";

export default class CategoriasController {
    index(){
        return Categoria.query()
    }
}