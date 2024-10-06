import React from "react";
import "./MyComponent.css";

const FirstAndThirdSection = ({ profiles }) => {
  return (
    <>
      <div className="firstDiv">
        <div className="secondDiv">Snap photos and share like never before</div>
      </div>
      <div className="thirdDiv">
        {profiles.map((profile) => (
          <div className="profile" key={profile.id}>
            <div
              className={profile.className}
              style={{ backgroundImage: `url(${profile.imageUrl})` }}
            >
              <div className="profilename">
                <h4>{profile.profilename}</h4>
              </div>
              <div className="profileinfo">{profile.profileinfo}</div>
              <div className="profilemore">LEARN MORE</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FirstAndThirdSection;
