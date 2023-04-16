//SPDX-License-Identifier:MIT
pragma solidity 0.8.7;
contract demoStorage{
    string[] public vehicle=["car","bus","truck","bike"];
    function mem() public view{
        string[] memory v1 = vehicle;
        v1[0]="train";
    }
    function sto() public {
        string[] storage v1 = vehicle;
        v1[1]="ship";
    }
        
}