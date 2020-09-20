import Styled from '@emotion/styled';
import { HiCheckCircle } from 'react-icons/hi'
import { HiOutlineBookOpen, HiOutlineStar, HiPhotograph } from 'react-icons/hi'

function ProfileHeader({username, verified, dreams, tab, setTab}){

    return(
        <ProfileHeaderStyled>
            <div className="wallpaper">
            <div className="profile-wrapper">
                <div className="profile-picture"></div>
                <div className="profile-detail">
                    <span className="username">{username}{ verified ? <span><HiCheckCircle/></span> : '' }</span>
                    <span className="badge">The Dreamer</span>
                </div>
            </div>
            </div>
            <ul className="tabs">
                <li className={tab === 'dreams' ? 'active' : ''} onClick={()=> setTab('dreams')}><span className="tab-icon"><HiOutlineBookOpen/></span>My Dreams<span className="count">({dreams.length ? dreams.length : '0'})</span></li>
                <li className={tab === 'achieved' ? 'active' : ''} onClick={()=> setTab('achieved')}><span className="tab-icon"><HiOutlineStar/></span>Achieved<span className="count">(0)</span></li>
                <div className="tab-right">
                    <span className="header-button create primary">+</span>
                    <span className="header-button follow primary">Follow</span>
                </div>
            </ul>
        </ProfileHeaderStyled>
    )
}

const ProfileHeaderStyled = Styled.div`
    height:460px;
    width:100%;
    position:relative;
    display: flex;
    flex-direction:column;
    background:#fff;
    justify-content: space-between;

    .tabs{
        padding:0 180px;
        display:flex;
        margin:0;
        align-items:center;
        box-shadow: 0 1px 2px rgb(0,0,0,0.2);

        .tab-right{
            margin-left:auto;

            .header-button{
                padding: .5rem 1rem;
                border-radius: 8px;
                color: #fff;
                font-weight: 600;
                cursor: pointer;
                margin-left:.5rem;
            }
            .create{
                font-weight:900;
            }
        }

        li{
            padding:1rem .5rem;
            color:#888;
            margin-right:.5rem;
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
            border-bottom:3px solid #01a7e5;
            margin-top: 4px;
        }
    }

    .wallpaper{
        display: flex;
        width: 970px;
        height: 300px;
        justify-content: center;
        cursor:pointer;
        align-items: flex-end;
        margin:0 auto;
        border-radius: 0 0 1rem 1rem;

        background: #F0F2F5;
        background-image:url('https://images.squarespace-cdn.com/content/v1/55dbc86ce4b08731143081de/1544059787824-RACN9Z6RMA962P5SAB1T/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Shelly-Beach-logo.jpg');
        background-position:center;
        background-size:cover;
        background-repeat:no-repeat;
    }

    .profile-wrapper{
        display:flex;
        flex-direction:column;
        align-items:center;
        transform: translateY(110px);

        .profile-picture{
            width:170px;
            height:170px;
            border-radius:50%;
            background-color:#f7f7f7;
            background-image:url('https://i1.sndcdn.com/avatars-aKOTUjdyD5jcKMa9-tHWyyA-t200x200.jpg');
            background-size:cover;
            margin-bottom:10px;
            border: 5px solid #fff;
            box-sizing: border-box;
        }
        .profile-detail{
            display:flex;
            flex-direction:column;
            align-items:center;

            .username{
                font-weight:600;
                font-size:1.6rem;
                text-shadow:0 1px 4px #0000009c;
                color:#fff;
                padding: 7px;
                background: #000000b0;
                margin-bottom:4px;
                display:flex;

                span{
                    margin-left: 3px;
                    transform: translateY(2px);
                }
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
`

export default ProfileHeader;