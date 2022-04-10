const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',  async (req, res) => {
  try {
    const categoryData = await Category.findAll({    

          include: [{ model: Product}],
        });
        res.status(200).json(categoryData);
      } catch (err) {
        res.status(500).json(err);
      }
});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create({    

          include: [{ model: Category}],
        });
        res.status(200).json(categoryData);
      } catch (err) {
        res.status(500).json(err);
      }
});

router
.route('/:id')
.get( async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id,{    

          include: [{ model: Product}],
        });
        res.status(200).json(categoryData);
      } catch (err) {
        res.status(500).json(err);
      }
})
.put( async (req, res) => {
  try {
    const newCatData = await Tag.update(req.body, {where: { id: req.params.id }});
    res.status(200).json(newCatData);
  } catch (err) {
    res.status(400).json(err);
  }

})
.delete( async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No Category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
