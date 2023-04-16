//SPDX-License-Idetifier:MIT
pragma solidity 0.4.0;
struct student{
    uint rollno;
    string name;
    
}
contract demo{
    student public s1;
    constructor(uint rno,string memory n){
        s1.rollno=rno;
        s1.name=n;
    }

}