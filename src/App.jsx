//import clock

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"

//clock css

import "@leenguyen/react-flip-clock-countdown/dist/index.css";

//import video

import VideoBg from '../src/assets/video.mp4';

//import css
import '../src/css/style.css'

function App() {
  
  // npm install --save @leenguyen/react-flip-clock-countdown
  return (
    <section className="page">
      {/* overlay */}
      <div className="overlay"></div>
      
      {/* video  autoplay para que corrar loop para que sea infinito muted para no tener controles*/}

      <video src={VideoBg} autoPlay loop muted ></video>
      <div className="page__content">
        <h1>Launching Soon</h1>
        <h3>Leave your email and we´ll let you know once the site goes live.</h3>
        {/* clock */}
        <FlipClockCountdown to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
        className="flip-clock" labels={['DAYS','HOURS','MINUTES','SECONDS']} duration={0.5}/>
      {/* button */}
      <button className="btn shake">NOTIFY ME</button>
      </div>

    </section>
  )
}

export default App
