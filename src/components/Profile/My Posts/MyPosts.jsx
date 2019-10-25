import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

	let postselem = props.posts.map(posts => <Post message={posts.message} like={posts.likesCount} />)

	let newPostElem = React.createRef();

	let addPost = () => {
		props.dispatch({ type: "ADD-POST" })
	}

	let onPostChange = () => {

		let text = newPostElem.current.value;
		console.log(text);

		props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
	}
	return (
		<div className="postsblock">
			<h3>My Posts</h3>
			<div>
				<div className="postsBlock__textarea">
					<textarea onChange={onPostChange} ref={newPostElem} value={props.newPostText} />
				</div>
				<div className="postsblock__buttons">
					<button onClick={addPost}>Add post</button>

				</div>
				<div className="postsblock__posts">
					{postselem}
				</div>
			</div>
		</div >

	);
};

export default MyPosts;
