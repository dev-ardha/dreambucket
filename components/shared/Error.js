import styled from '@emotion/styled'

function Error({ title, body }){
    return(
        <ErrorPageStyled>
            <h1>{title}</h1>
            <p>{body}</p>
        </ErrorPageStyled>
    )
}

const ErrorPageStyled = styled.div`
    display:flex;
    justify-content:center;
    align-itmes:center;
    margin:0 auto;
    align-items:center;
    text-align:center;
    flex-direction:column;
    padding-top:50px;

    h1{
        font-weight:800;
        margin-bottom:0;
        margin-top:2rem;
    }

    p{
        width: 75%;
        line-height: 1.3rem;
        font-size: .9rem;
    }
`

export default Error;