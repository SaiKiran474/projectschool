//SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 ;
contract demo{
    int num;
    constructor(){
        num=5;
    }
    function getter() public view returns(int){
        return num;
    }
    function setter() public {
        num=num+1;
    }
}