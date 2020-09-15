import styled from '@emotion/styled'

function TextArea(props){
    return(
        <StyledTextArea {...props}/>
    )
}

const StyledTextArea = styled.textarea`
    flex-grow:1;
    height:160px;
    border:1px solid #ddd;
    margin-bottom:1rem;
    font-size:.9rem;
    background:#f9f9f9;
    border-radius:.25rem;
    padding:1rem;
    resize:none;

    &:focus{
        outline:2px solid #01a7e542;
    }
`

export default TextArea;