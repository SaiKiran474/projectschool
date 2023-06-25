import React, { useEffect, useState } from "react";
import Web3 from "web3";
import ABI from "../TrufleAbi/ABI1.json"
import ABI1 from "../TrufleAbi/ABI2.json"
import { useLocation, useNavigate } from "react-router-dom";
import ABI2 from "../TrufleAbi/ABI3.json"
import NavBar from "./NavBar";
import $ from "jquery"
import axios from "axios";
import "datatables.net"
export default function ADRR() {
    const [res, setRes] = useState([]);
    let account;
    let dt = 0;
    const { state } = useLocation();
    let x = state.user;
    const Address = "0x0454c8f7e2F0B422DEEA286E8Cadc7502D37D53B";
    const Address1 = "0x53C7cfB590DEaCA8Bb642313D9Cc81adBBd0034F";
    const Address2 = "0x9Cb760212cCE95ecD30A77Ef76967D25bc4eB36A";
    console.log(state);
    const { ethereum } = window;
    let m=0;
    async function get() {
        setRes([]);
        if (window.ethereum !== "undefined") {
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            account = accounts[0];
        }
        window.web3 = await new Web3(ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
        const data = await window.contract.methods.getMyStructs().call();
        window.contract1 = await new window.web3.eth.Contract(ABI1, Address1);
        window.contract2 = await new window.web3.eth.Contract(ABI2, Address2);
        const z =await axios.get(`http://localhost:4000/Details?param1=ADST`);
        const z1 =await axios.get(`http://localhost:4000/Details?param1=DDST`);
        const y=z.data;
        const y1=z1.data;
        const d1 = await window.contract2.methods.getMyStructs().call();
        let l, c = 1, n, count = 0, f;
        for (let i = 0; i < data.length; i++) {
            c = 1;
            count = 0;
            f = 0;
            console.log(data);
            if (data[i][5] !== "Approved") {
                for (let j = 0; j < y.length; j++) {
                    if (data[i][0] === y[j].Name) {
                        l = y[j].Id1;
                    }
                }
                for (let j = 0; j < y1.length; j++) {
                    console.log(l, x)
                    if (l === y1[j].Id) {
                        l = y1[j].Name;
                    }
                    if (x === y1[j].Name) {
                        n = y1[j].Id;
                    }
                }
                for (let j = 0; j < y.length; j++) {
                    if (n === y[j].Id1) {
                        count++;
                    }
                }
                for (let j = 0; j < y.length; j++) {
                    if (n === y[j].Id1) {
                        console.log(n,y[j].Id1);
                        for (let k = 0; k < d1.length; k++) {
                            if (d1[k][6] === y[j].Name && d1[k][5] === data[i][6]) {
                                c++;
                                f = 1;
                            }
                        }
                    }
                }
                console.log(data[i])
                if (data[i][5] === "ASC") {
                    count += 1;
                }
                console.log(n, c, count, f);
                if (c !== count) {
                    if (((l === x && data[i][4] !== x && data[i][4] !== "Approved") || data[i][5] === "ASC") && f !== 1) {
                        //     tabledata = tabledata + ` <tr>
                        //     <td>${data[i][0]}</td>
                        //     <td>${data[i][1]}</td>
                        //     <td>${data[i][2]}</td>
                        //     <td>${data[i][3]}</td>
                        //     <td>${data[i][4]}</td>
                        //     <td><button type="button" onClick={() => Approve(0)}>
                        //     Approve
                        //   </button>
                        //         <button onClick={()=>{quote(0)}}>Forward To DGST</button>
                        //     </td>
                        //     </tr>`
                        if (!res.includes(data[[i]])) {
                            var arr=new Array(8);
                            arr[0]=data[i][0]; arr[1]=data[i][1]; arr[2]=data[i][2]; arr[3]=data[i][3]; arr[4]=data[i][4]; arr[5]=data[i][5]; arr[6]=data[i][6]; arr[7]="1"; 
                            setRes((prev) => [...prev, arr]);
                            m++;
                            console.log(arr,arr[7]==1);
                        }

                        
                    }
                }
                else {
                    if ((((l === x) && (data[i][4] !== "ASC") && (data[i][5] !== "Approved")) || (data[i][5] === "ASC" && f !== 1))) {
                        // tabledata = tabledata + ` <tr>
                        // <td>${data[i][0]}</td>
                        // <td>${data[i][1]}</td>
                        // <td>${data[i][2]}</td>
                        // <td>${data[i][3]}</td>
                        // <td>${data[i][4]}</td>
                        // <td><button onClick='quote(${i})'>Forward To DGST</button></td>
                        // </tr> `;
                        if (!res.includes(data[[i]])) {
                            var arr=new Array(8);
                            arr[0]=data[i][0]; arr[1]=data[i][1]; arr[2]=data[i][2]; arr[3]=data[i][3]; arr[4]=data[i][4]; arr[5]=data[i][5]; arr[6]=data[i][6]; arr[7]="0"; 
                            setRes((prev) => [...prev, arr]);
                            dt++;
                            m++;
                        }
                       
                    }
                }
            }
        }
        console.log(res, "hello everyone",dt);
    }
    useEffect(() => {
        console.log("Heloo")
       
        get();
    }, []);
    // const get = async () => {
    //     if(window.ethereum !== "undefined"){
    //         const accounts = await ethereum.request({method: "eth_requestAccounts"});
    //         account = accounts[0];
    //     }
    //     window.web3 = await new Web3(ethereum);
    //     window.contract = await new window.web3.eth.Contract(ABI, Address);
    //     const data = await window.contract.methods.getMyStructs().call();
    //     window.contract1 = await new window.web3.eth.Contract(ABI1, Address1);
    //     window.contract2 = await new window.web3.eth.Contract(ABI2, Address2);
    //     const y=await window.contract1.methods.get_data().call();
    //     const y1=await window.contract1.methods.get_divdata().call();
    //     const d1=await window.contract2.methods.getMyStructs().call();
    //     var tabledata = "";
    //     let l,c=1,n,count=0,f,m=0;
    //     for (let i = 0; i < data.length; i++) {
    //         c=1;
    //         count=0;
    //         f=0;
    //         console.log(i,"m");
    //         if(data[i][5]!=="Approved"){
    //             for(let j=0;j<y.length;j++){
    //                 console.log(data[i][0],y[j][1],l,x)
    //                 if(data[i][0]===y[j][1]){
    //                     l=y[j][0];
    //                 }
    //             }
    //             for(let j=0;j<y1.length;j++){
    //                 if(l===y1[j][0]){
    //                     l=y1[j][1];
    //                 }
    //                 if(x===y1[j][1]){
    //                     n=y1[j][0];
    //                 }
    //             }
    //             for(let j=0;j<y.length;j++){
    //                 if(n===y[j][0]){
    //                     count++;

    //                 }
    //             }
    //             for(let j=0;j<y.length;j++){
    //                 if(n===y[j][0]){
    //                     for(let k=0;k<d1.length;k++){

    //                         if(d1[k][6]===y[j][1] && d1[k][5]===data[i][6]){
    //                             console.log(d1[k],i,k,d1[k][6]===y[j][1],d1[k][5]===data[i][6])
    //                             c++;
    //                             f=1;
    //                         }
    //                     }
    //                 }
    //             }
    //             console.log(data[i])
    //             if(data[i][5]==="ASC"){
    //                 count+=1;
    //             }
    //             console.log(n,c,count,f);
    //             if(c!==count){
    //                 if(((l===x && data[i][4]!==x && data[i][4]!=="Approved")|| data[i][5]==="ASC")  && f!==1){
    //                 //     tabledata = tabledata + ` <tr>
    //                 //     <td>${data[i][0]}</td>
    //                 //     <td>${data[i][1]}</td>
    //                 //     <td>${data[i][2]}</td>
    //                 //     <td>${data[i][3]}</td>
    //                 //     <td>${data[i][4]}</td>
    //                 //     <td><button type="button" onClick={() => Approve(0)}>
    //                 //     Approve
    //                 //   </button>
    //                 //         <button onClick={()=>{quote(0)}}>Forward To DGST</button>
    //                 //     </td>
    //                 //     </tr>`
    //                     res.push(data[i]);
    //                     m++;
    //                 }
    //             }
    //             else{
    //                 if((((l===x) && (data[i][4]!=="ASC" )&& (data[i][5]!=="Approved"))||(data[i][5]==="ASC" && f!==1))){
    //                     tabledata = tabledata + ` <tr>
    //                     <td>${data[i][0]}</td>
    //                     <td>${data[i][1]}</td>
    //                     <td>${data[i][2]}</td>
    //                     <td>${data[i][3]}</td>
    //                     <td>${data[i][4]}</td>
    //                     <td><button onClick='quote(${i})'>Forward To DGST</button></td>
    //                     </tr> `;
    //                     m++;
    //                 }
    //             }
    //         }
    //     }
    //     console.log(res,"hello everyone");
    //     if(m===0){
    //         console.log("Hi")
    //         document.getElementById("Nodata").innerHTML = `<div class="row align-items-center g-lg-5 py-5">
    //             <div class="col-lg-7 text-center text-lg-start">
    //             <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">PENDING REQUESTS NOT AVAILABLE</h1>
    //             <p class="col-lg-10 fs-4"></p>
    //             </div>
    //             <div class="col-md-10 mx-auto col-lg-5">
    //             <div class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
    //             <p> WAITING FOR YOUR COMMAND MY BROTHER</p>
    //                     <img src="https://cdn.dribbble.com/users/4161631/screenshots/9511726/media/63ad021948f35bf9f89471e50c8b0610.jpg?compress=1&resize=1200x900&vertical=center" class="img-fluid " alt="...">
    //                 </div>
    //                 </div>
    //         </div>`
    //     }
    //     else{
    //         // document.getElementById("tablebody").innerHTML = tabledata
    //     }
    // }
    const Approve = async (i) => {
        if (window.ethereum !== "undefined") {
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            account = accounts[0];
        }
        window.web3 = await new Web3(ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);

        await window.contract.methods.Approve(i, x).send({ from: account });
        get();
    }
    const quote = async (i,k) => {
        if (window.ethereum !== "undefined") {
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            account = accounts[0];
        }
        window.web3 = await new Web3(ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
        const data = await window.contract.methods.getMyStructs().call();
        if (k === x) {
            await window.contract.methods.update(i, "ASC").send({ from: account });
        }
        else {
            await window.contract.methods.update(i, x).send({ from: account });
        }
        get();
    }
    return (
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

                                    <button type="button" onClick={() => quote(data[6],data[4])}>
                                        Forward To Units
                                    </button>
                                </td>:
                                <td>
                                <button type="button" onClick={() => quote(data[6],data[4])}>
                                        Forward To DGST
                                </button>
                                </td>}
                            </tr>
                            
                        ))}
                    </tbody>
                </table>
            </div>
        );
}