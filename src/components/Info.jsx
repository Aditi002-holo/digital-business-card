import IMAGES from "../Images/Images"

function Info() {
    return (
        <section className="info-section">
            <img src={IMAGES.headerImg} className="header-img" alt="" />
            <h1>Laura Smith</h1>
            <h3>Frontend Developer</h3>
            <h5>laurasmith.website</h5>
            <a href="#" className="email">
                <img src={IMAGES.EmailIcon} className="icon" alt="" />
                Email
            </a>
            <a href="#" className="linkedIn">
                <img src={IMAGES.LinkedInIcon} className="icon" alt="" />
                LinkedIn
            </a>
        </section>
    )
}

export default Info