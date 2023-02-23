import React from "react";
import { LeftSide } from "./LeftSide";
import { Middle } from "./Middle";
import { RightSide } from "./RightSide";

function Home() {
  return (
    <div className="container">
      <div className="row">
        {/* left */}
        <div className="col-xs-12 col-sm-9 col-md-5 col-sm-mx-auto col-lg-3">
          <LeftSide />
        </div>
        {/* middle */}
        <div className="col-xs-12 col-md-7 col-lg-6 mt-xs-3">
          <Middle />
        </div>
        {/* right */}
        <div className="col-lg-3 d-none d-lg-block">
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default Home;
