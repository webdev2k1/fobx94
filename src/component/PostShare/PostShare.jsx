import React, { useState, useRef } from "react";
import avtar from "../../img/avt.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="PostShare">
      <img src={avtar} alt="" />
      <div>
        <input type="text" placeholder="How are you ?" />

        <div className="postOptions">
          <div
            className="option"
            onClick={() => {
              imageRef.current.click();
            }}
          >
            <UilScenery color="#4cb256" />
            Photo
          </div>
          <div className="option">
            <UilPlayCircle color="#4a4eb7" />
            Video
          </div>
          <div className="option">
            <UilLocationPoint color="#ef5757" />
            Location
          </div>
          <div className="option">
            <UilSchedule color="#e1ae4a" />
            Schedule
          </div>

          <button className="btn ps-btn">Share</button>

          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>

        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
