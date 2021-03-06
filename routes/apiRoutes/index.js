const router = require('express').Router();
const { apiGet, apiPost, apiDelete } = require('../../controllers/app.Controller');

router.get('/books', apiGet);

router.post('/books', apiPost);

router.delete('/books/:id', apiDelete);

module.exports = router;