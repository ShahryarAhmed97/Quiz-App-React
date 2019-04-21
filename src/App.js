import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './components/Quiz.js';
import Result from './components/result';
import { Date } from 'core-js';



class App extends Component {

  constructor(){
    super();
    this.state={

    startQz:false,

      qNo:0,
      userArr:[],
      ansArr:[],
      resultReady:false,
      time:0,
      hide:true


    }
    this.startQuiz=this.startQuiz.bind(this)
  }


  startQuiz(){
    

    this.setState({
      startQz:true,
      hide:false
     

    })

  }

  

  generateResult(userArr,ansArr,time){

   

    this.setState({
      userArr:userArr,
      ansArr:ansArr,
      time:time,
      

      
      
    })


    
    if(userArr.length==10){

      
      this.setState({
        startQz:false,
        
        
      })
    }

    
    




  }

nextQue(){
  this.setState(
    {
      qNo:this.state.qNo+1,
    }
  )


}



  render() {
    return (
      <div className="App">
            {
        this.state.hide &&
          <div style={{textAlign:"center"}}>
          <br />
            <br />
            <br />
            <br />
            <h1>Quiz App</h1>
            <br />

          
           
            <h4>Ready to Take Challenge !!</h4>
            <br />


   

            <button  style={{fontSize:"1.3em",padding:"10px"}} className="btn btn-success" onClick={this.startQuiz}>Start Quiz</button>
          </div>
      }
    
       {
         this.state.startQz &&

        <Quiz  nextQue={this.nextQue.bind(this)}  queNo={this.state.qNo} genRes={this.generateResult.bind(this)} />
       }
        {
          this.state.userArr.length>=10 &&

        <Result  userArr={this.state.userArr}   ansArr={this.state.ansArr} time={this.state.time}  />
        } 
      </div>
    );
  }
}

export default App;
