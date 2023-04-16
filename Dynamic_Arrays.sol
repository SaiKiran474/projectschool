//SPDX-License-Identifier:MIT
pragma solidity >=0.4.0;
contract demoArray{
    uint[] public arr;
    function push_element(uint item) public {
        arr.push(item);
    }
    function pop_element() public{
        arr.pop();
    }
    function len() public view returns(uint){
        return arr.length;
    }
}
