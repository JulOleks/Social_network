import React from "react";
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ dispatch, state }) => {
  return (
    <div className="content">
      <ProfileInfo />
      <MyPosts
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Profile;