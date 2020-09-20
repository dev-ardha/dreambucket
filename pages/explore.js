import styled from '@emotion/styled'
import Layout from '../components/global/Layout'
import Error from '../components/shared/Error'

function explore(){
    const development = true;

    return(
        <Layout pageTitle="Explore">
            <ExploreStyled>
                {
                development ? (
                    <Error title="Page Under Construction" body="Sorry, this page is not available right now. Please check back soon:)."/>
                ) : (
                    <div className="explore-header">
                        <ul>
                            <li>Travel</li>
                            <li>Work</li>
                            <li>Movie</li>
                        </ul>
                        <div className="search">
                            <input type="text" placeholder="Search"/>
                        </div>
                    </div>
                )
                }
            </ExploreStyled>
        </Layout>
    )
}

const ExploreStyled = styled.div`
    padding: 0 160px;
    display:flex;
    flex-direction:column;

    .explore-header{
        display:flex;
        justify-content:space-between;
        align-items:center;

        input{
            height:28px;
            width:240px;
            border:1px solid #ddd;
            font-size:.9rem;
            border-radius:4px;
            padding-left:.75rem;
        }
    }
    ul{
        display:flex;
        list-style:none;
        padding:0;

        li{
            padding:.5rem .75rem;
            font-size:.9rem;
            border-radius:4px;
            margin: 0 .3rem;
            background:#eee;
        }
    }

`

export async function getServerSideProps(context){
    return {
        props: {}
    }
}

export default explore;