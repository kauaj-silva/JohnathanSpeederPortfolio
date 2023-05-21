import styled from 'styled-components';

const ArticleContainer1 = styled.article`
    margin: 30px 50px;
    flex-direction: column;
    justify-self: center;
    gap: 10px;
    font-weight: 400;
    font-size: 50px;
    h2 {
        font-weight: 400;
        font-size: 50px;
    }

    p {
        color: var(--gray);
        line-height: 1.4em;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
    }
    
    h2, p {
        max-width: 550px;
        
    }
    
`

const ArticleContainerIcons = styled.article`
    display: flex;
    margin: 50px;
    justify-content: center;
    gap: 70px;
    flex-wrap: wrap;
`



const ArticleContainerImgs = styled.article`
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;
    div {
        display: flex;
    flex-direction: column;
    gap: 20px;
    }
`



export {ArticleContainerIcons, ArticleContainer1, ArticleContainerImgs };