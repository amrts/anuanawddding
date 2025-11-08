import React, { useEffect, useState } from "react";
import "./App.css";
import "./Countdown.css"; // keep your countdown styling

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("December 4, 2025 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-wrapper">
      {/* 🌟 TOP SECTION — Image and Countdown */}
      <div className="page-container">
        {/* Left: Image Box */}
        <div className="image-section">
          <div className="image-box">
            <img
              src={`${process.env.PUBLIC_URL}/anuanaimg.jpg`}
              alt="Anamika and Anubhav"
              className="wedding-photo"
            />
          </div>
        </div>

        {/* Right: Text Box */}
        <div className="text-section">
          <div className="text-box">
            <h1>Finally!</h1>
            <h1>It's happening!</h1>
            <h2>Anamika & Anubhav</h2>
            <p>4th December 2025</p>

            {/* Countdown Section */}
            <div className="countdown-container">
              <div className="countdown-item">
                <span className="count">{timeLeft.days}</span>
                <span className="label">Days</span>
              </div>
              <div className="countdown-item">
                <span className="count">{timeLeft.hours}</span>
                <span className="label">Hours</span>
              </div>
              <div className="countdown-item">
                <span className="count">{timeLeft.minutes}</span>
                <span className="label">Minutes</span>
              </div>
              <div className="countdown-item">
                <span className="count">{timeLeft.seconds}</span>
                <span className="label">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🌸 BOTTOM SECTION — Wedding Events */}
      <div className="events-section">
        <h2>✨ Wedding Events ✨</h2>

        <div className="event-card">
          <h3>💛 Mehendi & Haldi</h3>
          <p>Date: 3rd December 2025</p>
          <p>Time: 3:00 PM onwards</p>
          <p>Venue: Urmi Villa, Manda Road, Prayagraj</p>
        </div>

        <div className="event-card">
          <h3>✨ Sangeet</h3>
          <p>Date: 3rd December 2025 (Evening)</p>
          <p>Venue: Urmi Villa, Manda Road, Prayagraj</p>
        </div>

        <div className="event-card">
          <h3>💞 Wedding Ceremony</h3>
          <p>Date: 4th December 2025</p>
          <p>Venue: Nidhi Vatika, Karchana, Prayagraj</p>
          <p>Time: 4:00 PM onwards</p>
        </div>
      </div>

      {/* ✨ Awaiting Section ✨ */}
      <div className="awaiting-section">
        <p> Awaiting Your Presence </p>
        <h2>
          ✨ Nirdosh Kumar Mishra, Sandhya Mishra, and the entire Mishra Family ✨
        </h2>
        <h3>
          8957025593 | 7521819917
        </h3>
      </div>

      {/* 🗺️ MAPS SECTION */}
      <div className="maps-container">
        {/* Urmi Villa Map */}
        <div className="map-card">
          <h3>Urmi Villa, Manda Road, Prayagraj</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d536.8062433704457!2d82.24032794020144!3d25.163143792903856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1762585508739!5m2!1sen!2sin"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Urmi Villa Map"
          ></iframe>
        </div>

        {/* 🪷 Nidhi Vatika Map */}
        <div className="map-card">
          <h3>Nidhi Vatika, Prayagraj</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.3828202832697!2d81.92453929999999!3d25.324932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398549007a4be41f%3A0xda8ac6e39a04831f!2sThe%20Mishra%20Farmhouse!5e0!3m2!1sen!2sin!4v1762585363273!5m2!1sen!2sin"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nidhi Vatika Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
