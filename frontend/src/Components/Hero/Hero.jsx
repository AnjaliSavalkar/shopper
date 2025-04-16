// import React from "react";
// import "./Hero.css";
// import hand_icon from "../Assets/Frontend_Assets/hand_icon.png";
// import arrow_icon from "../Assets/Frontend_Assets/arrow.png";
// import hero_image from "../Assets/Frontend_Assets/hero_image.png";
// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="hero-left">
//         <h2>NEW ARRIVALS ONLY</h2>
//         <div className="hero-hand-icon">
//           <p>new</p>
//           <img src={hand_icon} alt="" />
//         </div>
//         <p>collections</p>
//         <p>for everyone</p>
//         <div className="hero-latest-btn">
//           <div>Latest Collection</div>
//           <img src={arrow_icon} alt="" />
//         </div>
//       </div>
//       <div className="hero-right">
//         <img src={hero_image} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Hero;



import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/Frontend_Assets/hand_icon.png";
import arrow_icon from "../Assets/Frontend_Assets/arrow.png";
import hero_image from "../Assets/Frontend_Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>

        <div className="hero-hand-icon">
          <h1>new</h1>
          <img src={hand_icon} alt="hand-icon" />
        </div>

        <h1>collections</h1>
        <h1>for everyone</h1>

        <div className="hero-latest-btn">
          <span>Latest Collection</span>
          <img src={arrow_icon} alt="arrow-icon" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
