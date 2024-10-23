import React, { useEffect, useState } from "react";
import "./App.css";
import myImage from './myImage.jpg'; // Adjust the path as necessary
import image1 from './a.jpg';
import image2 from './b.jpg';
import image3 from './c.jpg';
import image4 from './d.jpg';
import image5 from './e.jpg';
import image6 from './f.jpg';
import LoveQuestion from './LoveQuestion'; // Import the component

const App = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleScroll = () => {
    const scrollY = window.scrollY; // Get the vertical scroll position

    // Calculate tilt values based on scroll position
    const x = (scrollY / window.innerHeight) * 20 - 10; // Adjust values for desired tilt range
    const y = -((scrollY / window.innerHeight) * 20 - 10); // Invert for natural effect

    setTilt({ x, y });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <br />
      <div className="container">
        <h1>Happy 5th Month Anniversary! Harshuu</h1>

        <div className="image-container">
          <img
            src={myImage}
            alt="Anniversary"
            className="anniversary-image"
            style={{
              transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transition: "transform 0.1s, box-shadow 0.1s", // Smooth transition for tilting and shadow
              boxShadow: `0 ${Math.abs(tilt.y * 1.5)}px ${Math.abs(tilt.y * 2)}px rgba(0, 0, 0, 0.3), 
                          0 ${Math.abs(tilt.y * 1.5 + 5)}px ${Math.abs(tilt.y * 4)}px rgba(0, 0, 0, 0.2)`, // Dynamic shadow
            }}
          />
        </div>
        <br />
        <p>
          5 months ho bhi gye? pta bhi nhi chla! Abhi to purpose kiya tha abhi to aapne han kha tha,
          Chlo koi naa aapke sath aise hi to waqt bitana hai ki pta hi na chle. uhm hmm... to chliye kuch bnaya hai aapke liye. 💖
        </p>
        <div className="hearts">
          <div className="heart"></div>
        </div>
        
      </div>
      <br />
            <div className="container">
  <img src={image1} alt="Image 1" className="newImage" />
  <img src={image2} alt="Image 2" className="newImage" />
  <img src={image3} alt="Image 3" className="newImage" />
  <img src={image4} alt="Image 4" className="newImage" /> 
  <img src={image5} alt="Image 5" className="newImage" />
  <img src={image6} alt="Image 6"  className="newImage"/>

</div>
<br />
<div className="container">
  <h1>Ahhh She is Princess!!</h1>
</div>
<br />
<div className="container">
  <LoveQuestion/>
</div>
<br />
<div className="container">
  <h1>Abhi Shudh Hindi mei letter terko pasand haina!?</h1>
</div>
<br />
<div className="container">
  <p>Meri Pyaari Harshu,<br /><br />

Kya baat hai! 5 mahine ho gaye! 🎉 Aur mujhe pata hi nahi chala! 😲 Tumhare saath itna waqt bitane ke baad, aisa lagta hai jaise abhi to humne shuruaat ki thi! ⏳ Har pal tumhare saath aise guzarta hai ki time ka pata hi nahi chalta. ⏰✨

Aaj bhi yaad hai, jab tumhe pehli baar dekha tha, wo pal meri zindagi ka sabse khaas pal hai!! 😍❤️ Tumhari muskurahat 😁, tumhari baatein 💬, sab kuch itna khaas hai ki main chahta hoon yeh lamhe kabhi khatam na hon! 🌈💕

Tumhari yaadon mein kho jaata hoon 🥰, aur har baar sochta hoon ki kitna khushnnasib hoon main jo tum jaise pyaare insaan ke saath hoon! 🍀✨ Tumhara saath meri zindagi ko roshan karta hai 🌟, aur tumhare bina sab kuch adhoora sa lagta hai. 😔💔

 Ummeed hai ye sb tumhe pasand aayega, kyunki tumhe khush dekhna mujhe sabse zyada khushi deta hai! 😊💞

Bas yun hi saath mein waqt bitaate raho, aur hum dono hamesha khush rahein! 🎊 Tumhari khushi meri pehli priority hai! 💯💖

Tumse hamesha pyaar karta rahunga. 💌 <br /><br />

Tumhara, Swami ji </p>
  </div>    
  <br />
    <div className="container">
      <h1>I love You Harshuuu ❤️</h1>
    </div>
    <br />
    </div>
  );
};

export default App;
