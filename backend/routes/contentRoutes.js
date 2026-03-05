const express = require('express');
const multer = require('multer');
const auth = require('../middleware/auth');
const { getByType, createByType, updateByType, deleteByType } = require('../controllers/contentController');

const router = express.Router({ mergeParams: true });
const upload = multer({ dest: 'uploads/' });

router.get('/', getByType);
router.post('/', auth, upload.single('image'), createByType);
router.put('/:id', auth, upload.single('image'), updateByType);
router.delete('/:id', auth, deleteByType);

module.exports = router;
