import React, {PureComponent } from 'react'
class PureCompo extends PureComponent{
  constructor(){
    super()
    this.state={
      t:new Date().toLocaleTimeString()
    }
  }

  render(){
    console.log("Re-rendring render method only when state is changes");
    return(
      <>
      <div style={{display:'flex',alignContent:"center",justifyContent:"center"}}>
        <h1 style={{backgroundColor:"grey",width:200, textAlign:"center",padding:10}}>Time: {this.state.t}</h1>
      </div>
      </>
    )
  }
}
export default PureCompo