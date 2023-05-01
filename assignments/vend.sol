// SPDX-License-Identifier:MIT
contract vend{
    struct l1{
        string id;
        string Add;
        string[] prod;
    }
    l1[] public arr;
    l1 s1;
    l1 s2;
    l1 s3;
    constructor() public{
        s1.id="vendor1";
        s2.id="vendor2";
        s3.id="vendor3";
        s1.Add="0x4055F84B12A4b33f67bB4Bd067598Efc55a04e9C";
        s1.prod=["rice","wheat","medicines","carrot","beetroot","cycles","cars","jeeps","trucks","meat","milk","eggs","chana","potatoes","tomatoes"];
        s2.Add="0x651e91BA2bCE3a41311594cE3142be83e7D0cFde";
        s2.prod=["rice","wheat","medicines","carrot","beetroot","meat","milk","eggs","chana","potatoes","tomatoes"];
        s3.Add="0xaf6d107fe287e2ad53121881ca4624957e8d8f3a";
        s3.prod=["medicines","cycles","cars","jeeps","trucks"];
        arr.push(s1);
        arr.push(s2);
        arr.push(s3);
    }
   function getProd(string memory id) public view returns(string[] memory){
        for(uint i=0;i<arr.length;i++){
            if(keccak256(abi.encodePacked((arr[i].id)))==keccak256(abi.encodePacked((id)))){
                return arr[i].prod;
            }
        }
    }
    
    function get(string memory id) public view returns(string memory){
        for(uint i=0;i<arr.length;i++){
            if(keccak256(abi.encodePacked((arr[i].id)))==keccak256(abi.encodePacked((id)))){
                return arr[i].Add;
            }
        }
    }
}