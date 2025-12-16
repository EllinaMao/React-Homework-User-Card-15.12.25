/**
 * Footer - функциональный компонент, который принимает props text и отображает футер. Подключает CSS или inline-стиль. 
 */

import '../assets/css/Footer.css';

function Footer({ text }) {

    return (
        <footer className="footer">
            <p>{text}</p>
        </footer>
    );
}
export default Footer;