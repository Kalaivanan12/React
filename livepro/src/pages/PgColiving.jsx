import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./PgColiving.css";
import "../App.css";

function PgColiving() {
  const partners = [
    {
      id: 1,
      name: "HelloWorld",
      img: "./src/img/po-live/medium1.avif",
      desc: "Enjoy high comfort & privacy without any compromise",
      btn: "View Properties",
    },
    {
      id: 2,
      name: "CoLive",
      img: "./src/img/po-live/medium2.avif",
      desc: "More than a home - Join The Party at CoLive",
      btn: "View Properties",
    },
    {
      id: 3,
      name: "NestAway",
      img: "./src/img/po-live/medium3.avif",
      desc: "Aim beyond basic and create a platform that goes beyond & providing easy living",
      btn: "View Properties",
    },
    {
      id: 4,
      name: "EasyLiving",
      img: "./src/img/po-live/medium4.avif",
      desc: "Easy living for everyone with flexible options and comfort",
      btn: "View Properties",
    },
  ];

  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pg-section">
        <div className="pg-overlay">
          <br />
          <h1>PG/Co-Living in Cuddalore</h1>

          <div className="search-wrap css-nc7111">
            <nav className="css-koo8qs">
              <ul className="navlist">
                <li><NavLink to="/" end>BUY</NavLink></li>
                <li><NavLink to="/rent">RENT</NavLink></li>
                <li><NavLink to="/commercial">COMMERCIAL</NavLink></li>
                <span className="custom-underline">
                  <li><NavLink to="/pg">PG/CO-LIVING</NavLink></li>
                </span>
                <li><NavLink to="/plots">PLOTS</NavLink></li>
              </ul>
            </nav>

            <div className="search-box">
              <div className="search-section dropdown-sec">
                <select className="search-dropdown">
                  <option>Cuddalore</option>
                  <option>Chennai</option>
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                </select>
              </div>

              <div className="search-section input-sec">
                <input
                  type="text"
                  placeholder="Search for locality, landmark, project, or builder"
                  className="search-input"
                />
                <button className="search-btn">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="coliving-section">
        <div className="coliving-container">
          <h2>
            Exclusive <span>Co-Living Partners</span>
          </h2>
          <p>Co-living is the new way of Urban Living</p>

          <button onClick={scrollLeft} className="scroll-btn left">
            <ChevronLeft />
          </button>

          <div ref={scrollRef} className="scroll-container">
            {partners.map((partner) => (
              <div key={partner.id} className="partner-card">
                {/* Left 70% */}
                <div className="partner-left">
                  <div className="partner-logo">
                    <img src="./src/img/po-live/" alt="" />
                    <h3>{partner.img}</h3>
                  </div>
                  <div className="partner-desc">
                    <p>{partner.desc}</p>
                  </div>
                  <div className="partner-btn">
                    <button>{partner.btn}</button>
                  </div>
                </div>

                {/* Right 30% */}
                <div className="partner-right">
                  <img src={partner.img} alt={partner.name} />
                </div>
              </div>
            ))}
          </div>

          <button onClick={scrollRight} className="scroll-btn right">
            <ChevronRight />
          </button>
        </div>
      </section>
    </>
  );
}

export default PgColiving;
