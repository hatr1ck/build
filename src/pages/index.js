import React from "react"
import '../styles/normalize.css'
import Header from "../components/header"
import 'bootstrap/dist/css/bootstrap.min.css'
import About from '../components/about'

const IndexPage = () => (
  <div className='App'>
    <About/>
    <Header/>
  </div>
)

export default IndexPage
