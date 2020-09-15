import styled from '@emotion/styled'

function Input(props){
    return(
        <StyledInput {...props}/>
    )
}

const StyledInput = styled.input`
    flex-grow:1;
    height:36px;
    border:1px solid #eee;
    margin-bottom:1rem;
    font-size:.9rem;
    background:#f9f9f9;
    border-radius:.25rem;
    padding-left:1rem;

    &:focus{
        outline:2px solid #01a7e542;
    }
`

export default Input;