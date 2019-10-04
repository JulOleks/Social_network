import React from "react";
import MyPosts from "./My Posts/MyPosts";

const Profile = () => {
  return (
    <div className="content">
      <div className="profile">
        <img src={require("./../../img/Profile/p1.jpg")}/>
       ava+ decription
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
