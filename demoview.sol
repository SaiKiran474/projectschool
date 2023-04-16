//SPDX-Lisence-Identifier:MIT
pragma solidity ^0.8.7;
contract demoview{
    uint public age=10;
    // function getter() public view returns(uint){
    //     age+=1;
    //     return age;
    // }
    function getter() public pure returns(uint){
        uint rollNo=100;
        return rollNo;
    }

}