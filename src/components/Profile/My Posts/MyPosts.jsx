import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
	debugger
	let postselem = props.state.profilesPage.posts.map(p => <Post message={p.message} like={p.likesCount} />)

	let newPostElem = React.createRef();

	let addPost = () => {
		props.dispatch({ type: "ADD-POST" })
	}

	let onPostChange = () => {

		let text = newPostElem.current.value;
		console.log(text);
		let action = { type: "UPDATE-NEW-POST-TEXT", newText: text }
		props.dispatch(action);
	}
	return (
		<div className="postsblock">
			<h3>My Posts</h3>
			<div>
				<div className="postsBlock__textarea">
					<textarea onChange={onPostChange} ref={newPostElem} value={props.state.profilesPage.newPostText} />
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
