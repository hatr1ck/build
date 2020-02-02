
import React from 'react'
import GridItem from '../components/imageQueries'
import '../styles/works.css'
import Menu from '../components/header'

const Grid = () => (
  <div className='wrapperss'>
      <Menu />
    <div className="grid">
      <GridItem image="puzzle" item="grid__item__puzzle" title={'15 puzzle'} backSideColor={'#664242'} backSideText="To solve the puzzle, the numbers must be rearranged into order (c) Wiki :D it's a boring project"/>
      <GridItem image="canvas" item="grid__item__canvas" title={'Canvas experiment'} backSideColor={'white'} backSideText="My canvas experiment. bunch of circles hitting each other and change color. Don't ask why..." />
      <GridItem image="socket" item="grid__item__socket" title={'Chat with socket.io'} backSideColor={'#0C668D'} backSideText="One page two chat connections, build with React/Node/Socket.io client/Socket.io server" />
      <GridItem image="tetris" item="grid__item__tetris" title={'Tetris'} backSideColor={'#8b6b9e'} backSideText="Popular tetris game build with html canvas." />
      <GridItem image="winter" item="grid__item__winter" title={'Winter challenge'} backSideColor={'#16164c'} backSideText="The contest that I won and got shirt&cup. Only html+css was allowed. https://community.thenetninja.co.uk/t/december-challenge-winter-scene/83" />
      <GridItem image="bigBen" item="grid__item__bigBen" title={'Clock challenge'} backSideColor={'#8389a8'} backSideText="Contest to build realtime clock with only HTML/CSS/JS. https://community.thenetninja.co.uk/t/feb-code-challenge-js-clock/266" />
      <GridItem image="life"   item="grid__item__life" title={'Game of life'} backSideColor={'#73b76e'} backSideText="Animated cells" />
    </div>
  </div>
)

export default Grid
