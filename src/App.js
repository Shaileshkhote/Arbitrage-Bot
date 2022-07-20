import logo from './logo.svg'
import './App.css'
import Avax_Comp from './Components/Avax_Comp'
import Paraswap from './Components/Paraswap'
import OpenOcean from './Components/OpenOcean'
import Menu from './Components/Menu'
import Oneinch from './Components/Oneinch'
import {DfkSdk,DfkSdkVice} from './Components/DefiKingdoms'
import tokenData from './config/tokenConfig'
import Header from './Components/Header'
import Nav from './Components/Nav'

function App() {
  return (
    <>
    
    <Header/>
    <Nav/>
      <div className="pl-8 m-4 flex flex-col mobile:flex-row flex-wrap justify-evenly items-center">
      <Oneinch propsData={tokenData.gmxToken} />
      </div>

    </>
  )
}

export default App
