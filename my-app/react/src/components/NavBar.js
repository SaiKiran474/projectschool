import React from "react";
import { useLocation ,Link,Outlet, useNavigate} from "react-router-dom";
export default function NavBar(){
    // const x=localStorage["user"];
    // document.getElementById("user_name").innerHTML=`${x}`;
    // console.log(x);
    const { state } = useLocation();
    var list;
    if(state!=null){
      list=state.id;
    }
    const navigate=useNavigate()
    const GoHome=()=>{
      navigate("/"+state.user,{state:{"DD":state.DD,"user":state.user,"id":state.id}})
    }
    return(
        <div>
            <h4 className=" text-center">{state.DD}</h4>
            <nav class="navbar navbar-expand-lg bg-body-primary navbar-light bg-warning">
              <div class="container-fluid">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" onClick={GoHome}><button class="btn btn-info">Home</button></a>
                    </li>
                  </ul>
                  
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0  align-items-center">
                    <li >
                      <a id="user_name">{state.user}</a>
                    </li>
                    {/* <li>
                        <a href="">Process Flow</a>
                    </li> */}
                    <li class="nav-item">
                      <a class="nav-link" href="/"><button class="btn btn-info">Logout</button></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </div>      
    )
}