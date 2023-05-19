import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <nav class="navbar bg-dark p-5" data-bs-theme="dark">
            <div class="container-fluid">
                <span>
                    <h1 class="navbar-brand fs-1 fw-bold">Libby Marchetti</h1>
                    <p className="navbar-text fs-4">Full Stack Web Developer</p>
                </span>

                <ul className="nav">
                    <li className="nav-item" >
                        <button className="btn btn-outline-info m-1">
                            <FontAwesomeIcon icon={faGithub} />
                        </button>
                    </li>
                    <li className="nav-item" >
                        <button className="btn btn-outline-info m-1">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </button>
                    </li>
                    <li className="nav-item" >
                        <button className="btn btn-outline-info m-1">
                            <FontAwesomeIcon icon={faDiscord} />
                        </button>
                    </li>
                    <li className="nav-item" >
                        <button className="btn btn-outline-info m-1">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                    </li>

                </ul>
            </div>

        </nav>
    )
}

export default Header