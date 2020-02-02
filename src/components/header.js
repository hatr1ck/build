
import React, { useState } from "react"
import Email from './email'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {Link} from 'gatsby'
import '../styles/navbar.scss'
import Helmet from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faEnvelope, faBriefcase} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  let [close, setClose] = useState(true)
  let [contact, setContact] = useState(false)
  return (
<div className='badi'>
  <div className={`base ${close}`}>
    <div onClick={()=>{setClose(!close)}} className="menu">
        <div className="icon">
          <div className="bar"></div>
        </div>
    </div>
    <div className="icons">
        <i className="fa fa-user"><FontAwesomeIcon icon={faBriefcase} /></i>
        <i className="fa fa-calendar-o"><FontAwesomeIcon icon={faHome} /></i>
        <i className="fa fa-tachometer"><FontAwesomeIcon icon={faEnvelope} /></i>
    </div>
    <div className="section">
        <div className="cover1">
          <div className="cover2">
              <Link className="content" to="/"></Link>
          </div>
        </div>
    </div>
    <Link className="section-static top123" to="/works/"></Link>
    <div className="section-static bottom123" onClick={()=>{
      setContact(!contact)}}></div>
  </div>
  {contact ? <Email foo={setContact}/> : null}
<Helmet title="hatr1ck" defer={false}></Helmet>
</div>
  )
}


export default Header
