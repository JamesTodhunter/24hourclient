import React from "react";
import monsterincPic from '../../assets/img/monsterinc.jpg'
import { Row } from "reactstrap";

const Footer = () => {
    return (
        <footer>
            <Row>
                <p><img id="monsterinc" alt="" src={monsterincPic} />The NO-Sleep-Team </p>;
            </Row>
        </footer>
    )
}

export default Footer;