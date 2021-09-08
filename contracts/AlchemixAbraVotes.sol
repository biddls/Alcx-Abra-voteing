// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

interface ICauldronV2 {
    function userCollateralShare(address) external view returns (uint256);
}

contract AlchemixAbraVotes {
    function getUnderlyingALCXTokens(address account) external view returns (uint256){
        ICauldronV2 cauldron = ICauldronV2(0x7b7473a76D6ae86CE19f7352A1E89F6C9dc39020);
        return cauldron.userCollateralShare(account);
    }
}
