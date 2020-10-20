import Styled from '@emotion/styled';
import Layout from '../components/global/Layout'
import Error from '../components/shared/Error'
import StoryList from '../components/profile/StoryList'
import ProfileHeader from '../components/profile/ProfileHeader';
import Etalase from '../components/profile/Etalase'
import { getUser, getDreamByUser } from '../utils/user'
import { useEffect, useState, useContext } from 'react'
import { HiPhotograph } from 'react-icons/hi'
import { UserContext } from '../context/UserContext'

function ProfilePage({username, verified, followers, following, mypage, photo}){
    const [dreams, setDreams] = useState([]);
    const [tab, setTab] = useState('dreams');
    const value = useContext(UserContext)

    useEffect(() => {
        getDreamByUser(username).then(({data}) => {
            if(data.data.dreamsByUser){
                setDreams(data.data.dreamsByUser)
            }
        })
    }, [])

    const emptyAchievedDream = <>
        <div className="is-empty">
            <h2>No dreams to show</h2>
            <p>Don't give up, your dreams will come true tomorrow:)</p>
        </div>
    </>

    const achieved = <>
        {emptyAchievedDream}
    </>

    const emptyDream = <>
        <div className="is-empty">
            <h2>No dreams to show</h2>
            <p>You have not yet added any dreams</p>
        </div>
    </>

    const dreamList = <>
        <ul className="flex-wrap achieved">
            {
                dreams.length ? (
                    dreams.map((dream, index) => {
                        return(
                            <li key={index}>
                                <div className="title">
                                    <h2>{dream.title}</h2>
                                </div>
                                <div className="image">
                                    {
                                        dream.images ? (
                                        <img  src="https://instagram.fsub6-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/119560775_326034478664754_7916652744638468738_n.jpg?_nc_ht=instagram.fsub6-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=ffU5a1TI3vAAX9V2Ok0&oh=6b660f03033922de71cfb29e906517cf&oe=5F8DF2AF"/>
                                        ) : (<span><HiPhotograph/></span>)
                                    }
                                </div>
                            </li>
                        )
                    })
                ): emptyDream
            }
        </ul>
    </>

    const switchTabs = () => {
        switch (tab) {
            case'achieved':
                return achieved
            case'dreams':
                return dreamList
            default:
                break;
        }
    }

    const noFollowers = <>
        <div className="no-followers">
            <p>This user has no followers</p>
        </div>
    </>

    return(
        <Layout pageTitle={username ? username : 'Page Not Found'}>
            <ProfilePageStyled>
                {
                    username  ? (
                        <>
                            <ProfileHeader mypage={mypage} tab={tab} photo={photo} setTab={setTab} username={username} verified={verified} dreams={dreams}/>
                            <div className="profile-body">  
                                <div className="page">
                                    <Etalase dreams={dreams} switchTabs={switchTabs}/>
                                </div>
                                <div className="page-row">
                                    <div className="page-left">
                                        <StoryList/>
                                    </div>
                                    <div className="page-right">
                                        <div className="widget">
                                            <div className="widget-header">
                                                <h2 className="widget-title">Followers</h2>
                                            </div>
                                            <div className="widget-body">
                                                {
                                                    followers.length ? (
                                                    <ul className="followers-list">
                                                        {followers.map((follower) => {
                                                            return(
                                                                <li className="follower" key={follower.followersUsername}></li>
                                                            )
                                                        })}
                                                    </ul>
                                                    ): noFollowers
                                                }
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

ProfilePage.getInitialProps = async ({ query: { username }, req } ) => {
    try {
        if(req.user){
            if(req.user.username === username){
                return {
                    username: req.user.username,
                    verified: req.user.verified,
                    followers: req.user.followers,
                    following: req.user.following,
                    photo: req.user.photo,
                    authenticate: true,
                    mypage: true,
                }
            }

            const { data } = await getUser(username);

            return {
                username: data.data.user.username,
                verified: data.data.user.verified,
                followers: data.data.user.followers,
                following: data.data.user.following,
                photo: data.data.user.photo,
                authenticate: true,
                mypage: false,
            }
        }
    } catch (error) {
        const { data } = await getUser(username);

        if(data.data.user){
            return {
                username: data.data.user.username,
                verified: data.data.user.verified,
                followers: data.data.user.followers,
                following: data.data.user.following,
                photo: data.data.user.photo,
                authenticate: false,
                mypage: false,
            }
        }
        return {
            user: undefined
        }
    }
}

const ProfilePageStyled = Styled.div`
    display:flex;
    flex-direction:column;

    .no-followers{
        width: 100%;
        text-align: center;
    }

    .flex-wrap{
        li{
            cursor:pointer;
            width:100%;
            height:100%;
            position:relative;
            background:#fff;
            line-height:1.25rem;
            box-shadow: 0 1px 2px rgb(0,0,0,0.2);
            border-radius:4px;
      
            &::before{
                content: "";
                border-radius:4px;
                display:block;
                width:100%;
                height:100%;
                position: absolute;
                background: rgb(0,0,0);
                background: linear-gradient(0deg,rgba(0,0,0,0.8) -22%,rgba(0,0,0,0) 25%);
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
                border-radius:4px;
                transition:1s all ease-in-out;
            }
        }
      }

    .is-empty{
        padding-top: 1rem;
        height: 195px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin:1rem auto;

        h2{
            margin:0;
        }
    }
    .image{
        height:100%;
        object-fit:cover;

        span{
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;

            svg{
                fill:#F0F2F5;
            }
        }
    }

    .widget{
        width:100%;
        padding: 1rem;
        border-radius: 4px;
        box-sizing:border-box;
        border-radius:8px;
        background:#fff;
        box-shadow: 0 1px 2px rgb(0,0,0,0.2);

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
                font-size:1.3rem;
            }
        }
        .widget-body{
            display:flex;

            .followers-list{
                display: grid;
                align-items: center;
                justify-content: space-between;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: 6px;
                grid-auto-rows:80px;
                list-style:none;

                .follower{
                    height:80px;
                    width:80px;
                    border-radius:4px;
                    background:#eee;
                }
            }
        }
    }

    .profile-body{
        display:flex;
        flex-direction:column;
        margin-top:1rem;
        padding: 0px 180px;
    }
    .page-row{
        display:flex;
        justify-content:space-between;
    }

    .page-left{
        width:65%;
    }
    .page-right{
        width:33%;
    }
    .page{
        padding:1rem 0;

        .flex-wrap{
            display: grid;
            align-items: center;
            justify-content: space-between;
            grid-template-columns: 235px 235px 235px 235px;
            grid-auto-rows:235px;
            list-style:none;
            grid-gap:1rem;
            margin: 0 0 .5rem 0;
        }
    }

    .has-border{
        border-right:2px solid #0000000d;
    }

    @media (max-width: 1024px) {
        padding: 50px 60px;
    }

    @media (max-width: 800px) {
        padding: 0;

        .profile-body{
            padding: 0 16px;

            .page-row{
                flex-direction:column;

                .page-right{
                    width: 100%;
                    margin-top: 1rem;
                }
                
                .page-left{
                    width:100%;
                }
            }
        }
    }
`

export default ProfilePage;