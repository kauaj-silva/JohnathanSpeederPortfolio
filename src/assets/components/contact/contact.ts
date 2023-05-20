import styled from 'styled-components'

const ContactSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 100px;

    div {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 500px;
    }
    p {
        color: var(--gray);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    }
`

export default ContactSection
    

