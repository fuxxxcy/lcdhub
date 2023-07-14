import Logo from "../images/Logo";
import Panel from "@/images/Panel";

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo"><Logo color="#7CD2B0" /></div>
      <div className="header_panel"><Panel color="white" /></div>
    </div>
  );
};

export default Header;