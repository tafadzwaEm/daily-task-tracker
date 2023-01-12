
const Button = ({text, color}) => {
  return (
    <div className="btn"  style={{backgroundColor: color, color: 'white'}}>
        {text}
    </div>
  )
}


Button.defaultProps = {
    text: "Unassigned",
    color: "green"
}

export default Button