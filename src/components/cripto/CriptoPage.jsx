import { useParams } from "react-router-dom"
import "./CriptoPage.css"
import usePettion from "../../hooks/usePetition.js"
import CriptoHistory from "./info/CriptoHistorial.jsx"
import CriptoInfo from "./info/CriptoInfo.jsx"

const CriptoPage = () => {

    const params = useParams()
   
    const [cripto, cargandoCripto] = usePettion (`assets/${params.id}`)
    const [history, cargandoHistory] = usePettion(`assets/${params.id}/history?interval=d1`)

    if(cargandoCripto || cargandoHistory) return <span>Cargando...</span>

    return (
      <div className="cripto-page-container">
       { cripto && <CriptoInfo cripto={cripto}/>}
       { history && < CriptoHistory history={history}/>}
    </div>
    )
}

export default CriptoPage

