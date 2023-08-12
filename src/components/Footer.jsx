import React from "react";

const Footer = () => {
    const date = new Date();

    return <>
        <footer>
            <p>Copyright M Jahanzaib © {date.getFullYear()}</p>
        </footer>
    </>
}
export default Footer;