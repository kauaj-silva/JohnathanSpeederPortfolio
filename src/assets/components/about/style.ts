import { styled } from 'styled-components'

const AboutSection = styled.section`
    background: var(--sectionsColor);
    display: flex;
    padding: 50px;


    @media screen and (max-width: 768px) {
            flex-wrap: wrap;
        }
`

const AboutContainer = styled.div`
    padding: 50px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        h2 {
            font-size: 35px;
        }
        p {
            font-size: 20px;
            color: #bbb9b9;
        }
        @media screen and (max-width: 768px) {
            padding: 10px;
            p {
                font-size: 20px;
            }
        }

`

export { AboutSection, AboutContainer }