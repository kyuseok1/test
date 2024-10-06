import React, { useState, useEffect } from "react";
import "./MyComponent.css";
import FourthSection from "./FourthSection";
import EmailSection from "./EmailSection";
import BottomMenu from "./BottomMenu";
import FirstAndThirdSection from "./FirstAndThirdSection";

const MyComponent = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      className: "profilecard1",
      profilename: "Sed ut perspiciatis",
      profileinfo:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
      imageUrl: "/images/img1.png",
    },
    {
      id: 2,
      className: "profilecard2",
      profilename: "Lorem ipsum dolor",
      profileinfo:
        "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      imageUrl: "/images/img2.png",
    },
    {
      id: 3,
      className: "profilecard3",
      profilename: "Nemo enim ipsam",
      profileinfo:
        "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.",
      imageUrl: "/images/img3.png",
    },
  ]);

  const [activeMenu, setActiveMenu] = useState("");
  const [bgImage, setBgImage] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const shuffleProfiles = (array) => {
    return array
      .map((profile) => ({ ...profile, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ id, className, profilename, profileinfo, imageUrl }) => ({
        id,
        className,
        profilename,
        profileinfo,
        imageUrl,
      }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailError(!validateEmail(emailValue));
  };

  const handleClick = () => {
    if (!emailError) {
      alert("Email submitted successfully!");
    }
  };

  const fetchRandomImage = async () => {
    const savedImage = localStorage.getItem("bgImage");
    if (savedImage) {
      setBgImage(savedImage);
    } else {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM"
        );
        const data = await response.json();
        const imageUrl = data.urls.regular;
        setBgImage(imageUrl);
        localStorage.setItem("bgImage", imageUrl);
      } catch (error) {
        console.error("이미지를 가져오는 중 오류 발생:", error);
      }
    }
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  useEffect(() => {
    const shuffledProfiles = shuffleProfiles(profiles);
    setProfiles(shuffledProfiles);
    fetchRandomImage();
  }, []);

  return (
    <>
      <FirstAndThirdSection profiles={profiles} />
      <FourthSection bgImage={bgImage} />
      <EmailSection
        email={email}
        emailError={emailError}
        handleEmailChange={handleEmailChange}
        handleClick={handleClick}
      />
      <div className="bottomDiv"></div>
      <div className="bottomDivtitle">
        Duis tincidunt ut ligula vitae mollis
      </div>
      <BottomMenu activeMenu={activeMenu} handleMenuClick={handleMenuClick} />
    </>
  );
};

export default MyComponent;
