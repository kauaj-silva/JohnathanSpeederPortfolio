import github from '../../img/social icons/Github.svg'
import linkedin from '../../img/social icons/LinkedIn.svg'
import twitter from '../../img/social icons/Twitter.svg'
import {FooterContent, FooterSocial} from './style'

function Footer() {
    const socialMedias = [twitter,linkedin,github]

    return(
        <FooterContent>
            <div className="logo"><h2>Johnathan Speeder</h2></div>
            <FooterSocial>
                {
                    socialMedias.map((icons) => <img src={icons} alt=""/>)
                }
            </FooterSocial>
        </FooterContent>
    )
}

export default Footer