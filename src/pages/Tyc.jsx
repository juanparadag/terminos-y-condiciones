import { useNavigate } from 'react-router-dom';
import Title from '../components/Titulo';
import Parrafo from '../components/Parrafo'
import '../stylesheet/App.css'
import Button from '../components/Button';

export default function Tyc(props) {
  const navigate = useNavigate();
  
  const aceptarTerminos = () => {
    navigate('/credenciales');
  };
  const textoTerminos = `Términos y Condiciones de Uso del Servicio Wi-Fi Público - Biblioteca Rural Comunitaria \n Al conectarse y utilizar el servicio de Wi-Fi proporcionado por esta biblioteca rural, usted acepta los siguientes términos y condiciones:\n\n1. Uso Responsable: El servicio Wi-Fi debe ser utilizado únicamente para fines legales y respetuosos. Está prohibido el uso de la red para actividades ilegales, ofensivas, violentas o que atenten contra los derechos de otras personas.\n\n2. Privacidad y Seguridad: Este servicio es una red pública. La biblioteca no garantiza la confidencialidad de la información transmitida. Se recomienda no realizar transacciones bancarias ni ingresar contraseñas sensibles mientras esté conectado.\n\n3. Límites de Velocidad y Conexión: El servicio puede tener límites de velocidad o acceso para garantizar que todos los usuarios tengan una experiencia equitativa. La biblioteca se reserva el derecho de limitar o desconectar usuarios que abusen del servicio.\n\n4. Contenido Apto: No está permitido acceder a contenido inapropiado, como sitios para adultos, apuestas o actividades ilícitas. Este espacio es familiar, educativo y comunitario.\n\n5. Responsabilidad del Usuario: El usuario es responsable de los dispositivos que conecte y del contenido que visualice. La biblioteca no se hace responsable de virus, pérdidas de datos o daños que puedan surgir durante el uso del servicio.\n\n6. Monitoreo y Restricción: La biblioteca se reserva el derecho de monitorear el uso de la red para garantizar el cumplimiento de estos términos y de bloquear sitios web o servicios que considere perjudiciales.\n\n Gracias por utilizar el Wi-Fi de la biblioteca. Este servicio es gratuito y busca promover el acceso a la información, la educación y la tecnología en nuestra comunidad.`
  return (
    <div className='container-principal'>
      <Title 
      title = "Terminos y condiciones"/>
      <div className='div-parrafo'>
      <Parrafo 
      txt={textoTerminos}/>
      </div>
      <Button class = "accept-button"
      funcion = {aceptarTerminos}
      txt = "Aceptar terminos"
      />
    </div>
  );
}
