import './style.css'
import jpMorgan from '../../img/logos/JP Morgan.svg'
import Samsung from '../../img/logos/Samsung.svg'
import Tinder from '../../img/logos/Tinder.svg'
import Verizon from '../../img/logos/Verizon.svg'
import Visa from '../../img/logos/Visa.svg'
import Walmart from '../../img/logos/Walmart.svg'
import spense from '../../img/Spense.png'
import yeldcamp from '../../img/YelpCamp.png'
import {BsArrowRight} from 'react-icons/bs'
import { ArticleContainer1, ArticleContainerIcons, ArticleContainerImgs } from './styles'



function Articles() {

    function Article1() {
        return (
            <ArticleContainer1>
                <h2>Helping Companies build better, scalable software.</h2>
                <p>Award-winning web developer and author, with over 15+ years of working experience
                    with Fortune 500 companies like Apple, Google, Facebook and more.</p>
            </ArticleContainer1>
        )
    }
    // Icones
    function ArticleIcons() {

        const icones = [Walmart, Tinder, jpMorgan, Visa, Samsung, Verizon];

        return (
            <ArticleContainerIcons>
                {icones.map(icone => <img src={icone} alt='icon' className='icon'></img>)}
            </ArticleContainerIcons>
        );

    }


    function ArticleImgs() {

        const articleimages =
        {
            content1:
                [{
                    src: spense,
                    title: 'Spense.com',
                    content:"Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they'll get paid. Project in collaborattion with Codewell.cc"
                }],
            content2:
                [{
                    src: yeldcamp,
                    title: 'YelpCamp.com',
                    content:"Allowing backpack trabelers to perfectly plan their trip through an open-source platform similar to Trip Advisor. With over 1m MAU, YelpCamp has been the crowd's favorite in 2021."
                }]
        }

        return (
            <ArticleContainerImgs >
                {Object.values(articleimages).map(content => (
                    <div className='imgdiv'>
                        {content.map(article => (
                            <div>
                                <img src={article.src} alt="images" />
                                <h2>{article.title} <BsArrowRight /> </h2>
                                <p>{article.content}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </ArticleContainerImgs>
        );
    }

    return (
        <div className='main'>
            <Article1 />
            <ArticleIcons />
            <ArticleImgs />
        </div>
    )
}

export default Articles