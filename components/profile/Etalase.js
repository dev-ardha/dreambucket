import Styled from '@emotion/styled'
import Spinner from '../shared/Spinner'

function Etalase({dreams, switchTabs}){ 
    
    const emptyDream = <>
        <div className="is-empty">
            <h2>No dreams to show</h2>
            <p>You have not yet added any dreams</p>
        </div>
    </>

    return(
        <StyledEtalase>
            {
                dreams.length ? switchTabs() : (
                    emptyDream
                // <div className="loading-wrapper">
                //     <Spinner/>
                // </div>
                )
            }
        </StyledEtalase>
    )
}

const StyledEtalase = Styled.section`
    .loading-wrapper{
        height: 240px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default Etalase