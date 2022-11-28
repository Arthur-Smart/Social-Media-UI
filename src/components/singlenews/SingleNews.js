import React from 'react'
import './singlenews.css'

function SingleNews() {
  return (
   
     <div className='single-news'>
            <img className='news-img-container' src={require('../assets/career.jpg').default} alt=''/>
                    <div className='news--content'>
                    <h5>Heading</h5>
                    <p>Desc</p>
                </div>
            </div>
  )
}

export default SingleNews