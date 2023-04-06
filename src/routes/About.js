import { Outlet } from "react-router-dom"

export default function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}