import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {

  return (
    <div className="">
		my post 
		<div>
		<textarea></textarea>
		<button>Add post</button>
		<button>Delete</button>
	</div>
       <Post message="Hello, how are you?" like="17"/>
       <Post message="Today is good weather" like="23"/>
	</div>
     
  );
};

export default MyPosts;
