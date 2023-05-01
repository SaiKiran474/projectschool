// SPDX-License-Identifier:MIT
contract vend{
    struct l1{
        string id;
        int phno;
        string Add;
        string password;
    }
    l1[] public arr;
    l1 s1;
    l1 s2;
    l1 s3;
    constructor() public{
        s1.id="sai89@gmail.com";
        s2.id="kiran@gmail.com";
        s3.id="deleep@gmail.com";
        s1.phno=8977258936;
        s1.Add="0x34260FDeA8B8001C3974c94b6c82513D76b6543B";
        s1.password="123";
        s2.phno=8688979532;
        s2.Add="0xeeC0484e2cAa1f57cd98E2A5a37358C8057e34e8";
        s2.password="123";
        s2.phno=6281426914;
        s3.Add="0xcbde2A631A0248B92E4f631f12F5426f76dBa848";
        s3.password="123";
        arr.push(s1);
        arr.push(s2);
        arr.push(s3);
    }
    function register(l1 memory x) public{
        uint f=0;
        for(uint i=0;i<arr.length;i++){
            if(keccak256(abi.encodePacked((arr[i].id)))==keccak256(abi.encodePacked((x.id)))){
                f=1;
            }
        }
        if(f==0){
            arr.push(x);
        }
    }
    function verify(string memory id,string memory p) public view returns(bool){
        for(uint i=0;i<arr.length;i++){
            if(keccak256(abi.encodePacked((arr[i].id)))==keccak256(abi.encodePacked((id))) && keccak256(abi.encodePacked((arr[i].password)))==keccak256(abi.encodePacked((p)))){
                return true;
            }
            else{
                return false;
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