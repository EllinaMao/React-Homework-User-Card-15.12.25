import '../assets/css/Header.css';

/**Header - функциональный компонент. Принимает props: title (текст заголовка). Подключает стиль из CSS */
function Header(props) {
    return (
        <header className="header">
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;