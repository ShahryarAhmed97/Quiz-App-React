import React, { Component } from 'react';

class Quiz extends Component {

    constructor(props){
        super(props);
        this.state={
          quizArr:[],
          realAnsArr:[],
          realAns:'',
          chngQBol:0,
          time:0,

          resArr:[]
        }

        
      }

     


      

      componentDidMount(){

           
          fetch('https://opentdb.com/api.php?amount=10')
          .then(response => response.json())
          .then(res => 
            

                this.setState({
                    quizArr:res.results,
                })
            
        
            )


            setInterval(()=>{
                this.setState({
                    time:this.state.time+1,
                })
                


            },1000)




      }





      radioFun(e,inx){
        

        this.setState({

            realAns:inx,

        })

        
       

        
  }

      changQue(){

        this.setState({
            chngQBol:this.state.chngQBol+1,


          })
          

        this.state.resArr.push(this.state.realAns)
        this.setState({
            resArr:this.state.resArr
            
        })


        if(this.state.realAnsArr.length==0){

        
        this.state.quizArr.map((val,inx)=>{
         
            this.state.realAnsArr.push(val.correct_answer)

        })

        this.setState({
            realAnsArr:this.state.realAnsArr,
        })

      
    }

    if(this.state.chngQBol <= 10){

        this.props.genRes(this.state.resArr,this.state.realAnsArr,this.state.time)

    }

    

        this.props.nextQue()

      }


      


      renderQuiz(){

        if(this.state.quizArr.length){

            return(
                <div>
            <ul>
                {
                    this.state.quizArr.map((val,inx)=>{
                        if(this.props.queNo==inx  && inx!=11){

                        
                        return(


                            <li>
                                <h5>{val.question}</h5>
                                <div>
                                    {/* <li>{val.correct_answer}</li> */}
                                       <p>
                                   <li>
                                   <input type='radio' name={inx}   onChange={(e)=>this.radioFun(e,val.correct_answer)} />  {val.correct_answer}
                                       </li> 

                                    {val.incorrect_answers.map((val)=>{
                                        return(
                                            <li>
                                               <input type='radio' name={inx}  onChange={(e)=>this.radioFun(e,val)} /> {val}
                                            </li>
                                        )
                                    })}</p>
                                   
                                  


                                


                                </div>
                                <br />
                                
                <i style={{marginLeft:"350px"}}>
                    {
                        <button className="btn btn-warning" onClick={this.changQue.bind(this)}>Next</button>
                    }
                </i>


                            
                            
                            </li>
                            )
                }//if
                    })
                }




            </ul>

            </div>
          )
        }
       
        }
        
        render(){
          return(
              <div  style={{boxShadow:"0px 0px 20px grey",marginTop:"10%",padding:"50px"}} className="col-md-8 offset-md-2" >
                  {
                   this.renderQuiz()

                }
                  {
                

                  }
              </div>
          )
      }
}

export default  Quiz;
