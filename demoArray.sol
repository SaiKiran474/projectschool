//SPDX-License-Identifier:MIT
pragma solidity 0.8.7;
contract demoArray{
    uint[4] public arr=[10,11,12,13];
    function insert(uint index,uint element) public{
        arr[index]=element;
    }
    function len() public view returns(uint){
        return arr.length;
    }
        
}