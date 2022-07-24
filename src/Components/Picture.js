import React from "react";
import "../App.css";
function Picture() {
  return (
    <div>
      <img
        class="photo -mt-20 -mb-5 md:-mb-20 w-3/5 md:w-2/5"
        src={require("./photo.png")}
        alt=""
      />
    </div>
  );
}

export default Picture;
