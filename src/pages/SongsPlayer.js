import '../styles/SongsPlayer.css';

function SongsPlayer() {
  return (
    <div className="songs-container">
      <h1 className="songs-title">🎶 Song for you</h1>
      <p className="songs-subtitle">"A melody that plays only for you, Mehak 💖"</p>

      <div className="player-wrapper">
        <audio controls>
          <source src={require('../assets/our_song.mp3')} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>

      <div className="lyrics-box">
        <p>
          I found you in chaos, in moments unclear, <br />
          And suddenly, the world felt near. <br />
          Your laugh, your smile, your magic touch, <br />
          Oh Mehak, you mean so much. 💗
        </p>
      </div>
    </div>
  );
}

export default SongsPlayer;