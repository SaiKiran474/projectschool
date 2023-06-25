import React, { useEffect, useState } from "react";
import Web3 from "web3";
import ABI from "../TrufleAbi/ABI1.json"
import ABI1 from "../TrufleAbi/ABI2.json"
import { useLocation, useNavigate } from "react-router-dom";
import ABI2 from "../TrufleAbi/ABI3.json"
// import pic from ".../public/nodatafound.png"
import NavBar from "./NavBar";
import axios from "axios";
export default function ADRR(){
    let account;
    const [res, setRes] = useState([]);
    const {state}=useLocation();
    let x=state.user;
    const Address= "0x0454c8f7e2F0B422DEEA286E8Cadc7502D37D53B";
    const Address1="0x53C7cfB590DEaCA8Bb642313D9Cc81adBBd0034F";
    const Address2="0x9Cb760212cCE95ecD30A77Ef76967D25bc4eB36A";
    console.log(state);
    useEffect(() => {
        get();
      }, [])

    const { ethereum } = window;
    const get = async () => {
        setRes([]);
        if(window.ethereum !== "undefined"){
            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            account = accounts[0];
        }
        window.web3 = await new Web3(ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
        const data = await window.contract.methods.getMyStructs().call();
        window.contract1 = await new window.web3.eth.Contract(ABI1, Address1);
        window.contract2 = await new window.web3.eth.Contract(ABI2, Address2);
        const z =await axios.get(`http://localhost:4000/Details?param1=ADST`,{withCredentials:true});
        const z1 =await axios.get(`http://localhost:4000/Details?param1=DDST`,{withCredentials:true});
        const y=z.data;
        const y1=z1.data;
        const d1=await window.contract2.methods.getMyStructs().call();
        let l,c=1,n,count=0,m=0;
        for (let i = 0; i < data.length; i++) {
            if(data[i][5]!="Approved"){
            count=0;c=0;
            count+=y1.length-2;
            console.log(d1)
            for(let j=0;j<y.length;j++){
                
                    for(let k=0;k<d1.length;k++){
                        console.log(d1[k][6],y[j].Name ,d1[k][5],data[i][6])
                        if(d1[k][6]==y[j].Name && d1[k][5]==data[i][6]){
                            c++;
                        }
                }
            }
            if(data[i][5]=="ASC"){
                c++;
            }
            console.log(c,count)
            if(c==1){
                console.log(l,x ,data[i][4],x && data[i][5],"Approved")
                if(data[i][4]==x && data[i][5]!="Approved" && data[i][5]!=x){
                    // tabledata = tabledata + ` <tr>
                    // <td>${data[i][0]}</td>
                    // <td>${data[i][1]}</td>
                    // <td>${data[i][2]}</td>
                    // <td>${data[i][3]}</td>
                    // <td>${data[i][4]}</td>
                    // <td><button onclick="Approve(${i})">Approve</button>
                    //     <button onclick="quote(${i})">Forward To Divisions</button></td>
                    // </tr> `;
                    if (!res.includes(data[[i]])) {
                        var arr=new Array(8);
                        arr[0]=data[i][0]; arr[1]=data[i][1]; arr[2]=data[i][2]; arr[3]=data[i][3]; arr[4]=data[i][4]; arr[5]=data[i][5]; arr[6]=data[i][6]; arr[7]="1"; 
                        setRes((prev) => [...prev, arr]);
                        m++;
                        console.log(arr,arr[7]==1);
                    }
                }
            }
            else if(c==count){
                console.log("HIIIII",data[i][4],data[i][4]==="ASC"||(1 && data[i][4]==="manufacturer"))
                if(data[i][4]==="ASC"||(1 && data[i][4]!="manufacturer")){
                    // tabledata = tabledata + ` <tr>
                    // <td>${data[i][0]}</td>
                    // <td>${data[i][1]}</td>
                    // <td>${data[i][2]}</td>
                    // <td>${data[i][3]}</td>
                    // <td>${data[i][4]}</td>
                    // <td><button onclick="quote(${i})">Forward To Manufacturer</button></td>
                    // </tr> `;
                    // m++;
                    if (!res.includes(data[[i]])) {
                        var arr=new Array(8);
                        arr[0]=data[i][0]; arr[1]=data[i][1]; arr[2]=data[i][2]; arr[3]=data[i][3]; arr[4]=data[i][4]; arr[5]=data[i][5]; arr[6]=data[i][6]; arr[7]="0"; 
                        setRes((prev) => [...prev, arr]);
                        m++;
                        console.log(arr,arr[7]==0);
                    }
                }
            }
            console.log(c,count)
        }
        // if(m==0){
        //     console.log("Hi")
        //     document.getElementById("Nodata").innerHTML = `<div class="row align-items-center g-lg-5 py-5">
        //         <div class="col-lg-7 text-center text-lg-start">
        //         <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">PENDING REQUESTS NOT AVAILABLE</h1>
        //         <p class="col-lg-10 fs-4"></p>
        //         </div>
        //         <div class="col-md-10 mx-auto col-lg-5">
        //         <div class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
        //         <p> WAITING FOR YOUR COMMAND MY BROTHER</p>
        //                 <img src="https://cdn.dribbble.com/users/4161631/screenshots/9511726/media/63ad021948f35bf9f89471e50c8b0610.jpg?compress=1&resize=1200x900&vertical=center" class="img-fluid " alt="...">
        //             </div>
        //             </div>
        //     </div>`
        // }
        // document.getElementById("tablebody").innerHTML = tabledata
        }
    }
    const quote=async(j,k,l)=>{

        if(window.ethereum !== "undefined"){
                const accounts = await ethereum.request({method: "eth_requestAccounts"});
                account = accounts[0];
            }
        window.web3 = await new Web3(ethereum);
            window.contract = await new window.web3.eth.Contract(ABI, Address);
            const data = await window.contract.methods.getMyStructs().call();
            console.log(j,k,l,x);
            if(k==x && l!=x){
                // await window.contract.methods.update(j,x) .send({ from: account });
                await window.contract.methods.ASC(j,x) .send({ from: account });
            }
            else{
                await window.contract.methods.update(j,"manufacturer") .send({ from: account });
            }
            const d1 = await window.contract.methods.getMyStructs().call();
            console.log(d1);
            get();
    }
    const Approve=async(i)=>{
        if(window.ethereum !== "undefined"){
                const accounts = await ethereum.request({method: "eth_requestAccounts"});
                account = accounts[0];
            }
        window.web3 = await new Web3(ethereum);
            window.contract = await new window.web3.eth.Contract(ABI, Address);
            const data = await window.contract.methods.getMyStructs().call();
            await window.contract.methods.Approve(i,x) .send({ from: account });
            get();
    }
    return(
        <div>
        <div id="Nodata"></div>
        <table id="ex1" class="table container">
            <thead>
                <tr>
                    <th>Sent To</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Approve</th>
                </tr>
            </thead>
            <tbody id="tablebody">

                {res.map((data, index) => (
                    <tr key={index}>
                        <td>{data[0]}</td>
                        <td>{data[1]}</td>
                        <td>{data[2]}</td>
                        <td>{data[3]}</td>
                        <td>{data[5]}</td>
                        {data[7]==="1"?
                        <td>
                            <button type="button" onClick={() => Approve(data[6])}>
                                Approve
                            </button>

                            <button type="button" onClick={() => quote(data[6],data[4],data[5])}>
                                Forward To Divisions
                            </button>
                        </td>:
                        <td>
                        <button type="button" onClick={() => quote(data[6],data[4],data[5])}>
                                Forward To manufacturer
                        </button>
                        </td>}
                    </tr>
                    
                ))}
            </tbody>
        </table>
    </div>
);
}