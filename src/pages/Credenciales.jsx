import Title from '../components/Titulo'
import '../stylesheet/App.css'
import Cajapass from '../components/Cajapass';

export default function Credenciales(props) {
  
  return (
  <div className = "container-principal">
     <Title title = "Credenciales de Wi-Fi"/><br />
    <Cajapass 
    wifiname='Biblioteca-Publica123'
    contraseña='biblioteca2025'/>
  </div>
 
  )
}
