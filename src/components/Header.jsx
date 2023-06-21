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
                        <button className="btn btn-outline-info m-1 "
                            onClick={onDownload}>
                            Download Resume
                        </button>
                    </li>
                    {/* TODO: install dotenv and keep urls secret */}
                    <li className="nav-item " >
                        <a className="btn btn-outline-info m-1 text-decoration-none" href={process.env.REACT_APP_GITHUB_URL}>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li className="nav-item" >
                        <a className="btn btn-outline-info m-1 text-decoration-none" href={process.env.REACT_APP_LINKEDIN_URL}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    {/* <li className="nav-item" >
                        <a className="btn btn-outline-info m-1 text-decoration-none" href="https://www.github.com/LSMarch">
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>
                    </li> */}
                    <li className="nav-item" >
                        <a className="btn btn-outline-info m-1 text-decoration-none" href={process.env.REACT_APP_EMAIL}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </li>

                </ul>
            </div>

        </nav>
    )
}

export default Header