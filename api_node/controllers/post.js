const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Post = require('../models/Post');

// @desc      Get All Posts
// @route     GET /api/v1/post
// @access    Public
exports.getPosts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find();
  res.status(200).json({ success: true, count: posts.length, data: posts });
});

// @desc      Get Post By id
// @route     GET /api/v1/post/:postId
// @access    Public
exports.getPostById = asyncHandler(async (req, res, next) => {
  const postId = req.params.postId;
  const post = await Post.findById(postId);
  if (!post) {
    return next(
      new ErrorResponse(`${req.params.postId}에 해당하는 post를 찾을 수 없습니다. `, 404)
    );
  }
  res.status(200).json({ success: true, data: post });
});

// @desc      Create Post
// @route     POST /api/v1/post
// @access    Public
exports.createPost = asyncHandler(async (req, res, next) => {
  const post = await Post.create(req.body);
  res.status(201).json({
    success: true,
    data: post
  });
});

// @desc      Update Post by postId
// @route     PUT /api/v1/post/:postId
// @access    Public
exports.updatePostById = asyncHandler(async (req, res, next) => {
  const post = await Post.findByIdAndUpdate(req.params.postId, req.body, {
    new: true,
    runValidators: true
  });
  if (!post) {
    return next(
      new ErrorResponse(`${req.params.postId}에 해당하는 post를 찾을 수 없습니다. `, 404)
    );
  }
  res.status(200).json({ success: true, data: post });
});

// @desc      Delete Post by postId
// @route     DELETE /api/v1/post/:postId
// @access    Public
exports.deletePostById = asyncHandler(async (req, res, next) => {
  const post = await Post.findByIdAndDelete(req.params.postId);
  if (!post) {
    return res.status(400).json({ success: false });
  }
  res.status(200).json({ success: true, data: {} });
});
