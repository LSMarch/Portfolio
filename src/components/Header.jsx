import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark, faEnvelope, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {

    const onDownload = () => {
        fetch('Elizabeth Marchetti Resume (4).pdf')
            .then(response => {
                response.blob()
                    .then(blob => {
                        const fileURL = window.URL.createObjectURL(blob)
                        let link = document.createElement('a')
                        link.href = fileURL
                        link.download = 'Elizabeth Marchetti Resume (4).pdf'
                        link.click()
                    })
            })
    }

    return (
        <nav className="navbar bg-dark p-5" data-bs-theme="dark">
            <div className="container-fluid">
                <span>
                    <h1 className="navbar-brand fs-1 fw-bold">Libby Marchetti</h1>
                    <p className="navbar-text fs-4">Full Stack Web Developer</p>
                </span>

                <ul className="nav">
                    <li className="nav-item" >
                        <button className="btn btn-outline-info m-1"
                            onClick={onDownload}>
                            {/* <FontAwesomeIcon icon={faPenToSquare} /> */}
                            Download Resume
                        </button>
                    </li>

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