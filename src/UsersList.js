import React from 'react'
import Hoc from './Hoc';
const UsersList=({data})=>{
    let renderUser=data.map((user)=>{
        return(
        <div key={user.id}>
        <p>
        <strong>{user.name}</strong>
        </p>
        </div>
        )
    })
   // console.log(renderUser);
   return (
    <>
    <div> {renderUser}</div>
    </>
  )
}
const SearchUsers= Hoc(UsersList,"users")
export default SearchUsers