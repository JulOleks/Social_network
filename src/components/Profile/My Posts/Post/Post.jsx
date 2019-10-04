import React from "react";

const Post = (props) => {
  return (
	
          <div className="post__item">
			  <img src={require("./../../../../img/Posts/ava1.jpg")} alt="" className="post__img"/>
			  {props.message}
			  <div>
			  	 <span>Likes:{props.like}</span>
			  </div>
			
			 
		  </div>
      );
};

export default Post;
