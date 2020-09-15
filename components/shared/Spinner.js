import styled from '@emotion/styled'

function Spinner(){
    return(
        <SpinnerStyled>
            <div className="loader">Loading...</div>
        </SpinnerStyled>
    )
}

const SpinnerStyled = styled.div`
    .loader,
    .loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
    }
    .loader {
    margin: 20px auto;
    font-size: 3px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.25em solid rgba(255, 255, 255, 0.2);
    border-right: 1.25em solid rgba(255, 255, 255, 0.2);
    border-bottom: 1.25em solid rgba(255, 255, 255, 0.2);
    border-left: 1.25em solid #01a7e5;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 .5s infinite linear;
    }
    @-webkit-keyframes load8 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }
    @keyframes load8 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }   
`

export default Spinner;