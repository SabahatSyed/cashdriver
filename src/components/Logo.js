import logo from "../assets/logo.png";

const Logo = (props) => {
  return (
    <div style={{ textAlign: "center", ...props.style }}>
      <img style={props.imgStyle} src={logo} alt="Cash Driver"></img>
    </div>
  );
};

export default Logo;
