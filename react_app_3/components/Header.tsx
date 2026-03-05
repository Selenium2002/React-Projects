
type HeaderParam = {
  text:string;
  textSub?: string;
}


//  Distruct parameters in the function

const Header = ({text, textSub}: HeaderParam) => {
  return (
    <>
        <div>{text}</div>
        <div>{textSub}</div>
    </>
  )
}

export default Header;