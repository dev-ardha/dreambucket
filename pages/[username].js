import Styled from '@emotion/styled';
import Layout from '../components/global/Layout'
import Error from '../components/shared/Error'
import StoryList from '../components/profile/StoryList'
import ProfileHeader from '../components/profile/ProfileHeader';
import Etalase from '../components/profile/Etalase'
import { getUser } from '../lib/make-request'

function ProfilePage({username, verified}){
    return(
        <Layout pageTitle={username ? username : 'Page Not Found'}>
            <ProfilePageStyled>
                {
                    username  ? (
                        <>
                            <ProfileHeader username={username}/>
                            <div className="profile-body">
                                <div className="page">
                                    <Etalase/>
                                </div>
                                <div className="page-row">
                                    <div className="page page-left">
                                        <StoryList/>
                                    </div>
                                    <div className="page page-right">
                                        <div className="widget">
                                            <div className="widget-header">
                                                <h3 className="widget-title">Friends</h3>
                                                <span>3438</span>
                                            </div>
                                            <div className="widget-body">
                                                <span className="followers"></span>
                                                <span className="followers followers-all"></span>
                                                <span className="followers followers-all"></span>
                                                <span className="followers followers-all"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </>
                    ) : (
                        <Error title="Page is not available" body="The link you followed may be broken, or the page may have been removed."/>
                    )
                }
            </ProfilePageStyled>
        </Layout>
    )
}

ProfilePage.getInitialProps = async ({ query: { username } }) => {
    const { data } = await getUser(username);

    if(data.data.user){
        const user = data.data.user;

        return{
            username: user.username,
            verified: user.verified
        }
    }else{
        return{
            username: undefined
        }
    }
}

const ProfilePageStyled = Styled.div`
    padding: 50px 160px;
    display:flex;
    flex-direction:column;

    .widget{
        border:1px solid #ddd;
        width:100%;
        padding: 1rem;
        border-radius: 4px;
        box-sizing:border-box;

        .widget-header{
            display: flex;
            align-items: center;
            margin-bottom:1rem;

            span{
                color: #888;
                margin-left: 8px;
                font-size: 1rem;
            }

            .widget-title{
                margin:0;
            }
        }
        .widget-body{
            display:flex;

            .followers{
                background:#999;
                width:50px;
                height:50px;
                border-radius:50%;
                border: 1px solid #ddd;
            }
            .followers-all{
                margin-left: -.5rem;
            }
        }
    }

    .profile-body{
        display:flex;
        flex-direction:column;
        margin-top:1rem;
    }
    .page-row{
        display:flex;
        justify-content:space-between;
    }

    .page-left{
        width:69%;
    }
    .page-right{
        width:29%;
    }
    .page{
        padding:1rem 0;

        .flex-wrap{
            display: grid;
            align-items: center;
            justify-content: space-between;
            grid-template-columns: 240px 240px 240px 240px;
            grid-auto-rows:240px;
            list-style:none;
            grid-gap:1rem;
            padding:0;
            padding-top:1rem;
            margin-top:1rem;

            li{
                cursor:pointer;
                width:100%;
                height:100%;
                position:relative;
                background:#f9f9f9;
                line-height:1.25rem;

                &::before{
                    content: "";
                    display:block;
                    width:100%;
                    height:100%;
                    position: absolute;
                    background: rgb(0,0,0);
                    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 57%);
                }

                .title{
                    position: absolute;
                    z-index:2;
                    bottom: 10px;
                    left: 10px;
    
                    h2{
                        font-size:.9rem;
                    }
                    span{
                        color: #01a7e5;
                        font-weight: bold;
                    }
                }
                h2{
                    font-size: 1.1rem;
                    color: #fff;
                    margin:0;
                    margin-bottom:6px;
                }

                img{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                    trasition:1s all ease-in-out;
                }
            }
        }
    }

    .has-border{
        border-right:2px solid #0000000d;
    }

    @media (max-width: 1024px) {
        padding: 50px 60px;
    }
`

export default ProfilePage;