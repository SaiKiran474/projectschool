//SPDX-License-Idetifier:MIT
pragma solidity 0.4.0;
contract demoDyByte{
    bytes public str="abc";
    function push_element() public {
        str.push("a");
    }
    // function get_element(uint index) public view returns(bytes1){
    //     return str[index];
    // }
    // function len() public view returns(uint){
    //     return str.length;
    // }
}
