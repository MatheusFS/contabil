const { Router } = require('express');

const DREController = require('./controllers/DREController');
const TotalsController = require('./controllers/TotalsController');
const CategoryController = require('./controllers/CategoryController');
const OperationController = require('./controllers/OperationController');
const AssetController = require('./controllers/AssetController');
 
const routes = Router();

// Métodos HTTP -> GET, POST, PUT, DELETE

// TIPOS DE PARÂMETROS
// Query params: request.query (Filtros, paginação, ordenação,...)
// Route params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

// routes.get('/categories', CategoryController.index);
// routes.post('/categories', CategoryController.store);

routes.get('/dre', DREController.index);

routes.get('/totals/ym/:year/:month', TotalsController.byYearMonth);

routes.get('/categories', CategoryController.fillable);

routes.post('/operations', OperationController.store);
routes.get('/operations/c/:category', OperationController.byCategory);
routes.get('/operations/m/:month', OperationController.byMonth);
routes.get('/operations/ym/:year/:month', OperationController.byYearMonth);
routes.get('/operations/d/:start/:end', OperationController.byDates);

routes.get('/assets', AssetController.index);
routes.post('/assets', AssetController.store);

module.exports = routes;