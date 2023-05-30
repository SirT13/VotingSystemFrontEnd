import Head from "next/head"
import Header from "@/components/Header"
import { useState } from "react"
import { ethers } from "ethers"
import RegisterVoter from "@/components/RegisterVoter"

export default function Home() {
    const [isConnected, setIsConnected] = useState(false)
    const [provider, setProvider] = useState()
    async function connect() {
        if (typeof window.ethereum !== "undefined") {
            try {
                await ethereum.request({ method: "eth_requestAccounts" })
                setIsConnected(true)
                let connectedProvider = new ethers.providers.Web3Provider(window.ethereum)
                setSigner(connectedProvider.getSigner())
            } catch (e) {
                console.log(e)
            }
        } else {
            setIsConnected(false)
        }
    }

    async function execute() {}
    return (
        <div>
            <Header />

            {isConnected ? "Connected" : <button onClick={() => connect()}>Connect</button>}

            <RegisterVoter />
        </div>
    )
}
