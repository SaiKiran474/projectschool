//SPDX-License-Identifier:MIT
pragma solidity 0.8.7;
contract demoGlobal{
    function get() public view returns(uint gasLimit,uint blockNumber,uint blockTimestamp,address caller){
        return(block.gaslimit,block.number,block.timestamp,msg.sender);
    }
}
//epocconverter.com