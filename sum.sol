//SPDX-License-Identifier:MIT
pragma solidity >=0.8.7;
contract sum{
    int a;
    int b;
    function set(int x,int y) public{
        a=x;
        b=y;
    }
    function get() public view returns (int){
        return a+b;

    } 
    
}