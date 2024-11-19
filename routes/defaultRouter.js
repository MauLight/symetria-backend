const Router = require('express')
const { getHello } = require('../controllers/defaultRouter')

const defaultRouter = Router()

defaultRouter.get('/', getHello)

module.exports = defaultRouter