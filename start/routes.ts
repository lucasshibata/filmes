import router from '@adonisjs/core/services/router'

const CategoriasController = () => import('#controllers/categorias_controller')
const FilmesController = () => import('#controllers/filmes_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/categorias', [CategoriasController, 'index'])

router.resource('/filmes', FilmesController).apiOnly()