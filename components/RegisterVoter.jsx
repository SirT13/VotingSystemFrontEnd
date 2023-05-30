import { useWeb3Contract } from "react-moralis"
import{abi, contractAddress} from "../constants"
import { useMoralis } from "react-moralis"
import { useEffect } from "react"
import { useNotification } from "web3uikit"

import { toUtf8CodePoints } from "ethers"

export default function RegisterVoter() {
   

    const dispatch = useNotification()

    const handleSuccess = async function () {
        await tx.wait(1)
        handleNewNotification(tx)
        updateUi()
    }


    const handleNewNotification = function(){
        dispatch({
            type: "info",
            message: "You have succesfully register to the voting process",
            title: "RV Notification",
            position : "topR",
            icon: "bel",
         })

    }

    const {chainId : chaiIdHex, isWeb3Enabled} = useMoralis()
    const chainId = parseInt(chaiIdHex)
    const votingSystemAddress = chainId in contractAddress ? contractAddress[chainId][0] : null
//     const {runContractFunction: registerVoter} = useWeb3Contract({
//         abi: abi,
//         contractAddress: votingSystemAddress,
//         functionName: "RegisterVoter",
//         paramas: {   }
//         msgSender:
// })


// s

useEffect(() => {
    if(isWeb3Enabled){

    }
}, [])
    
    return <div>Here you can register for the voting process.</div>
}
