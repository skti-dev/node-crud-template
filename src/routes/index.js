const express = require('express')
const router = express.Router()
const ItemModel = require('../models/ItemModel')

router.get('/items', (req, res) => {
  ItemModel.find()
    .then((items) => {
      res.json(items)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/items', (req, res) => {
  const item = new ItemModel({
    name: req.body.name,
    description: req.body.description,
  })

  item
    .save()
    .then((item) => {
      res.json(item)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.put('/items/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { name, description } = req.body

    const updatedItem = await Item.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    )

    if (!updatedItem) return res.status(404).json({ message: 'Item não encontrado' })

    res.json(updatedItem)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.delete('/items/:id', async (req, res) => {
  try {
    const { id } = req.params

    const deletedItem = await Item.findByIdAndRemove(id)

    if (!deletedItem) return res.status(404).json({ message: 'Item não encontrado' })

    res.json({ message: 'Item excluído com sucesso' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
