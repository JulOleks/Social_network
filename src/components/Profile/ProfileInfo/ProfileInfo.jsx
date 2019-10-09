import React from "react";



const ProfileInfo = () => {
  return (
    <div>
      <div className="profile">
          <div className="profile__img">
          <img src={require("../../../img/Profile/p1.jpg")}/>
          </div>
          <div className="profile__description">
        ava+ decription
        </div>
       </div>
  </div>
    );
};

export default ProfileInfo;
