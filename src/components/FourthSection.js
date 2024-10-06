import React from "react";
import "./MyComponent.css";

const FourthSection = ({ bgImage }) => {
  return (
    <div className="fourthDiv" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="fourthdivinfo"></div>
      <div className="fourtitle">Sed ut perspiciatis unde omnis</div>
      <div className="four2">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary.
      </div>
      <div className="four3"></div>
      <div className="four4">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore.
      </div>
    </div>
  );
};

export default FourthSection;
