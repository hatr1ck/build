import React from 'react';
import reactjs from'../icons/React-icon.svg';
import html5 from'../icons/html5.svg';
import illustrator from'../icons/Illustrator.svg';
import typescript from'../icons/TypeScript.svg';
import javascript from'../icons/JavaScript.svg';
import mongodb from'../icons/mongodb.svg';
import node from'../icons/Node.svg';
import css from'../icons/Css.svg';
import sss from'../icons/redux.svg';
import bootstrap from'../icons/Boostrap.svg';
import jest from'../icons/jest.svg';
import material from '../icons/material-ui.svg';
import doc from '../icons/doc.svg';
import webpack from '../icons/webpack.svg';
import scss from '../icons/scss.svg';
import angular from '../icons/Angular.svg';
import django from '../icons/Django.svg';
import python from '../icons/python.svg';
import gatsby from '../icons/gatsby.svg';
import graphql from '../icons/GraphQL.svg';
import cpp from '../icons/c.svg';

class Icon extends React.Component {
  state = {
    techs:[
      {name:'Material-UI', comp: material},
      {name:'Illustrator', comp: illustrator},  
      {name:'NodeJS', comp: node}, 
      {name:'MongoDB', comp:mongodb},
      {name:'Webpack', comp:webpack},
      {name:'Docker', comp: doc},
      {name:'Angular', comp: angular},
      {name:'C++', comp: cpp},
      {name:'Python', comp: python},
      {name:'Django', comp: django}
    ],
    mein:[
      {name:'HTML5', comp: html5},
      {name:'CSS3', comp: css},
      {name:'JavaScript', comp: javascript},
      {name:'TypeScript', comp: typescript},
      {name:'SASS', comp: scss},
      {name:'React', comp: reactjs}, 
      {name:'Redux', comp:sss}, 
      {name:'Bootstrap', comp:bootstrap},
      {name:'Jest', comp: jest},
      {name:'Gatsby', comp: gatsby},
      {name:'GraphQL', comp: graphql}
    ]
  }

  render() {
    return (
      <div style={{display:'absolute'}}>
        <p style={{textAlign:'center'}}>Thigs that I use daily: </p>
      {this.state.mein.map((elem)=>{
      return (
        <div style={{display: 'inline-block', fontSize:'.7rem', textAlign: 'center', margin:'.5%'}} key={elem.name}>
        <img   src={elem.comp} height='35rem' alt='error'/>
        <div  className='item'>{elem.name}</div>
        </div>)
      })}
      <p style={{textAlign:'center'}}>Thigs that I use occasionally:</p>
{this.state.techs.map((elem)=>{
      return (
        <div style={{display: 'inline-block', fontSize:'.7rem', textAlign: 'center', margin:'.5%'}} key={elem.name}>
        <img   src={elem.comp} height='35rem' alt='error'/>
        <div  className='item'>{elem.name}</div>
        </div>)
      })}
      </div>
    );
  }
}
export default Icon;