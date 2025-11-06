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
              src="anuanaimg.jpg"
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
    <button
      className="map-button"
      onClick={() =>
        window.open("https://maps.app.goo.gl/DXqYMmTWyjw8CN176", "_blank")
      }
    >
      📍 Location in Google Maps
    </button>
  </div>

  <div className="event-card">
    <h3>💃 Sangeet</h3>
    <p>Date: 3rd December 2025 (Evening)</p>
    <p>Fun, dance & music to celebrate love!</p>
    <button
      className="map-button"
      onClick={() =>
        window.open("https://maps.app.goo.gl/DXqYMmTWyjw8CN176", "_blank")
      }
    >
      📍 Location in Google Maps
    </button>
  </div>

  <div className="event-card">
    <h3>💍 Wedding Ceremony</h3>
    <p>Date: 4th December 2025</p>
    <p>Venue: Urmi Villa, Manda Road, Prayagraj</p>
    <p>Time: 4:00 PM onwards</p>
    <button
      className="map-button"
      onClick={() =>
        window.open("https://maps.app.goo.gl/UxZC3pDbtHeBaHys6", "_blank")
      }
    >
      📍 Location in Google Maps
    </button>
  </div>

  <div className="event-card">
    <h3>🎊 Wedding Reception</h3>
    <p>Date: 5th December 2025</p>
    <p>Venue: Hotel Legend, Prayagraj</p>
    <p>Time: 7:00 PM onwards</p>
    <button
      className="map-button"
      onClick={() =>
        window.open("https://maps.app.goo.gl/QbPpqaK74KdsEkQU8", "_blank")
      }
    >
      📍 Location in Google Maps
    </button>
  </div>
</div>

    </div>
  );
}

export default App;
