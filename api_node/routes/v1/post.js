const express = require('express');
const router = express.Router();
const {
  getPosts,
  createPost,
  getPostById,
  updatePostById,
  deletePostById
} = require('../../controllers/post');

router.get('/', getPosts);
router.get('/:postId', getPostById);
router.post('/', createPost);
router.put('/:postId', updatePostById);
router.delete('/:postId', deletePostById);

module.exports = router;
