import React from "react";
import NavBar from "./NavBar"
import { useLocation,Link, useNavigate, Outlet } from "react-router-dom";
import "../index.css"
import Register from "./Register";
import Transportation from "./Transportation";
export default function Dashboard(){
    const {state}=useLocation();
    // return(
    //     <div>
    //     <NavBar/>
    //     HLOOOOOOOOOOOOOOOOOOOOO</div>
    // )
    const navigate=useNavigate()
    const RequestForSupplies=()=>{
        navigate("request",{state:{"DD":state.DD,"user":state.user,"id":state.id}})
    }
    const RequestedSupplies=()=>{
        navigate("/RequestSent",{state:{"DD":state.DD,"user":state.user,"id":state.id}})
    }
    const ADRR=()=>{
        navigate("adrr",{state:{"DD":state.DD,"user":state.user,"id":state.id}})
    }
    const DDRR=()=>{
        navigate("/"+state.user+"/ddrr",{state:{"DD":state.DD,"user":state.user,"id":state.id}})
    }
    const DGRR=()=>{
        navigate("/"+state.user+"/dgrr",{state:{"DD":state.DD,"user":state.user,"id":state.id}})
    }
    const Register=()=>{
        navigate("/"+state.user+"/Register",{state:{"DD":state.DD,"user":state.user,"id":state.id}})
    }
    const Transportation=()=>{
        navigate("/"+state.user+"/Transportation",{state:{"DD":state.DD,"user":state.user,"id":state.id}})
    }
    console.log(state.DD,"ADST",state.DD==="ADST")
    if(state.DD==="ADST"){
        return(
            <div className="text-center">
                <NavBar/>
                <div className="page">
                    <div className="nav ">
                        <a><button className="m-2 pb-2 btn btn-dark"  onClick={RequestForSupplies}>REQUEST FOR SUPPLIES </button></a>
                        <a><button  className="m-2 pb-2 btn btn-dark" onClick={ADRR}>RECIEVED REQUESTS</button></a>
                        <a><button  className="m-2 pb-2 btn btn-dark" onClick={Transportation} >STATUS OF A REQUEST</button></a>
                        <a><button  className="m-2 pb-2 btn btn-dark" onClick={RequestedSupplies}>ALL REQUESTS</button></a>
                    </div>
                    <Outlet />
                </div>
                
        </div>
        )
    }
     else if(state.DD=="DDST") {
        return(
            <div className="text-center">
                <NavBar/>
                <div className="page">
                    <div className="nav ">
                        <a><button className="m-2 pb-2 btn btn-dark"  onClick={RequestForSupplies}>REQUEST FOR SUPPLIES </button></a>
                        <a><button  className="m-2 pb-2 btn btn-dark" onClick={DDRR}>RECIEVED REQUESTS</button></a>
                        <a><button  className="m-2 pb-2 btn btn-dark" onClick={Transportation}  >STATUS OF A REQUEST</button></a>
                        <a><button  className="m-2 pb-2 btn btn-dark" onClick={RequestedSupplies}>ALL REQUESTS</button></a>
                    </div>
                    <Outlet />
                </div>
                
        </div>
        )
    } 
    else if (state.DD==="DGST") {
        return(
            <div>
                <div className="text-center">
                <NavBar/>
                <div className="page">
                    <div className="navdg">
                        <a><button className="m-2 pb-2 btn btn-dark"  onClick={RequestForSupplies}>REQUEST FOR SUPPLIES </button></a>
                        <a><button  className="m-2 pb-2 btn btn-dark" onClick={DGRR}>RECIEVED REQUESTS</button></a>
                        <a><button  className="m-2 pb-2 btn btn-dark"  onClick={Transportation} >STATUS OF A REQUEST</button></a>
                        <a><button  className="m-2 pb-2 btn btn-dark" onClick={RequestedSupplies}>ALL REQUESTS</button></a>
                        <a><button className="m-2 pb-2 btn btn-dark" onClick={Register}>REGISTER</button></a>
                    </div>
                    <Outlet />
                </div>
                </div>
            </div>         
        )
    }   
    else {
        return(
            <div>
                <div className="text-center">
                <NavBar/>
                    <div className="page">
                        <div className="nav ">
                            <a><button  className="m-2 pb-2 btn btn-dark" onClick={DGRR}>RECIEVED REQUESTS</button></a>
                            <a href="Transportation"><button  className="m-2 pb-2 btn btn-dark"  >STATUS OF A REQUEST</button></a>
                        <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}