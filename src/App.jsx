import {useState} from 'react'
import { FiSearch} from 'react-icons/fi'
import "./style.css"
import api from './services/api'

function App() {
  
  const [input,setInput]=useState()
  const [cep,setCep]= useState({})

  async function teste(){
    if(input === ''){
      alert('Preenche com algum CEP')
      return
    }

    try{
      const res = await api.get(`${input}/json`)
      setCep(res.data)
      setInput("")
    }
    catch {
      alert('CEP inválido')
      setInput("")
    }
  }

  return (
    <div className="container">
       <h1 className="title">Buscador CEP</h1>

<div className="containerinput"> 

<input value={input} onChange={(e)=>setInput(e.target.value) } type="text"
placeholder="Digite o CEP desejado..."/>

<button className="buttonScerah" onClick={teste}>
  <FiSearch size="25" color="WHITE"/>
 
</button>



</div>

  
{Object.keys(cep).length > 0 && (

  <main className="main">
   <h2>CEP: {cep.cep}</h2>
   <span> {cep.logradouro}</span> 
   <span> {cep.bairro}</span>
   <span>{cep.localidade} - {cep.uf}</span>


</main>

)}




</div>

  

    
   
  )
}

export default App
