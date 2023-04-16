//SPDX-License-Identifier:MIT
pragma solidity >=0.8.7;
contract sum{
    int a1;
    int b;
    function set(int x,int y) public{
        a1=x;
        b=y;
    }
    function get() public view returns (int){
        return a1+b;

    } 
    
}
