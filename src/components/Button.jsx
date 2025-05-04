export default function Button (props){
  return <button onClick={props.funcion} className = {props.class}>{props.txt}</button>
}