import "./NowPlaying.css"

export default function NowPlaying({ onNowPlayingClick }) {
  const handleClick = () => {
    onNowPlayingClick();
  };

  return <button className="nowplaying-btn" onClick={handleClick}>Now Playing</button>;
}
