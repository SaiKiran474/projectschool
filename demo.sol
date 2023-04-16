//SPDX-Lisence-Identifier:MIT
pragma solidity 0.8.0;
contract demoparent{
    //uint public age=10;
    // function getter() public view returns(uint){
    //     age+=1;
    //     return age;
    // }
    string public str;
    address public manager;
    constructor(){
        str="Hello World";
        manager=msg.sender;
    }
    function setter(string memory _str) public{
        str=_str;
    }

}
contract demochild is demoparent{
    uint public x;
    function getter() public returns(uint){
        x=10;
        return(x);
    }
}