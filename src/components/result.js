import React, { Component } from 'react';


class Result extends Component {
    constructor(props){
        super(props);
        this.state={

            rightAns:0,
            wrongAns:0,
            percentResult:'',
            time:this.props.time,
            tStr:''


          
        }

        this.generateResult=this.generateResult.bind(this)
        this.showResult=this.showResult.bind(this)
      }

      componentDidMount(nextProps){

         
        this.generateResult()

      }


      generateResult(){
        const {userArr,ansArr}=this.props


        userArr.map((val,inx)=>{
            if(val===ansArr[inx])

            {
               this.state.rightAns=this.state.rightAns+1
                
 
            }
        })

        this.setState({
            rightAns:this.state.rightAns,
        })


    

    this.showResult()


       


      }

      showResult(){

        const {rightAns}=this.state


        let wrongAns= 10-rightAns;
        let pRes=(rightAns/10)*100
        pRes=pRes+'%'

        let ti=(this.state.time/60).toString()
        let min=ti.slice(0,ti.indexOf('.'))
        let sec= ti.slice(ti.indexOf('.')+1)
        sec=sec.slice(0,2)

      
        if(true){

            
            ti=min+' min :'+sec+"  sec"

            this.setState({
                tStr:ti
            })
            
            

        }
        
        this.setState({
            wrongAns:wrongAns,
            percentResult:pRes,
        
        })
         



      }

      startAgain(){
        window.location.reload()
      }
 

     render(){

        return(
              <div  style={{textAlign:"center",boxShadow:"0px 0px 20px grey",marginTop:"10%",padding:"50px"}}  className="col-md-8 offset-md-2" >
                <h1>
                    Result


                </h1>

                <h4>Right Answers : {this.state.rightAns}</h4>
                <h4>Wrong Answers : {this.state.wrongAns}</h4>
                <h4> Percentage : {this.state.percentResult}</h4>
                <h4>Time Taken : { this.state.tStr}</h4>
                

               <br />
               <br />
        <button className="btn btn-primary" onClick={this.startAgain.bind(this)} >Start Again</button>
            
              </div>
          )
      }

}


export default Result;
