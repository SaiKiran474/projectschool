//SPDX-License-Identifier:MIT
pragma solidity 0.4.0;
contract simpleContract{
    uint a;
    function set(uint x)public{
        a=x;
    }
    function get() view public returns(uint){
        return a;
    }
}