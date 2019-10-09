import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {

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
			<Post message="Hello, how are you?" like="17"/>	
			<Post message="Today is good weather" like="23"/>
		</div>
	</div>
</div>
     
  );
};

export default MyPosts;
