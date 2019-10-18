import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {



	let postselem = props.posts.map(p => <Post message={p.message} like={p.likesCount} />)

	let newPostElem = React.createRef();
	let addPost = () => {
		debugger;
		let innerText = newPostElem.current.value;
		props.addPost(innerText)
		newPostElem.current.value = "";
	}
	return (
		<div className="postsblock">
			<h3>My Posts</h3>
			<div>
				<div className="postsBlock__textarea"><textarea ref={newPostElem}></textarea>
				</div>
				<div className="postsblock__buttons">
					<button onClick={addPost}>Add post</button>
					<button>Delete</button>
				</div>
				<div className="postsblock__posts">
					{postselem}
				</div>
			</div>
		</div >

	);
};

export default MyPosts;
