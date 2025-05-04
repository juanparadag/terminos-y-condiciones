import Button from '../components/Button'

export default function Cajapass ({wifiname = "No disponible", contraseña = "No disponible"}){
  const aceptado = ()=>{
    alert("Gracias por usar nuestro servicio")
  }
  return (
    <div>
      <p><strong>Nombre de red (SSID):</strong> {wifiname}</p>
      <p><strong>Contraseña:</strong> {contraseña}</p>
      <Button class = "understood-button"
      funcion = {aceptado}
      txt = "Entendido"
      />
    </div>
  )
}