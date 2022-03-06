// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

interface IERC20{
    function balanceOf(address)external view returns(uint);
    function transfer(address adrr, uint amount) external returns(bool);
} 