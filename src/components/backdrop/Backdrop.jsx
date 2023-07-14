/* eslint-disable react/prop-types */
import "./Backdrop.css"


function Backdrop(props) {
    return (
      <div className="backdro" onClick={props.onCancel}/>
      
    )
  }
  
  export default Backdrop