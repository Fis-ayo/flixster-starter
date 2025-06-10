export default function NowPlaying ({onNowPlayingClick}){

    const handleClick = () => {
        onNowPlayingClick();
    }

    return (
        <button onClick={handleClick}>Now Playing</button>
    )
}