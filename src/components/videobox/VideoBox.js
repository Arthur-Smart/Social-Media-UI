import React, {useContext} from 'react';
import { VideosocketContext } from '../videocontext/VideoContext';
import './videobox.css'

const Videobox = () => {

    const {name, callEnded, callAccepted, myVideo, userVideo, stream, call} = useContext(VideosocketContext)

    return (
        <div className='video-container'>
        {
            stream && (
              <div className='caller-video'>
                <div className='video-wrapper'>
                    <video playsInline muted autoPlay   ref={myVideo} className='caller-screen'/>
                    <p><b>Intiator:</b> {name || 'Name'}</p>
                </div>
            </div>
            )
        }
            {callAccepted && !callEnded && (
              <div className='reciever-video'>
                <div className='video-wrapper'>
                    <video playsInline autoPlay ref={userVideo}  className='reciever-screen'/>
                    <p><b>Reciever</b> {call.name || 'Name'}</p>
                </div>
            </div>
            )}
           
        </div>
    );
}

export default Videobox;
