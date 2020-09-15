import styled from '@emotion/styled'
import Layout from '../components/global/Layout'
import Button from '../components/shared/Button'
import { useState } from 'react'
import Link from 'next/link'
import { HiOutlineShare, HiOutlineStar, HiOutlineBookmark } from 'react-icons/hi'
import { AiFillCamera } from 'react-icons/ai'
import { get } from '../lib/make-request'

function Profile(){
    const [tab, setTab] = useState('achieved');

    const achieved = <>
        <ul className="flex-wrap achieved">
            <li>
                <div className="title">
                    <h2>Jalan-Jalan ke Turki</h2>
                </div>
                <img  src="https://d1ix9yerv4y8lr.cloudfront.net/blog/wp-content/uploads/2019/10/istanbul-guide-9-19-750x375.jpg"/>
            </li>
            <li>
                <div className="title">
                    <h2>Lihat Aurora di Australia</h2>
                </div>
                <img  src="https://www.liawisata.com/wp-content/uploads/2019/11/perbedaan-aurora-borealis-dan-aurora-australis.jpg"/>
            </li>
        </ul>
        <Button className="primary">See More</Button>
    </>

    const shared = <>
        <ul className="flex-wrap shared">
            <li>
                <div className="title">
                    <h2>Keliling Italia</h2>
                </div>
                <img  src="https://64.media.tumblr.com/18f5449ddf5bcc1bc5fc200d818d7d42/tumblr_nj1nftwFGq1qjvnc4o1_500.jpg"/>
            </li>
            <Link href="/dream/add">
                <li className="add">
                    <span>+</span>
                </li>
            </Link>
        </ul>
        <Button className="primary">See More</Button>
    </>

    const saved = <>
        <ul className="flex-wrap shared">
            <Link href="/dream/add">
                <li className="add">
                    <span>+</span>
                </li>
            </Link>
        </ul>
        <Button className="primary">See More</Button>
    </>

    const switchTabs = () => {
        switch (tab) {
            case'achieved':
                return achieved
            case'shared':
                return shared
            case'saved':
                return saved
            default:
                break;
        }
    }

    return(
        <Layout pageTitle="Profile">
            <ProfileStyled>
                <div className="profile-header">
                    <div className="camera">
                        <AiFillCamera/>
                    </div>
                    <div className="profile-wrapper">
                        <div className="profile-picture"></div>
                        <div className="profile-detail">
                            <span className="username">ardhayudhatama</span>
                            <span className="badge">Lucid Traveller</span>
                        </div>
                    </div>
                </div>
                <div className="profile-body">
                    <div className="page page-left">
                        <section>
                            <ul className="tabs">
                                <li className={tab === 'achieved' ? 'active' : ''} onClick={()=> setTab('achieved')}><span className="tab-icon"><HiOutlineStar/></span>Achieved<span className="count">(2)</span></li>
                                <li className={tab === 'shared' ? 'active' : ''} onClick={()=> setTab('shared')}><span className="tab-icon"><HiOutlineShare/></span>Shared<span className="count">(1)</span></li>
                                <li className={tab === 'saved' ? 'active' : ''} onClick={()=> setTab('saved')}><span className="tab-icon"><HiOutlineBookmark/></span>Saved<span className="count">(0)</span></li>
                            </ul>
                            {
                                switchTabs()
                            }
                        </section>
                    </div>
                </div>
            </ProfileStyled>
        </Layout>
    )
}

const ProfileStyled = styled.div`
    padding: 50px 160px;
    display:flex;
    flex-direction:column;

    section{
        margin-bottom:3rem;

        .tabs{
            padding:0;
            display:flex;
            justify-content:center;
            margin:0;
            border-bottom:1px solid #eee;

            li{
                padding:.5rem 0 1rem 0;
                color:#888;
                margin-right:2rem;
                font-weight:600;
                font-size:.9rem;
                cursor:pointer;
                display:flex;
                align-items:center;

                .tab-icon{
                    margin-right:.5rem;
                    transform: translateY(1px);
                }

                &:hover{
                    color:#121212;
                }
            }

            .count{
                color:#aaa;
                margin-left:.25rem;
                font-weight:500;
            }

            .active{
                color:#121212;
                border-bottom:1px solid #121212;
            }
        }
    }

    .profile-body{
        display:flex;
        justify-content:space-between;
        margin-top:3rem;
    }

    .page-left{
        width:100%;
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

            .add{
                background:#eee;
                display:flex;
                justify-content:center;
                align-items:center;
                font-size:4rem;
                font-weight:900;
                color:#ccc;

                &::before{
                    display:none;
                }

                &:hover{
                    background:#f2f2f2;
                }
            }
        }
    }

    .has-border{
        border-right:2px solid #0000000d;
    }

    .profile-header{
        height:200px;
        width:100%;
        background:url('https://images.squarespace-cdn.com/content/v1/55dbc86ce4b08731143081de/1544059787824-RACN9Z6RMA962P5SAB1T/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Shelly-Beach-logo.jpg');
        background-position:center -17rem;
        background-size:cover;
        position:relative;
        border-radius:1rem;
        cursor:pointer;

        .camera{
            padding: 10px;
            display: none;
            position: absolute;
            font-size: 1.6rem;
            color: #fff;
            background: #000000b0;
            border-radius: 50%;
            right: 1rem;
            top: 1rem;
        }

        &:hover{
            .camera{
                display:flex;
            }
        }

        .profile-wrapper{
            position:absolute;
            bottom:0px;
            left:1.5rem;
            display:flex;
            align-items:center;

            .profile-picture{
                width:120px;
                height:120px;
                border-radius:50%;
                background-color:#f7f7f7;
                background-image:url('https://i1.sndcdn.com/avatars-aKOTUjdyD5jcKMa9-tHWyyA-t200x200.jpg');
                background-size:cover;
                margin-bottom:-30px;
                border: 5px solid #fff;
                box-sizing: border-box;
            }
            .profile-detail{
                display:flex;
                flex-direction:column;
                align-items:flex-start;
                margin-left:1rem;
                transform: translateY(-2px);

                .username{
                    font-weight:600;
                    font-size:1.3rem;
                    text-shadow:0 1px 4px #0000009c;
                    color:#fff;
                    padding: 7px;
                    background: #000000b0;
                    margin-bottom:4px;
                }

                .badge{
                    font-weight:600;
                    font-size:.9rem;
                    text-shadow:0 1px 4px #0000009c;
                    color:#fff;
                    padding: 5px;
                    background: #000000b0;
                }
            }
        }
    }

    @media (max-width: 1024px) {
        padding: 50px 60px;
    }
`

Profile.getInitialProps = async ({req, res}) => {
    const endpoint = '/api/feed'
    const { data } = await get(req, endpoint)
    console.log(data)

    return {
        feed: data
    }
}

export default Profile