import React from "react";

import { Link, Outlet } from "react-router-dom";

import { FaDoorOpen } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { ImPriceTags } from "react-icons/im";

import "../HomeStyle/Tabs.css";

const HomeTab = () => {
  return (
    <div className="HomeTab">
      <div className="NavTabs">
        <Link to="/Leave">
          <FaDoorOpen />
          <br />
          <p>Cancel at any time</p>
        </Link>
        <Link to="/Watch">
          <GiSmartphone />
          <br />
          <p>Watch anywhere</p>
        </Link>
        <Link to="/Price">
          <ImPriceTags />
          <br />
          <p>Pick Your Price</p>
        </Link>
      </div>
      <div className="OutLet">
      <Outlet />
      </div>
    </div>
  );
};

export default HomeTab;
