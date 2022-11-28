import React, {useEffect} from 'react'
import SingleNews from '../../singlenews/SingleNews'
import Footer from '../../footer/Footer'
import './news.css'

function News() {
  
    console.log('ehheheheh')
  return (
    <div className='news'>
    <h2>Exqui across the glob news</h2>
    <p>Select from the various categories</p>
        <div className='categoryWrapper'>
            <div className='category'>
                <img className='newsImg' src={require('../../assets/career.jpg').default} alt=''/>
                <p>Technology</p>
            </div>
             <div className='category'>
                <img className='newsImg' src={require('../../assets/career.jpg').default} alt=''/>
                <p>Technology</p>
            </div>
             <div className='category'>
                <img className='newsImg' src={require('../../assets/career.jpg').default} alt=''/>
                <p>Technology</p>
            </div>
             <div className='category'>
                <img className='newsImg' src={require('../../assets/career.jpg').default} alt=''/>
                <p>Technology</p>
            </div>
             <div className='category'>
                <img className='newsImg' src={require('../../assets/career.jpg').default} alt=''/>
                <p>Technology</p>
            </div>
        </div>
        <div className='news--container'>
           <SingleNews/>
           <SingleNews/>
           <SingleNews/>
           <SingleNews/>
           <SingleNews/>
           <SingleNews/>
        </div>
        <Footer/>
    </div>
  )
}

export default News