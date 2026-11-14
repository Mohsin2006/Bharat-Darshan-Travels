import { useEffect, useRef } from 'react'
import "./VideoPlayer.css"
import video from "../../assets/video.mp4"

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    if (playState) videoRef.current.play()
    else videoRef.current.pause()
  }, [playState])

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false)
    }
  }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video ref={videoRef} src={video} muted controls></video>
    </div>
  )
}

export default VideoPlayer
