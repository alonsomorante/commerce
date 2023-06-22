const express = require('express')
const router = express.Router()
const ProductsService = require('./../../services/product.service')

const service = new ProductsService()

router.get('/', (req, res) =>  {
  const {size} = req.query
  const product = service.explore(size)
  res.json(product)
})

router.get('/:id', (req, res) => {
  const {id} = req.params
  const findId = service.find(id)
  res.json(findId)
})


router.post('/',  (req, res) => {
  const body = req.body
  const newProduct = service.create(body)
  res.status(201).json(newProduct)
})


router.patch('/:id',  (req, res) => {
  const {id } = req.params
  const body = req.body
  const updateProduct = service.update(id, body)
  res.status(201).json(updateProduct)
})

router.delete('/:id',  (req, res) => {
  const {id } = req.params
  const body = req.body
  const deleteProduct = service.delete(id, body)
  res.json(deleteProduct)
})




module.exports = router