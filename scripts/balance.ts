/* eslint-disable prettier/prettier */
import { Signer } from "ethers";
import { ethers } from "hardhat";
const hre = require('hardhat');

async function getBalanceOf() {
  const address = "0x205ab90806513017463f3d3869efdc29cb78a6b7";
//   const randAddress = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'
  const RBN = await ethers.getContractAt(
    "IERC20",
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
  );
//   const bal = await (await RBN).balanceOf(address);
//   console.log(bal);
// }

// @ts-ignore
    await hre.network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [address],
      });

      const signer: Signer = await ethers.getSigner(address);
     await RBN.connect(signer).transfer(address, 2000000);
    }

getBalanceOf().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// import { BigNumber, BigNumberish, Bytes, BytesLike, Signer } from 'ethers'
// import { ethers } from 'hardhat'
// //import {}

// async function checkDai() {
//   const address = '0xf53b2965d13404e5d13Ce40c7448F8E13F04034B'
//   const randAddress = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266'
//   const DAI = await ethers.getContractAt(
//     'IERC20',
//     '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E',
//   )

//   const balBefore = await DAI.balanceOf(address)
//   console.log(`Balance before is ${balBefore}`)

//   //impersonating account
//   //@ts-ignore
//   await hre.network.provider.request({
//     method: 'hardhat_impersonateAccount',
//     params: [address],
//   })
//   const signer: Signer = await ethers.getSigner(address)

//   const together: BytesLike = new ethers.utils.AbiCoder().encode(
//     ['address', 'uint256'],
//     [address, 2],
//   )
//   const position: BytesLike = ethers.utils.solidityKeccak256(
//     ['bytes'],
//     [together],
//   )

//   const dec: BigNumberish = BigNumber.from(position)
//   console.log(dec)
//   const balance = await ethers.provider.getStorageAt(DAI.address, dec)
//   //console.log(`balance is ${balance.toString()}`)
//   await ethers.provider.send('hardhat_setStorageAt', [
//     DAI.address,
//     position,
//     '0x00000000000000000000000000000000000000000000000000000000000f4240',
//   ])

//   const balAfter = await DAI.balanceOf(address)
//   console.log(`balance after rigging is ${balAfter}`)
//   //await DAI.connect(signer).transfer(randAddress, '6229250710691401220343')
//   //await  provider.getStorageAt()
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// checkDai().catch((error) => {
//   console.error(error)
//   process.exitCode = 1
// })