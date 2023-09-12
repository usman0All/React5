import React, {Component} from 'react'
const Hoc=(WrappedComponent,entity)=>{
  return class extends Component{
    state={
      data:[],
      term:""
    }
    componentDidMount(){
      const fetchData= async ()=>{
        const res=await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
        const json=await res.json();
        this.setState({...this.state,data:json})
       };
       fetchData();
      }
    render(){
      let {data,term}=this.state;
      let filterData=data.slice(0,10).filter((d)=>{  
        let{name,title}=d
        if(entity==="users"){
           return name.indexOf(term)>=0
          }
        if(entity==="todos"){
          return title.indexOf(term)>=0
        }
        return ""
      })
      return(
        <>
        <div>
          <h1>{entity}</h1>
          <input type='text' value={term} onChange={(e)=>{this.setState({...this.state ,term:e.target.value})}}/>
          <WrappedComponent data={filterData}></WrappedComponent>
          </div>
        </>
      )
    }
  }

}
export default Hoc;