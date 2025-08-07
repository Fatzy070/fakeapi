const express = require('express')
const router = express.Router()
const Controller = require('../controller/PageController')
const upload = require('../middleware/multerUpload')

router.get('/products' , Controller.getProducts)
router.post('/products' ,upload.single('image') , Controller.createProduct)


module.exports = router