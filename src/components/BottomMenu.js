import React, { useState } from "react";
import "./MyComponent.css";
import "./BottomMenu.css";

const BottomMenu = () => {
  const [activeMenu, setActiveMenu] = useState("All");
  const [activeYear, setActiveYear] = useState(null);

  const profiles = [
    {
      continent: ["All", "Europe"],
      title: "Italy, Pisa",
      number: "1173",
      picture: "/images/italy.png",
      info: `The Leaning Tower of Pisa, or simply the Tower of Pisa (torre di Pisa), 
             is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its 
             nearly four-degree lean, the result of an unstable foundation. The tower is one of three 
             structures in Pisa's Cathedral Square (Piazza del Duomo), which includes the cathedral 
             and Pisa Baptistry.`,
    },
    {
      continent: ["All", "Europe"],
      title: "Spain, Sagrada Família",
      number: "1882",
      picture: "/images/spain.png",
      info: `The Basílica i Temple Expiatori de la Sagrada Família, otherwise known as Sagrada Família, 
             is a church under construction in the Eixample district of Barcelona, Catalonia, Spain. It is the largest unfinished Catholic church in the world. Designed by Catalan architect Antoni Gaudí (1852–1926), in 2005 his work on Sagrada Família was added to an existing (1984) UNESCO World Heritage Site, "Works of Antoni Gaudí". On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a minor basilica.`,
    },
    {
      continent: ["All", "America"],
      title: "US, Fallingwater",
      number: "1935",
      picture: "/images/us.png",
      info: `Fallingwater is a house designed by the architect Frank Lloyd Wright in 1935. Situated in the Mill Run section of Stewart township, in the Laurel Highlands of southwest Pennsylvania, about 70 miles (110 km) southeast of Pittsburgh in the United States, it is built partly over a waterfall on the Bear Run river. The house was designed to serve as a weekend retreat for Liliane and Edgar J. Kaufmann, the owner of Pittsburgh's Kaufmann's Department Store.`,
    },
    {
      continent: ["All", "Asia"],
      title: "Russia, Saint Basil's Cathedral",
      number: "2001",
      picture: "/images/russia.png",
      info: `The Cathedral of Vasily the Blessed (Russian: Собор Василия Блаженного, romanized: Sobor Vasiliya Blazhennogo), known in English as Saint Basil's Cathedral, is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia.`,
    },
  ];

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.continent.includes(activeMenu) &&
      (activeYear === null || profile.number > activeYear)
  );

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleYearClick = (year) => {
    setActiveYear(year);
  };

  return (
    <>
      <div className="bottomemenu">
        {["All", "Asia", "Europe", "America", "Oceania"].map((menu) => (
          <div
            key={menu}
            className={`bottomemenu-item ${
              activeMenu === menu ? "active" : ""
            }`}
            onClick={() => handleMenuClick(menu)}
          >
            {menu}
          </div>
        ))}
      </div>

      <div className="bottomYear">
        <div
          className="year1inner"
          style={{
            backgroundColor:
              activeYear === 1000 ||
              activeYear === 1300 ||
              activeYear === 1700 ||
              activeYear === 2000
                ? "black"
                : "#999999",
            color:
              activeYear === 1000 ||
              activeYear === 1300 ||
              activeYear === 1700 ||
              activeYear === 2000
                ? "white"
                : "black",
            cursor: "pointer",
            zIndex: 2,
          }}
          onClick={() => handleYearClick(1000)}
        >
          1000
        </div>
        <div
          className="line1"
          style={{
            backgroundColor:
              activeYear === 1300 || activeYear === 1700 || activeYear === 2000
                ? "black"
                : "#999999",
            zIndex: 1,
          }}
        ></div>

        <div
          className="year2inner"
          style={{
            backgroundColor:
              activeYear === 1300 || activeYear === 1700 || activeYear === 2000
                ? "black"
                : "#999999",
            color:
              activeYear === 1300 || activeYear === 1700 || activeYear === 2000
                ? "white"
                : "black",
            cursor: "pointer",
            zIndex: 2,
          }}
          onClick={() => handleYearClick(1300)}
        >
          1300
        </div>
        <div
          className="line2"
          style={{
            backgroundColor:
              activeYear === 1700 || activeYear === 2000 ? "black" : "#999999",
            zIndex: 1,
          }}
        ></div>

        <div
          className="year3inner"
          style={{
            backgroundColor:
              activeYear === 1700 || activeYear === 2000 ? "black" : "#999999",
            color:
              activeYear === 1700 || activeYear === 2000 ? "white" : "black",
            cursor: "pointer",
            zIndex: 2,
          }}
          onClick={() => handleYearClick(1700)}
        >
          1700
        </div>
        <div
          className="line3"
          style={{
            backgroundColor: activeYear === 2000 ? "black" : "#999999",
            zIndex: 1,
          }}
        ></div>

        <div
          className="year4inner"
          style={{
            backgroundColor: activeYear === 2000 ? "black" : "#999999",
            color: activeYear === 2000 ? "white" : "black",
            cursor: "pointer",
            zIndex: 2,
          }}
          onClick={() => handleYearClick(2000)}
        >
          2000
        </div>
      </div>

      {filteredProfiles.length > 0 && activeMenu !== "Oceania" ? (
        filteredProfiles.map((profile, index) => (
          <div
            key={index}
            className={`profile-section profile-section${index + 1}`}
          >
            <div className={`bottomprofile bottomprofile${index + 1}`}></div>
            <div
              className={`bottomprofiletitle bottomprofiletitle${index + 1}`}
            >
              {profile.title}
            </div>
            <div className={`bottomNumber bottomNumber${index + 1}`}>
              {profile.number}
            </div>
            <div className={`bottomFicture bottomFicture${index + 1}`}>
              <img src={profile.picture} alt={profile.title} />
            </div>
            <div className={`bottomInfo bottomInfo${index + 1}`}>
              {profile.info}
            </div>
          </div>
        ))
      ) : (
        <div className="no-profiles"></div>
      )}
    </>
  );
};

export default BottomMenu;
