import React, {useContext, useState} from 'react';
import { VideosocketContext } from '../videocontext/VideoContext';


const Notificationalert = () => {
    const {answerCall, call, callAccepted} = useContext(VideosocketContext);
    return (
        <div className='notifications'>
           {
               call.isReceivedCall && !callAccepted && (
                   <>
                   <h1>{call.name} is calling</h1>
                   <button onClick={answerCall}>
                     Answer
                   </button>
                   </>
               )
           }
        </div>
    );
}

export default Notificationalert;
