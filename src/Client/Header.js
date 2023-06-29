import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Ligue Sportive</h1>
            <Link role="button" to="/connexion">Connexion</Link>
            <Link role="button" to="/inscription">Inscription</Link>
        </header>
    );
}

export default Header;