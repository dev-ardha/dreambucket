import styled from '@emotion/styled'

function Footer(){
    return(
        <StyledFooter>
            <ul>
                <li>About</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Disclaimer</li>
            </ul>
            <p>&copy; 2020 DreamBucket by <a href="https://github.com/dev-ardha">dev-ardha</a></p>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    display:flex;
    margin-top:4rem;
    justify-content:space-between;
    padding: 0 96px;

    ul{
        display:flex;
        list-style:none;
        padding:0;

        li{
            padding: 0 .5rem;
            font-size:.9rem;
        }
    }

    p{
        font-size:.9rem;
        text-align:center;
        padding: 0 0 1rem 0;
    }
`

export default Footer;