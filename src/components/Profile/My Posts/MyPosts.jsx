import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

	// let dataPost = [
	// 	{ id: 1, message: "Hello, how are you?", likesCount: 17 },
	// 	{ id: 1, message: "Today is good weather", likesCount: 23 }
	// ]

	let postselem = props.posts.map(p => <Post message={p.message} like={p.likesCount} />)
	return (
		<div className="postsblock">
			<h3>My Posts</h3>
			<div>
				<div className="postsBlock__textarea"><textarea></textarea>
				</div>
				<div className="postsblock__buttons">
					<button>Add post</button>
					<button>Delete</button>
				</div>
				<div className="postsblock__posts">
					{postselem}
				</div>
			</div>
		</div>

	);
};

export default MyPosts;
