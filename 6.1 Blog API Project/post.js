import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		author: String,
	},
	{ timestamps: true }
);

const Post = new mongoose.model("Post", postSchema);

export default Post;
