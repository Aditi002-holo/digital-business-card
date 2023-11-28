import IMAGES from "../Images/Images"

function Footer() {
    return (
        <section className="footer-section">
            <img src={IMAGES.TwitterIcon} alt="twitter-icon" />
            <img src={IMAGES.MetaIcon} alt="twitter-icon" />
            <img src={IMAGES.InstagramIcon} alt="twitter-icon" />
            <img src={IMAGES.GithubIcon} alt="twitter-icon" />
        </section>
    )
}

export default Footer