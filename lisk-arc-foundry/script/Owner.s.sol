// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Script} from "../lib/forge-std/src/Script.sol";
import {Owner} from "../src/Owner.sol";

contract OwnerScript is Script {
    Owner public ownerInstance;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        ownerInstance = new Owner();

        vm.stopBroadcast();
    }
}