const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoriesData = await Category.findAll({include: Product});

    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, { include: Product });

    if (!categoryData) {
      res.status(404).json({ message: `No category with ID: ${req.params.id} found`});
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const createCategory = await Category.create(req.body);

    res.status(200).json(createCategory);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const previousData = await Category.findByPk(req.params.id);

    if (!previousData) {
      res.status(404).json({message: `No catagory with ID: ${req.params.id} exist`});
      return;
    };

    await Category.update(req.body, {where: {id: req.params.id}});
    const newData = await Category.findByPk(req.params.id);

    res.status(200).json(newData);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({where: {id: req.params.id}});

    if (!deleteCategory) {
      res.status(404).json({message: `No category found with ID: ${req.params.id}`});
      return;
    }

    res.status(200).json(deleteCategory);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
