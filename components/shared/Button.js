import styled from '@emotion/styled'

function Button(props){
    return(
    <ButtonStyled {...props}/>
    )
}

const ButtonStyled = styled.button`
    padding: .5rem .75rem;
    color:white;
    font-size: .9rem;
    font-weight: bold;
    cursor: pointer;
    position:relative;
    z-index:1;

    border: none;
    border-radius: .25rem;

    &:active, &:focus{
        outline:none;
        border: none;
    }
`

export default Button;