import React from "react";
import 
MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className="content">
      <ProfileInfo />
      
      <MyPosts />
    </div>
  );
};

export default Profile;
