const Post = require('../models/Post');

// @desc      Get All Posts
// @route     GET /api/v1/post
// @access    Public
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ posts });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false });
  }
};

// @desc      Get Post By id
// @route     GET /api/v1/post/:postId
// @access    Public
exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: post });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false });
  }
};

// @desc      Create Post
// @route     POST /api/v1/post
// @access    Public
exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json({
      success: true,
      data: post
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false });
  }
};

// @desc      Update Post by postId
// @route     PUT /api/v1/post/:postId
// @access    Public
exports.updatePostById = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.postId, req.body, {
      new: true,
      runValidators: true
    });
    if (!post) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: post });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false });
  }
};

// @desc      Delete Post by postId
// @route     DELETE /api/v1/post/:postId
// @access    Public
exports.deletePostById = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.postId);
    if (!post) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false });
  }
};
