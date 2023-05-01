// SPDX-Lisence-Identifier:MIT
pragma solidity >=0.4.0;

contract vender1{
    struct l1 {
        string user_id;
        string[] prod;
        int[] quantity;
        string date;
        string status;
    }
    struct l2 {
        string user_id;
        string[] prod;
        int[] quantity;
        string date;
        string ven_id;
        int[] price;
        string ED;
        string id;
        string status;
        string trans;
    }
    l1[] public arr;
    l2[] public arr2;
    uint i=0;
    function push_element(string memory u,string[] memory p,int[] memory n1,string memory x,string memory y) public {
        l1 memory s1;
        s1.user_id=u;
        s1.prod=p;
        s1.quantity=n1;
        s1.date=x;
        s1.status=y;
        arr.push(s1);
    }
    function push_element1(l2 memory x) public{
             l2 memory s2;
            s2.user_id=x.user_id;
            s2.prod=x.prod;
            s2.quantity=x.quantity;
            s2.date=x.date;
            s2.ven_id=x.ven_id;
            s2.price=x.price;
            s2.ED=x.ED;
            s2.id=x.id;
            s2.status=x.status;
            s2.trans=x.trans;
            arr2.push(s2);
    } 
    function update(uint x,string memory id) public{
        for(i=0;i<arr2.length;i++){
            if(i==x ){
                arr2[i].status="accepted";
            }
            else if(keccak256(abi.encodePacked((arr2[i].id)))==keccak256(abi.encodePacked((id)))){
                arr2[i].status="rejected";
            }
        }
    }
    function getMyStructs() public view returns (l1[] memory) {
        return arr;
    }
    function getquotes() public view returns (l2[] memory) {
        return arr2;
    }
    function len() public view returns(uint){
        return arr.length;
    }
}