import { ethers } from "ethers";

export function useEther() {
    let provider;
    if (typeof window !== "undefined") {
        provider = new ethers.providers.Web3Provider(window.ethereum)

      }

  async function getBalance(){
    let balance
    try{
        const signer = await provider.getSigner().getAddress()
        console.log(signer)
        balance = await provider.getBalance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
    }catch(e){
        console.log(e)
    }
    return ethers.utils.formatEther(balance)
  }

//   async function getTokenInfo(): Promise<TokenInfo> {
//     const [decimals, name, symbol] = await Promise.all([
//       defibank.methods.decimals().call(),
//       defibank.methods.name().call(),
//       defibank.methods.symbol().call(),
//     ])
//     return { decimals, name, symbol }
//   }

//   async function getOwner(): Promise<string> {
//     const owner = await defibank.methods.getOwner().call()
//     return owner.toLowerCase()
//   }

//   async function createAccount(accountName: string) {
//     defibank.handleRevert = true
//     await defibank.methods
//       .createAccount(accountName)
//       .send({ from: await getAccount() })
//   }
//   async function deposit(accountName: string, amount: number) {
//     await defibank.methods
//       .deposit(accountName, amount)
//       .send({ from: await getAccount() })
//   }
//   async function withdraw(accountName: string, amount: number) {
//     await defibank.methods
//       .withdraw(accountName, amount)
//       .send({ from: await getAccount() })
//   }
//   async function transfer(sender: string, reciver: string, amount: number) {
//     await defibank.methods
//       .transfer(sender, reciver, amount)
//       .send({ from: await getAccount() })
//   }
//   async function multipleTransfer(
//     sender: string,
//     reciver: string[],
//     amount: number
//   ) {
//     const Reciver = reciver.map((r) => {
//       return `"${r}"`
//     })
//     console.log(Reciver)
//     await defibank.methods
//       .multipleTransfer(sender, reciver, amount)
//       .send({ from: await getAccount() })
//   }
//   async function getBankAccountsListByOwner(
//     ownerAddress: string
//   ): Promise<AccountBalance[]> {
//     return await defibank.methods
//       .getBankAccountsListByOwner(ownerAddress)
//       .call()
//   }
//   async function balanceOf(ownerAddress: string): Promise<AccountBalance> {
//     return await defibank.methods.balanceOf(ownerAddress).call()
//   }
//   async function accountBalance(accountName: string): Promise<AccountBalance> {
//     return await defibank.methods.accountBalance(accountName).call()
//   }

//   async function getAccount() {
//     const accounts = await web3.eth.getAccounts()
//     return accounts[0] ? accounts[0].toLowerCase() : ''
//   }

//   async function getAccountInject() {
//     const accounts = await eth.request({ method: 'eth_requestAccounts' })
//     return accounts[0] ? accounts[0].toLowerCase() : ''
//   }

//   async function isDuplicate(accountName: string) {
//     return await defibank.methods.isDuplicate(accountName).call()
//   }

  return {
    getBalance
  }
}