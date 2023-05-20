import styled from 'styled-components'

const FooterContent = styled.footer`
    background-color: var(--sectionsColor);
    margin: 20px 0 0 0;
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        font-weight: 500;
        font-size: 22px;
    }
`

const FooterSocial = styled.div`
    display: flex;
    gap: 30px;
`

export { FooterContent, FooterSocial }