import React, { useEffect,useState } from "react";
import Web3 from "web3";
import ABI from "../TrufleAbi/ABI1.json"
import ABI1 from "../TrufleAbi/ABI2.json"
import { useLocation, useNavigate } from "react-router-dom";
import ABI2 from "../TrufleAbi/ABI3.json"
import axios from "axios";
// import pic from ".../public/nodatafound.png"
import NavBar from "./NavBar";
export default function ADRR(){
    const [res, setRes] = useState([]);
    let account;
    const {state}=useLocation();
    let x=state.user;
    const Address= "0x0454c8f7e2F0B422DEEA286E8Cadc7502D37D53B";
        const Address1="0x53C7cfB590DEaCA8Bb642313D9Cc81adBBd0034F";
    const Address2="0x9Cb760212cCE95ecD30A77Ef76967D25bc4eB36A";
    console.log(state);
    let C=0;
    useEffect(() => {
        get();
      }, [])
    const { ethereum } = window;
    const get = async () => {
        console.log(x);
        
        // const Address2=Address2;
        window.web3 = await new Web3(ethereum);
        if(window.ethereum !== "undefined"){
            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            account = accounts[0];
        }
        window.contract = await new window.web3.eth.Contract(ABI, Address);
        const data = await window.contract.methods.getMyStructs().call();
        window.contract1 = await new window.web3.eth.Contract(ABI1, Address1);
        window.contract2 = await new window.web3.eth.Contract(ABI2, Address2);
        const z =await axios.get(`http://localhost:4000/Details?param1=ADST`,{withCredentials:true});
        const z1 =await axios.get(`http://localhost:4000/Details?param1=DDST`,{withCredentials:true});
        const y=z.data;
        const y1=z1.data;
        const d1=await window.contract2.methods.getMyStructs().call();
        var tabledata = "";
        console.log(data,d1)
        let l,d,C=0;
            for(let j=0;j<y.length;j++){
                if(x==y[j].Name){
                    d=y[j].Id1;
                }
            } 
            for(let j=0;j<y1.length;j++){
                if(d==y1[j].Id){
                    d=y1[j].Name;
                }
            }
        for (let i = 0; i < data.length; i++) {
            if(data[i][5]!=="Approved"){
            let f=0;
            for(let j=0;j<y.length;j++){
                if(data[i][0]==y[j].Name){
                    l=y[j].Id1;
                }
            }
            for(let j=0;j<y1.length;j++){
                if(l==y1[j].Id){
                    l=y1[j].Name;
                }
            }
            console.log(d1.length,d1,data);
            for(let m=0;m<d1.length;m++){
                console.log(d1[i])
                console.log(d1[m][5],data[i][6],d1[m][6],x,"hi")
                if(d1[m][5]==data[i][6] && d1[m][6]==x){
                    f=1;
                }
            }
            console.log(data[i][0],x,d,l,f,data[i][4])
            if((data[i][0]!=x && d===l && f==0 && data[i][4]==d)|| data[i][5]=="ASC"&&data[i][0]!=x && d!=l&&f==0 ){
                if (!res.includes(data[[i]])) {
                    setRes((prev) => [...prev, data[i]]);
                    C++;
                }
                
            }}
        }
        console.log("Heloo ",C);
        if(C==0){
            console.log("Hi")
            document.getElementById("Nodata").innerHTML = `<div class="row align-items-center g-lg-5 py-5">
                <div class="col-lg-7 text-center text-lg-start">
                <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">PENDING REQUESTS NOT AVAILABLE</h1>
                <p class="col-lg-10 fs-4"></p>
                </div>
                <div class="col-md-10 mx-auto col-lg-5">
                <div class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                <p> WAITING FOR YOUR COMMAND MY BROTHER</p>
                        <img src="https://cdn.dribbble.com/users/4161631/screenshots/9511726/media/63ad021948f35bf9f89471e50c8b0610.jpg?compress=1&resize=1200x900&vertical=center" class="img-fluid " alt="...">
                    </div>
                    </div>
            </div>`
        }
      document.getElementById("tablebody").innerHTML = tabledata
    }
    const quote=async(k)=>{
        if(window.ethereum !== "undefined"){
                const accounts = await ethereum.request({method: "eth_requestAccounts"});
                account = accounts[0];
            }
        window.web3 = await new Web3(window.ethereum);
            window.contract = await new window.web3.eth.Contract(ABI, Address);
            const data = await window.contract.methods.getMyStructs().call();
            window.contract2=await new window.web3.eth.Contract(ABI2,Address2)
            var arr = new Array(7);
            for(let i=0;i<data.length;i++){
                if(data[i][6]===k){
                    arr[0]=data[i][0];
                    arr[1]=data[i][1];
                    arr[2]=data[i][2];
                    arr[3]=data[i][3];
                    arr[4]="Approved";
                    arr[5]=data[i][6];
                    arr[6]=x;
                }
            }
           
            // window.contract = await new window.web3.eth.Contract(ABI, Address);
            await window.contract.methods.Approve(k,x) .send({ from: account });
            await window.contract2.methods.push_element(arr).send({ from: account });
            get();
    }
    const reject=async(k)=>{
        if(window.ethereum !== "undefined"){
                const accounts = await ethereum.request({method: "eth_requestAccounts"});
                account = accounts[0];
            }
        window.web3 = await new Web3(ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
        window.contract2=await new window.web3.eth.Contract(ABI2,Address2)
        const data = await window.contract.methods.getMyStructs().call();
        var arr = new Array(7);
        console.log(data.length,await window.contract2.methods.getMyStructs().call());
        for(let i=0;i<data.length;i++){
                if(data[i][6]===k){
                arr[0]=data[i][0];
                arr[1]=data[i][1];
                arr[2]=data[i][2];
                arr[3]=data[i][3];
                arr[4]="Rejected";
                arr[5]=data[i][6];
                arr[6]=x;
                }
            }
            console.log("Rejected",arr)
            await window.contract2.methods.push_element(arr).send({ from: account });
           get();
    }
    return(
        <div>
            <div id="Nodata"></div>
            <table class="table">
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
                                    <td>{data[4]}</td>
                                    <td>
                                        <button type="button" onClick={() => quote(data[6])}>
                                            Accept
                                        </button>
                                        <button type="button" onClick={() => reject(data[6])}>
                                            Reject
                                        </button>
                                    </td>
                                </tr>
                                
                            ))}
                </tbody>
            </table>
        </div>
    )
}