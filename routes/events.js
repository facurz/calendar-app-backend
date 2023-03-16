/*
Events routes
/api/events
*/

const { Router } = require('express');
const router = Router();
const { validarJWT } = require('../middlewares/validar-jwt.js');
const {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento,
} = require('../controllers/events');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos.js');
const { isDate } = require('../helpers/isDate.js');

// router.use(validarJWT); // para establecer el middleware de orden superior y no repetirlo en cada ruta

// Obtener eventos
router.get('/', validarJWT, getEventos);

// Crear un nuevo evento
router.post('/', validarJWT,
[
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha inicio obligatoria').custom(isDate),
    check('end', 'Fecha fin obligatoria').custom(isDate),
    validarCampos
], 
crearEvento);

// Actualizar un evento
router.put('/:id', validarJWT, [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha inicio obligatoria').custom(isDate),
    check('end', 'Fecha fin obligatoria').custom(isDate),
    validarCampos
], actualizarEvento);

// Borrar evento
router.delete('/:id', validarJWT, eliminarEvento);

module.exports = router;
