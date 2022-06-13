import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../Data/followerData";

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>
      {Followers.map((fl, id) => (
        <div className="follower">
          <div>
            <img src={fl.img} alt="" className="followerImg" />
            <div className="name">
              <span>{fl.name}</span>
              <span>@{fl.username}</span>
            </div>
          </div>

          <button className="btn fc-btn">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default FollowersCard;
