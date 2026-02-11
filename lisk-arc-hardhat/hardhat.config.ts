import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    liskSepolia: {
      url: process.env.LISK_SEPOLIA_RPC_URL || "",
      accounts: process.env.ACCOUNT_PRIVATE_KEY
        ? [process.env.ACCOUNT_PRIVATE_KEY]
        : [],
    },
    arcTestnet: {
      url: process.env.ARC_TESTNET_RPC_URL || "",
      accounts: process.env.ACCOUNT_PRIVATE_KEY
        ? [process.env.ACCOUNT_PRIVATE_KEY]
        : [],
    }
  },
  etherscan: {
    apiKey: {
      liskSepolia: process.env.ETHERSCAN_API_KEY || "abc",
      arcTestnet: process.env.ARC_API_KEY || "abc",
    }
  },
  customChains: [
    {
      network: "liskSepolia",
      chainId: 4202,
      urls: {
        apiURL: "https://sepolia-blockscout.lisk.com/api",
        browserURL: "https://sepolia-blockscout.lisk.com/",
      },
    },
    {
      network: "arcTestnet",
      chainId: 5042002,
      urls: {
        apiURL: "https://testnet.arcscan.app/api",
        browserURL: "https://testnet.arcscan.app/",
      },
    }
  ],
  sourcify: {
    enabled: false,
  },
};

export default config;
