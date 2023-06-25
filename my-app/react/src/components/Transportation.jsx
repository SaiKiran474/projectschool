import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"
import { useLocation, useNavigate } from "react-router-dom";
import Web3 from "web3";
import ABI1 from "../TrufleAbi/ABI1.json"
import $ from "jquery"
import "datatables.net"
export default function Transportation(){
    let account;
    const navigate=useNavigate();
    const [res, setRes] = useState([]);
    console.log("Hi");
    const { state } = useLocation();
    let x=state.user;
    const HandleTransportation=(i)=>{
        navigate("./"+i,{state:{"DD":state.DD,"user":state.user,"id":state.id}})
    }
    const get = async () => {
        
        document.getElementById("user_name").innerHTML=`${x}`;
        console.log(x);
        let account;
        const ABI=ABI1;
        const Address = "0x0454c8f7e2F0B422DEEA286E8Cadc7502D37D53B";
        const { ethereum } = window;
        window.web3 = await new Web3(ethereum);
        if(window.ethereum !== "undefined"){
            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            account = accounts[0];
        }
        window.web3 = await new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
        const data = await window.contract.methods.getMyStructs().call();
    var tabledata = "";
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        
        if(x==data[i][0]  & data[i][5]=="Approved"){
            if (!res.includes(data[[i]])) {
                setRes((prev) => [...prev, data[i]]);
            }
        }
    }
    }
    useEffect(() => {
        get();
        $(document).ready( function () {
            $('#myTable').DataTable();
        })
      }, [])
       
    return(
        <div class="container">
            <h6>Requests Sent</h6>
            <table class="table" id="myTable"> 
                <thead>
                    <tr>
                        <th>Request Id</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Date</th>
                        <th>Approved by</th>
						<th>Status</th>
                    </tr>
                </thead>
                <tbody id="tablebody">
				{res.map((data, index) => (
                                
                                <tr key={index}>
                                    <td>{data[0]}</td>
                                    <td>{data[1]}</td>
                                    <td>{data[2]}</td>
                                    <td>{data[3]}</td>
                                    <td>{data[4]}</td>
                                    <td>
                                        <button type="button" onClick={(e)=>{HandleTransportation(data[6])}}>
                                        checkStatus
                                        </button>
                                    </td>
                                </tr>
                                
                            ))}	
                </tbody>
            </table>
    </div>
    )


}