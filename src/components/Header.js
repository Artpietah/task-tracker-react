
import Buttons from "./Buttons"


export const Header = ({title,onClick,btntext}) => {


  return (
     <>
     <header className="header">
        <h1>{title}</h1>
        <Buttons color="red" text={btntext} action={onClick}/>
     </header>
     </>
  )
}
