import React, { useState } from "react"
import axios from 'axios'
import css from '../styles/about.module.scss'
import code from '../images/code.svg'
import { faQuoteRight, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icons from './icon'

const About = () => {
  let [resume, setResume] = useState("")
  let [quote, setQuote] = useState("")
  let getKanye = ()=>{
    axios.get('https://api.kanye.rest/').then(data=>{
      setQuote(data.data.quote)
    })
  }
    let getResume = ()=>{
      axios.get('https://resumes.free.beeceptor.com').then((data)=>{
        setResume(data.data[Math.floor(Math.random()*19)])
    })
    }
  return (<div className={css.about}>
    {quote ? <p className={css.qoute}>"{quote}"</p> : null}

    <div className={css.intro}>
    <p>Hi! I'm hatr1ck.</p>
    <p>Developer. Thinker. Caffeine addict.</p>
    <p>This website belongs to wanna be webdev.  It's basically a place where some guy putting hes projects to share them with others.  If this about page is not hydrated enough you can use couple of mine best creations:</p>
    <div className={css.feature} onClick={getResume}>
    <FontAwesomeIcon style={{fontSize:'23px', marginRight:'15px'}} icon={faAddressCard} />
      Resume filler API
    </div>
    <div className={css.feature} onClick={getKanye}>
    <FontAwesomeIcon style={{fontSize:'23px', marginRight:'15px'}}  icon={faQuoteRight} />
      Kanye Rest API
    </div>
    {resume ? <p className={css.resume}>{resume}</p> : null}
    </div>
    {/* <p className={css.teckStack}>My teck stack:</p> */}
    <img className={css.computer} width="80%" src={code} />

    <div className={css.icons}>
    <Icons />
    </div>
  </div>
)}

export default About
