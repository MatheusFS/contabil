const { Router } = require('express');

const AssetController = require('./controllers/AssetController');
const OperationController = require('./controllers/OperationController');
const TotalsController = require('./controllers/TotalsController');
const CashFlowController = require('./controllers/CashFlowController');
 
const routes = Router();

// Métodos HTTP -> GET, POST, PUT, DELETE

// TIPOS DE PARÂMETROS
// Query params: request.query (Filtros, paginação, ordenação,...)
// Route params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

routes.get('/totals/ym/:year/:month', TotalsController.byYearMonth);

routes.get('/operations/c/:category', OperationController.byCategory);
routes.get('/operations/m/:month', OperationController.byMonth);
routes.get('/operations/ym/:year/:month', OperationController.byYearMonth);
routes.get('/operations/d/:start/:end', OperationController.byDates);
routes.post('/operations', OperationController.store);
routes.patch('/operations', OperationController.update);
routes.delete('/operation/:_id', OperationController.destroy);

routes.get('/assets', AssetController.index);
routes.post('/assets', AssetController.store);

routes.get('/cash_flow/s/ym/:year/:month', CashFlowController.sinceYearMonth);

module.exports = routes;