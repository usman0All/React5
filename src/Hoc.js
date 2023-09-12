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
      let filterData=data.filter((d)=>{    
        if(entity==="users"){
          const {name}=d;
           return (
            <>
            <div key={d.id}>
            {name.indexOf(term)>=0}
            </div>
            </>
           )
        }
        if(entity==="todos"){
          const {title}=d;
          return (
            <>
              <div key={d.userId}>
                {title.indexOf(term)>=0}
              </div>
            </>
          )
        }
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