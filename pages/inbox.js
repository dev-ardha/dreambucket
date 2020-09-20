import Layout from "../components/global/Layout";
import styled from '@emotion/styled'
import Error from '../components/shared/Error'

function Inbox(){
    const development = true;
    
    return(
        <Layout pageTitle="Inbox">
            <InboxStyled>{
                development ? (
                <div className="inbox-wrapper">
                    <div className="inbox-list">
                        <div className="inbox-header">
                            <span>Inbox</span>
                        </div>
                        <ul>
                            <li>
                                <div className="user-photo">
                                    <img src="https://instagram.fsub6-4.fna.fbcdn.net/v/t51.2885-19/s150x150/70258221_2429509680628798_8091581822883856384_n.jpg?_nc_ht=instagram.fsub6-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=DOLA1SJ3pzIAX_7n0N-&oh=4e3807b711699ec96abc1bae54864327&oe=5F808674" alt="user"/>
                                </div>
                                <div className="user-detail">
                                    <span className="username">martingarrix</span>
                                    <span className="preview">Wazap bro!</span>
                                </div>
                            </li>
                            <li className="active">
                                <div className="user-photo">
                                    <img src="https://instagram.fsub6-4.fna.fbcdn.net/v/t51.2885-19/s150x150/20065787_368487153565914_9007716647976304640_a.jpg?_nc_ht=instagram.fsub6-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=FMLoP08rLPEAX_8Svk7&oh=9ffef89bc5061a687d28a5299cf96d70&oe=5F7E22A8" alt="user"/>
                                </div>
                                <div className="user-detail">
                                    <span className="username">jeffbezos</span>
                                    <span className="preview">gasss</span>
                                </div>
                            </li>
                            <li>
                                <div className="user-photo">
                                    <img src="https://instagram.fsub6-4.fna.fbcdn.net/v/t51.2885-19/s150x150/44329317_268583430479565_454483638147350528_n.jpg?_nc_ht=instagram.fsub6-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Wzycioo6u5oAX_SEWti&oh=0f5038c230cdcc6288e10682b716e4bd&oe=5F805C30" alt="user"/>
                                </div>
                                <div className="user-detail">
                                    <span className="username">elonmusk</span>
                                    <span className="preview">mingdep ngetrip ke mars kuy.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="message-box">
                        <div className="message-header">
                            <span>jeffbezos</span>
                        </div>
                        <div className="message-body">
                        <div className="message friend">
                                <div className="user-photo">
                                    <img src="https://instagram.fsub6-4.fna.fbcdn.net/v/t51.2885-19/s150x150/20065787_368487153565914_9007716647976304640_a.jpg?_nc_ht=instagram.fsub6-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=FMLoP08rLPEAX_8Svk7&oh=9ffef89bc5061a687d28a5299cf96d70&oe=5F7E22A8" alt="user"/>
                                </div>
                                <div className="user-message">
                                    <span>cuyy</span>
                                </div>
                            </div>
                            <div className="message friend">
                                <div className="user-photo">
                                    <img src="https://instagram.fsub6-4.fna.fbcdn.net/v/t51.2885-19/s150x150/20065787_368487153565914_9007716647976304640_a.jpg?_nc_ht=instagram.fsub6-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=FMLoP08rLPEAX_8Svk7&oh=9ffef89bc5061a687d28a5299cf96d70&oe=5F7E22A8" alt="user"/>
                                </div>
                                <div className="user-message">
                                    <span>mau join gw ga?</span>
                                </div>
                            </div>
                            <div className="message me">
                                <div className="user-message">
                                    <span>gasss</span>
                                </div>
                            </div>
                        </div>
                        <div className="message-input">
                            <input type="text" placeholder="Message..."/>
                        </div>
                    </div>
                </div>
                ) : <Error title="Page Under Construction" body="Sorry, this page is not available right now. Please check back soon:)."/>
            } </InboxStyled>
        </Layout>
    )
}

const InboxStyled = styled.div`
    padding: 0 160px;
    display:flex;
    flex-direction:row;

    .inbox-wrapper{
        background:#fff;
        display:flex;
        box-shadow: 0 1px 2px rgb(0,0,0,0.2);
        width:100%;
        min-height:470px;
        margin-top:50px;

        .message-box{
            position:relative;

            .message-header{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1.25rem;
                font-weight: bold;
                border-bottom: 1px solid #eee;
            }

            .message-body{
                padding: 1.25rem;
                display:flex;
                flex-direction:column;
                overflow-y:scroll;
                min-height:300px;

                .message{
                    display:flex;
                    align-items:center;
                    font-size:.9rem;
                    margin: .25rem 0;
                }

                .me{
                    align-self:flex-end;
                    background:#eee;
                    border-radius:3rem;
                }

                .user-photo{
                    height:30px;
                    width:30px;
                    border-radius:50%;
                    background:#eee;
                    margin-right:.5rem;
                    object-fit:cover;

                    img{
                        height:100%;
                        width:100%;
                        border-radius:50%;
                    }
                }

                .user-message{
                    span{
                        padding:.75rem 1.25rem;
                        border-radius:2rem;
                        border:1px solid #eee;
                        display:flex;
                        justofy-content:center;
                        align-items:center;
                    }
                }

            }
            .message-input{
                padding: 1rem;
                background: #fff;
                position: absolute;
                bottom: 0;
                width: 100%;
                box-sizing: border-box;

                input{
                    width: 100%;
                    border: 1px solid #ddd;
                    height: 2.5rem;
                    padding: 0 1rem;
                    border-radius: 3rem;
                    box-sizing: border-box;
                    font-size:.9rem;

                    &::placeholder{
                        font-size:.9rem;
                    }

                    &:focus{
                        outline:none;
                    }
                }
            }
        }
        .inbox-list{
            width:35%;
            min-height:470px;
            position:relative;

            .inbox-header{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1.25rem;
                font-weight: bold;
                border-bottom: 1px solid #eee;
                border-right: 1px solid #eee;
            }
            
            ul{
                display:flex;
                border-right: 1px solid #eee;
                overflow-y:scroll;
                min-height:403px;
                flex-direction:column;
                margin:0;
                padding:.5rem 0 0 0;

                .active{
                    background:#f9f9f9;
                }

                li{
                    display:flex;
                    align-items:center;
                    font-size:.9rem;
                    cursor:pointer;
                    padding:.5rem 1.25rem;

                    &:hover{
                        background:#f9f9f9;
                    }

                    .user-photo{
                        width:60px;
                        height:60px;
                        border-radius:50%;
                        margin-right:1rem;
                        background:#eee;
                        object-fit:cover;

                        img{
                            height:100%;
                            width:100%;
                            border-radius:50%;
                        }
                    }

                    .user-detail{
                        display:flex;
                        flex-direction:column;
                        justify-content:center;

                        .username{
                            margin-bottom:.4rem;
                        }

                        .preview{
                            color:#999;
                        }
                    }
                }
            }
        }

        .message-box{
            width:65%;
        }
    }
`

export async function getServerSideProps(context){
    return {
        props: {}
    }
}

export default Inbox;