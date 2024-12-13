import React, { useState, useEffect } from "react";
import "./LoadingAnimation.scss";

const LoadingAnimation = () => {
  return (
    <div class="wrapper">
      <div class="box-wrap">
        <div class="box one"></div>
        <div class="box two"></div>
        <div class="box three"></div>
        <div class="box four"></div>
        <div class="box five"></div>
        <div class="box six"></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
