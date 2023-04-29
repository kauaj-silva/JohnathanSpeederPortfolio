import github from '../../img/social icons/Github.svg'
import linkedin from '../../img/social icons/LinkedIn.svg'
import twitter from '../../img/social icons/Twitter.svg'
import './style.css'

function Footer() {
    const socialMedias = [twitter,linkedin,github]

    return(
        <footer>
            <div className="logo"><h2>Johnathan Speeder</h2></div>
            <div className="socialmedias">
                {
                    socialMedias.map((icons) => <img src={icons} alt=""/>)
                }
            </div>
        </footer>
    )
}

export default Footer