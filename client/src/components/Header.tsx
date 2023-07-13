import React from "react";
import "./styles.css";
import Logo from "../images/Logo";
import Panel from "@/images/Panel";

const Header = () => {
    return (
        <div className="header">
            <div className="header_logo"><Logo/></div>
            <div className="header_panel"><Panel/></div>
        </div>
    )
}

export default Header