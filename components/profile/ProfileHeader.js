import Styled from '@emotion/styled';
import { AiFillCamera } from 'react-icons/ai'
import { HiCheckCircle } from 'react-icons/hi'

function ProfileHeader({username, verified}){
    return(
        <ProfileHeaderStyled>
            <div className="camera">
                <AiFillCamera/>
            </div>
            <div className="profile-wrapper">
                <div className="profile-picture"></div>
                <div className="profile-detail">
                    <span className="username">{username}{ verified ? <span><HiCheckCircle/></span> : '' }</span>
                    <span className="badge">Lucid Traveller</span>
                </div>
            </div>
        </ProfileHeaderStyled>
    )
}

const ProfileHeaderStyled = Styled.div`
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