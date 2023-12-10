/* eslint-disable no-unused-vars */
import { useContext } from "react";
import ModalContext from "../../hooks/ModalContext";

const Footer = () => {
    const [isOpen, setIsOpen] = useContext(ModalContext)

    return ( 
        <footer>
            <button data-modal-target="#modal" onClick={() => setIsOpen(true)}>Preview </button>
            <button className="btn-success">Cetak versi PDF</button>
        </footer>
     );
}
 
export default Footer;