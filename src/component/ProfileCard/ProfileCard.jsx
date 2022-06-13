import React from "react";
import Cover from "../../img/cover.jpg";
import avtar from "../../img/avt.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={avtar} alt="" />
      </div>

      <div className="ProfileName">
        <span>Khait</span>
        <span>Fresher Web Developer</span>
      </div>

      <div className="FollowStatus">
        <hr />
        <div>
          <div className="follow">
            <span>1000</span>
            <span>Followings</span>
          </div>

          <div className="vline"></div>

          <div className="follow">
            <span>2</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vline"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
