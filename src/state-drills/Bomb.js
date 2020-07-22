import React from 'react'

class Bomb extends React.Component {

 constructor(props){
     super(props);
     this.interval = null
     
    }
     
    componentDidMount(){
        this.interval = window.setInterval(() => this.setState({count:this.state.count +1}), 1000);
    }
 componentWillUnmount(){
     window.clearInterval(this.interval);
 }
     
   state={
         count: 0
     }
   
//scope.clearInterval(intervalID)
 // when the component mounts +1 when it unmounts clear it when divisible by 2 tick otherwise tock if 8 or above boom
     render() {
         let bomb = "";
         if(this.state.count >= 8){
            bomb= 'BOOM!!!!'
         }else if(this.state.count % 2 === 0) {
             bomb = 'Tick'
         }else bomb = 'Tock';
         return (
         <div className="tick-tock-boom"><p>{bomb}</p></div>
         )
     }
}


export default Bomb;