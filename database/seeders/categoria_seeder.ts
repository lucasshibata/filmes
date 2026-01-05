import Categoria from '#models/categoria'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Categoria.createMany([
      {nome:'Romance'},
      {nome:'Comédia'},
      {nome:'Terror'},
      {nome:'Drama'},
      {nome:'Animação'},
      {nome:'Ficção'}
    ])
  }
}