const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
		const tagsData = await Tag.findAll({include: Product});

		res.status(200).json(tagsData);
	} catch (err) {
		res.status(500).json(err);
	};
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
		const tagData = await Tag.findByPk(req.params.id, {include: Product});

		if (!tagData) {
			res.status(404).json({message: `No tag with ID: ${req.params.id} found`});
			return;
		};

		res.status(200).json(tagData);
	}catch (err) {
		res.status(500).json(err);
	};
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const createTag = await Tag.create(req.body);

    res.status(200).json(createTag);
  }catch (err) {
    res.status(500).json(err);
  };
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const previousData = await Tag.findByPk(req.params.id);

    if (!previousData) {
      res.status(404).json({message: `No tag with ID: ${req.params.id} found`});
      return;
    };

    await Tag.update(req.body, {where:{id: req.params.id}});
    const newData = await Tag.findByPk(req.params.id);

    res.status(200).json(newData);
  }catch (err) {
    res.status(500).json(err);
  };
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({where: {id: req.params.id}});

    if (!deleteTag) {
      res.status(404).json({message: `No tag with ID: ${req.params.id} found`});
      return;
    }

    res.status(200).json(deleteTag);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
