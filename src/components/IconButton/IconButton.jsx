import "./IconsButton.css"

const IconButton = ({ direction, disable, onClick }) => {
  let cls = "icon-button"
  if (direction === "left") cls += " rev"
  if (direction === "right") cls += " next"
  if (disable) cls += " disable"
 
	return <div className={cls} onClick={onClick}/>

}

export default IconButton
