import "./Cuadricula.css"
import Cripto from "./cripto/Cripto"
import usePettion from "../hooks/usePetition.js"



function Cuadricula() {

  const [criptos] = usePettion("assets")

  if (!criptos) return <span>Cargando...</span>

   return (
    <div className="app-container">
     <h1>Lista de criptomonedas</h1>
    <div className="cripto-container">
    { 
      criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
      <Cripto 
      key={id} 
      name={name} 
      priceUSD={priceUsd} 
      symbol={symbol}
      changePercent24Hr={changePercent24Hr}
      id={id}
      />
    ))
    }
   </div>
   </div>
  )
}

export default Cuadricula
