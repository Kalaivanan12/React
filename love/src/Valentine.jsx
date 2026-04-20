import { useEffect, useState, useRef } from "react";
import "./App.css";
import loveSong from "./assets/music/Nee.mp3";

import img1 from "./assets/bun1.png";
import img2 from "./assets/bun2.jpeg";
import img3 from "./assets/bun3.jpeg";
import img4 from "./assets/bun4.jpeg";
import img5 from "./assets/bun5.jpeg";
import img6 from "./assets/bun6.jpeg";
import img7 from "./assets/bun7.jpeg";
import img8 from "./assets/bun8.jpeg";
import img9 from "./assets/bun9.jpeg";

export default function Valentine() {
  const [slide, setSlide] = useState(0);
  const [step, setStep] = useState(0);
  const startX = useRef(0);
  const audioRef = useRef(null);

  const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  // ✅ Smooth slideshow (never stops)
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [photos.length]);

  // ✅ Floating hearts background
  useEffect(() => {
    const heartInterval = setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "floating";
      heart.innerHTML = "❤️🫧";
      heart.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, 400);

    return () => clearInterval(heartInterval);
  }, []);

  // ✅ Swipe support
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX.current - endX > 50)
      setSlide((prev) => (prev + 1) % photos.length);

    if (endX - startX.current > 50)
      setSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // ✅ Heart burst effect
  const burstHearts = () => {
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div");
      heart.className = "burst";
      heart.innerHTML = "🧬❤️🫧";
      heart.style.left = 50 + Math.random() * 20 + "%";
      heart.style.top = "60%";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1500);
    }
    setStep(6);
  };

  return (
    <>
      <audio ref={audioRef} autoPlay>
        <source src={loveSong} type="audio/mp3" />
      </audio>

      <div className="box">
        <h1>Happy Valentine’s Day ❤️</h1>
        <h2>My Love, Bun ❤️🫧</h2>

        <div
          className="slideshow fade"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <img src={photos[slide]} alt="Love memories" />
        </div>

        {step === 0 && (
          <button onClick={() => setStep(1)}>
            Will you be my Valentine? 💍
          </button>
        )}

        {step === 1 && (
          <div className="question-box">
            <h3>Do you love me? 😘</h3>
            <button onClick={() => setStep(2)}>Yes ❤️</button>
            <button
              className="no-btn"
              onMouseEnter={(e) => {
                const btn = e.target;
                btn.style.position = "fixed";
                btn.style.left = Math.random() * 80 + "vw";
                btn.style.top = Math.random() * 80 + "vh";
              }}
            >
              No 🙈
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="question-box">
            <h3>Will you stay with me forever? 💕</h3>
            <button onClick={() => setStep(3)}>Yes always 😍</button>
             <button
              className="no-btn"
              onMouseEnter={(e) => {
                const btn = e.target;
                btn.style.position = "fixed";
                btn.style.left = Math.random() * 80 + "vw";
                btn.style.top = Math.random() * 80 + "vh";
              }}
            >
              No 🙈
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="question-box">
            <h3>Will you fight with me but still love me? 😜</h3>
            <button onClick={() => setStep(4)}>Obviously 😂❤️</button>
             <button
              className="no-btn"
              onMouseEnter={(e) => {
                const btn = e.target;
                btn.style.position = "fixed";
                btn.style.left = Math.random() * 80 + "vw";
                btn.style.top = Math.random() * 80 + "vh";
              }}
            >
              No 🙈
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="question-box">
            <h3>Will you grow old with me? 👵👴</h3>
            <button onClick={() => setStep(5)}>Forever & Ever 💞</button>
             <button
              className="no-btn"
              onMouseEnter={(e) => {
                const btn = e.target;
                btn.style.position = "fixed";
                btn.style.left = Math.random() * 80 + "vw";
                btn.style.top = Math.random() * 80 + "vh";
              }}
            >
              No 🙈
            </button>
          </div>
        )}

        {step === 5 && (
          <div className="question-box">
            <h3>So finally... will you marry me someday? 💍</h3>
            <button onClick={burstHearts}>YESSS 😍💖</button>
          </div>
        )}

        {step === 6 && (
          <div className="final-msg">
           <h1>Forever Us 💍❤️</h1>
           <p>You are My Everything LOVE❤️🫧 </p>
           <p>Thanks You for Coming into My Life Dear❤️🫧 </p>
          </div>
        )}
      </div>
    </>
  );
}
