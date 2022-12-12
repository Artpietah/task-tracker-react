const Buttons = ({color, text, action}) => {
  return (
    <div>
        <button className="btn" style={{backgroundColor:color}} onClick={action} >{text}</button>
    </div>
  )
}

export default Buttons