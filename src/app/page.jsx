'use client'

import User from "@/component/User"
import axios from "axios"
import getConfig from "next/config"
import { useEffect, useState } from "react"


export default function Home() {
  const [usersList,setUsersList]=useState([])
  const [changeCount,setChangeCount]=useState(0)
  const [createUserName,setCreateUserName]= useState("")
 
  async function createUser() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROOT_URL}/create-users`,
    {
      method: 'POST',
      
      body: JSON.stringify({
        userName:createUserName,
      }),
    },
  ).then((res) => res.json())
  setChangeCount(count=>count+1)
  console.log('res', response)
 }

 function handleCreateInput(e) {
  setCreateUserName(e.target.value)
 }
  useEffect(()=>{
    (async ()=>{
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT_URL}/read-users`).then(res=>res.json())
     setUsersList(response)
    })()
  },[changeCount])

  return (
    <div className="bg-red">
      <h4>Enter new user name:</h4>
      <input type="text" className="border-1 " onChange={handleCreateInput}/>
      <button className="" onClick={()=>createUser(createUserName)} >Create User</button>
      <strong className="block">
        {'Here\'s a list of user that you can edit too'}
      </strong>
      <ul>
        {usersList.length>0&& usersList.map(user=>{
        return(
          // eslint-disable-next-line react/jsx-key
          <User id={user._id} name={user.name} setChangeCount={setChangeCount}/>
          )
        })}
      </ul>
    </div>
  )
}
