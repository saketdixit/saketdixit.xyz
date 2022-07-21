import React from "react";
import "../App.css";
function Picture() {
  return (
    <div className="-mt-40 mb-20">
      <img class="photo" src={require("./photo.png")} alt="" />
    </div>
  );
}

export default Picture;
