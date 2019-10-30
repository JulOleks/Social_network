import React from "react";
import Post from "./Post/Post";

const MyPosts = ({ dispatch, state }) => {

	const postselem = state.profilesPage.posts.map(p => <Post message={p.message} like={p.likesCount} />)
	let newPostElem = React.createRef();
	


	let addPost = () => dispatch({ type: "ADD-POST" });

	let onPostChange = () => {
		let text = newPostElem.current.value;
		let action = { type: "UPDATE-NEW-POST-TEXT", newText: text }

		dispatch(action);
	}

	return (
		<div className="postsblock">
			<h3>My Posts</h3>
			<div>
				<div className="postsBlock__textarea">
					<textarea 
						onChange={onPostChange} 
						ref={newPostElem} 
						value={state.profilesPage.newPostText} 
					/>
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
