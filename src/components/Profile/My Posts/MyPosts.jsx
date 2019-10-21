import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {

	let state = props.store.getState();


	let postselem = state.profilesPage.posts.map(p => <Post message={p.message} like={p.likesCount} />)

	let newPostElem = React.createRef();
	let addPost = () => {
		props.store.addPost()
	}

	let onPostChange = () => {

		let text = newPostElem.current.value;
		console.log(text);
		props.store.updateNewPostText(text);
	}
	return (
		<div className="postsblock">
			<h3>My Posts</h3>
			<div>
				<div className="postsBlock__textarea">
					<textarea onChange={onPostChange} ref={newPostElem} value={props.store.state.profilesPage.newPostText} />
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
