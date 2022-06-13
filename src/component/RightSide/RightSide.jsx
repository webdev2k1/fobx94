import React, { useState } from "react";
import "./RightSide.css";
import { UilSetting } from "@iconscout/react-unicons";
import { UilBell } from "@iconscout/react-unicons";
import { UilEstate } from "@iconscout/react-unicons";
import { UilCommentAlt } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
      <div className="navIcons">
        <UilEstate />
        <UilBell />
        <UilCommentAlt />
        <UilSetting />
      </div>

      <TrendCard />

      <button className="btn r-btn" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
