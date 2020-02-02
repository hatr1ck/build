import React, { Component } from 'react';
import '../styles/tetris.css';
import buttons from'../images/buttons.svg';
import gameover from '../images/gameover.svg'
import Menu from '../components/header'

class Tetris extends Component {
constructor(props) {
        super(props);
  this.state={
      randomNumber: 1,
      status:'',
      score: 0,
      lastScore:0,
      moveDown:false,
      moveLeft: false,
      moveRight: false,
      rotate: false,
      current:[],
      allGreen:[],
      speed: 1050,
      field:[[0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0]],
      position: {x:4,y:0},
      figures:[[[0,0,0,0],
                [0,0,0,0],
                [1,1,1,1],
                [0,0,0,0]],

               [[0,0,0],
                [1,1,1],
                [0,1,0]],

               [[1,1],
                [1,1]],

               [[1,1,0],
                [0,1,1],
                [0,0,0]],

               [[0,1,1],
                [1,1,0],
                [0,0,0]],

               [[0,0,1],
                [1,1,1],
                [0,0,0]],

               [[1,0,0],
                [1,1,1],
                [0,0,0]]

                ]
  }
}
  componentDidMount(){
      const ctx = this.refs.canvas.getContext('2d');
      ctx.scale(30,30);
    this.drawField(this.state.field)
   window.addEventListener("keydown", (e)=>{
    if(e.keyCode === 68 || e.keyCode === 39){
      this.moveRight();
    }
    if(e.keyCode === 83 || e.keyCode === 40){
      this.moveDown();
    }
    if(e.keyCode === 65 || e.keyCode === 37){
      this.moveLeft();
    }
    if(e.keyCode === 87 || e.keyCode === 38){
      this.rotate(this.state.figures[this.state.randomNumber]);
    }
});
   this.setState({
    status: 'Start'
   })

  }
  rotate =(matrix)=>{
    if(this.state.rotate){
    const N = matrix.length - 1;
    const result = matrix.map((row, i) => 
         row.map((val, j) => matrix[N - j][i])
    );
    matrix.length = 0;
    matrix.push(...result); 
    // this.setState({
    //   figure1:matrix looool 4Head
    // })
this.drawField()
    }
  }

  moveRight=()=>{
    if(this.state.moveRight){
  this.setState({
    position: {x:this.state.position.x+1, y:this.state.position.y},
    moveLeft: true
  })
  this.drawField()
}
  }

  moveLeft=()=>{
    if(this.state.moveLeft){
  this.setState({
    position: {x:this.state.position.x-1, y:this.state.position.y},
    moveRight: true
  })
  this.drawField()
}
  }

  moveDown=()=>{
    if(this.state.moveDown){
  this.setState({
    position: {x:this.state.position.x, y:this.state.position.y+1}
  })
  this.drawField()
  }
}

   componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  drawField=()=>{
    this.figureCoordinates()
if(Math.max.apply(null, this.state.current) === 19){

            return this.start()
          }
    let mockArr = this.state.field;
    const ctx = this.refs.canvas.getContext('2d');
    mockArr.map((arr, y)=>{
      return arr.forEach((elem, x)=>{
            if((this.state.current[0] === x && this.state.current[1] === y) || ( this.state.current[2] === x && this.state.current[3] === y) || ( this.state.current[4] === x && this.state.current[5] === y) || (this.state.current[6] === x && this.state.current[7] === y)){

             if(Math.max(this.state.current[0], this.state.current[2],this.state.current[4],this.state.current[6])===9
              || mockArr[this.state.current[1]][this.state.current[0]+1] === 1 ||
              mockArr[this.state.current[3]][this.state.current[2]+1] === 1 ||
              mockArr[this.state.current[5]][this.state.current[4]+1] === 1 ||
              mockArr[this.state.current[7]][this.state.current[6]+1] === 1){
              this.setState({
                moveRight:false
              })
             }
             else{
              this.setState({
                moveRight:true
              })
             }
            let counter1=0;
            let counter2=0;
            if(mockArr[this.state.current[1]][this.state.current[0]+1] === 1){
              counter2++;
            } //here
              if(mockArr[this.state.current[3]][this.state.current[2]+1] === 1){
              counter2++;
            }
              if(mockArr[this.state.current[5]][this.state.current[4]+1] === 1){
              counter2++;
            }
              if(mockArr[this.state.current[7]][this.state.current[6]+1] === 1){
              counter1++;
            }
              if(mockArr[this.state.current[1]][this.state.current[0]-1] === 1){
              counter2++;
            }
              if(mockArr[this.state.current[3]][this.state.current[2]-1] === 1){
              counter2++;
            }
              if(mockArr[this.state.current[5]][this.state.current[4]-1] === 1){
              counter2++;
            }
              if(mockArr[this.state.current[7]][this.state.current[6]-1] === 1){
              counter2++;
            }
            if(counter1>1 || counter2>1 || counter1+counter2 === 2 ||
            [this.state.current[0], this.state.current[2],this.state.current[4],this.state.current[6]].filter(elem=>{ //rotation blocking
              return elem === 9 || elem === 0;
            }).length > 2){
              this.setState({
                rotate:false
              })
            }
            else{
              this.setState({
                rotate:true
              })
            }
             if(Math.min(this.state.current[0], this.state.current[2],this.state.current[4],this.state.current[6])===0
              || mockArr[this.state.current[1]][this.state.current[0]-1] === 1 ||
              mockArr[this.state.current[3]][this.state.current[2]-1] === 1 ||
              mockArr[this.state.current[5]][this.state.current[4]-1] === 1 ||
              mockArr[this.state.current[7]][this.state.current[6]-1] === 1){
              
              this.setState({
                moveLeft:false
              })
             }
             else{
              this.setState({
                moveLeft:true
              })
             }
             if(mockArr[y+1]!==undefined){
                  if(mockArr[y+1][x]===1 ){
            mockArr[this.state.current[1]][this.state.current[0]]=1;
            mockArr[this.state.current[3]][this.state.current[2]]=1;
            mockArr[this.state.current[5]][this.state.current[4]]=1;
            mockArr[this.state.current[7]][this.state.current[6]]=1;
              this.setState({
                randomNumber: Math.floor(Math.random()*7),
                position:{
                  x:4,
                  y:0
                }
              })
               }
                }
            }

          if(mockArr[y][x]===1 ||(this.state.current[0] === x && this.state.current[1] === y) || ( this.state.current[2] === x && this.state.current[3] === y) || ( this.state.current[4] === x && this.state.current[5] === y) || (this.state.current[6] === x && this.state.current[7] === y)){
            ctx.fillStyle='#ff9933';
            ctx.fillRect(x, y, 1, 1);
            // var image = new Image();
            // image.src = 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif'
            // ctx.drawImage(image,1,1);
          }
          else if((this.state.allGreen[0] === x && this.state.allGreen[1] === y) || ( this.state.allGreen[2] === x && this.state.allGreen[3] === y) || ( this.state.allGreen[4] === x && this.state.allGreen[5] === y) || (this.state.allGreen[6] === x && this.state.allGreen[7] === y)){
            
            mockArr[this.state.allGreen[1]][this.state.allGreen[0]]=1;
            mockArr[this.state.allGreen[3]][this.state.allGreen[2]]=1;
            mockArr[this.state.allGreen[5]][this.state.allGreen[4]]=1;
            mockArr[this.state.allGreen[7]][this.state.allGreen[6]]=1;
          }
          else {
            ctx.fillStyle='#009999';
            ctx.fillRect(x, y, 1, 1);
            mockArr[y][x] = 0;
          }
      })
    })
here:for(let y=mockArr.length-1; y>0; y--){
  for(let x=0; x<mockArr[y].length; x++){
    if(mockArr[1][x]===1){
    }
    if(mockArr[y][x]===0){
     continue here; 
    }
  }
  let row = mockArr.splice(y,1)[0].fill(0)
  mockArr.unshift(row)
  y++
  this.setState({
    score: this.state.score+1
  })
  this.newFigure()
}
    this.setState({
              field:mockArr,
              allGreen:[]
            })
          //console.table(this.state.field)
                        for(let i = 0; i<mockArr[1].length-1; i++){
                          if(mockArr[1][i]===1){
                          clearInterval(this.intervalId)
                          this.setState({
                            rotate: false,
                            lastScore: this.state.score,
                            moveDown:false,
                            score: 0,
                            speed: 1000,
                            status: 'Game',
     field:[[0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0]]
              })
                          break;
                          }
            }
  }
  re=()=>{
    this.setState({
     field:[[0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0]]
              })
  }
  figureCoordinates=()=>{
    let arr1 = [];
     this.state.figures[this.state.randomNumber].forEach((arr, y)=>{
      arr.forEach((elem, x)=>{
          if(elem !== 0){
            arr1.push(x + this.state.position.x);
            arr1.push(y + this.state.position.y);
          }
      })
    })
     this.setState({
              current: arr1
            })
  }

  start=()=>{
            this.setState({
              status:'',
              randomNumber: Math.floor(Math.random()*7),
              allGreen: [...this.state.allGreen, ...this.state.current],
              moveLeft: true,
              moveRight: true,
              position:{
                x: 4,
                y: 0
              }
            })
            clearInterval(this.intervalId);
            this.intervalId = setInterval(this.moveDown, this.state.speed);
            this.drawField()
  }
  newFigure=()=>{
    clearInterval(this.intervalId);
   this.intervalId = setInterval(this.moveDown, this.state.speed);
   this.setState({
    status:'',
    rotate: true,
    moveLeft:true,
    moveDown:true,
    moveRight:true,
    speed: this.state.speed - 100
   })
  }
  render() {
    return (
      <div className='tetris'>
      <Menu />
      {this.state.status === 'Game' ? 
        <div className='over'><img alt='404' src={gameover} height='100rem' className='imgt'/>
        <h1>Lines cleared: {this.state.lastScore}</h1>
        <div className='cont'>
        <button className='btn batan' onClick={this.newFigure}>RESET</button>
        </div>
        </div> 
      : null}
      {this.state.status === 'Start' ? 
        <div className='over'><img alt='404' src={buttons} height='150rem' className='imgt'/>
        <div className='cont'>
        <button className='btn  batan' onClick={this.newFigure}>Start</button>
        </div>
        </div> 
      : null}
        <div className="wree">
        <canvas ref="canvas" width={300} height={600}/>
        </div>
        </div>
    );
  }
}

export default Tetris;
