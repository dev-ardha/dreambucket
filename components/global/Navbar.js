import styled from '@emotion/styled'
import Button from '../shared/Button'
import Link from '../shared/Link'
import { HiOutlineGlobeAlt, HiOutlineUser, HiOutlineHome, HiOutlineMail } from 'react-icons/hi'

function Navbar(){
    const auth = true;

    return(
        <StyledNavbar>
            <div className="nav-brand">
                <Link href="/">
                <a>DreamBuckets</a>
                </Link>
            </div>
            <ul className="nav-right">
                {
                    auth ? (
                        <>
                            <Link activeclassname="active" href="/">
                                <a className="nav-icon icon-home" activeclassname="active"><HiOutlineHome/></a>
                            </Link>
                            <Link activeclassname="active" href="/explore">
                                <a className="nav-icon icon-explore" activeclassname="active"><HiOutlineGlobeAlt/></a>
                            </Link>
                            <Link activeclassname="active" href="/inbox">
                                <a className="nav-icon icon-inbox" activeclassname="active"><HiOutlineMail/></a>
                            </Link>
                            <Link activeclassname="active" href="/ardhayudhatama">
                                <a className="nav-icon icon-profile" activeclassname="active"><HiOutlineUser/></a>
                            </Link>
                            {/* <Button className="primary" onClick={() => deauthenticate()}>Log Out</Button> */}
                        </>
                    ) : (
                        <Link href="/login">
                            <a><Button className="primary">Log In</Button></a>
                        </Link>
                    )
                }
                
            </ul>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.nav`
    width:100%;
    height:60px;
    padding: 0 160px;
    border-bottom:1px solid #ddd;

    box-sizing:border-box;
    display:flex;
    align-items:center;
    position:relative;

    .active{
        color:#01a7e5 !important;
    }

    .nav-icon{
        color:#121212;
    }

    .icon-home{
        position:relative;

        &:hover{
            &::before{
                content: "Home";
                display:block;
                position:absolute;
                bottom:-3.25rem;
                padding:.5rem;
                background:#333;
                color:#fff;
                right:-65%;
                border-radius:.25rem;
                box-shadow:0 2px 4px #00000033
            }
        }
    }
    .icon-inbox{
        position:relative;

        &:hover{
            &::before{
                content: "Inbox";
                display:block;
                position:absolute;
                bottom:-3.25rem;
                padding:.5rem;
                background:#333;
                color:#fff;
                right:-60%;
                border-radius:.25rem;
                box-shadow:0 2px 4px #00000033
            }
        }
    }
    .icon-explore{
        position:relative;

        &:hover{
            &::before{
                content: "Explore";
                display:block;
                position:absolute;
                bottom:-3.25rem;
                padding:.5rem;
                background:#333;
                color:#fff;
                right:-80%;
                border-radius:.25rem;
                box-shadow:0 2px 4px #00000033
            }
        }
    }
    .icon-profile{
        position:relative;

        &:hover{
            &::before{
                content: "Profile";
                display:block;
                position:absolute;
                bottom:-3.25rem;
                padding:.5rem;
                background:#333;
                color:#fff;
                right:-70%;
                border-radius:.25rem;
                box-shadow:0 2px 4px #00000033
            }
        }
    }
    a{
        font-size:.9rem;
        color:#222;
        display:inline-block;
        margin-right:1.3rem;

        &:hover{
            color:#01a7e5;
        }
    }

    .nav-right{
        margin-left:auto;
        position:relative;
        z-index:1;
        display: flex;
        align-items: center;
    }

    .primary{
        margin-left:2rem;
    }
    .nav-brand{
        font-family: 'Leckerli One', cursive;

        a{
            font-size:1.5rem;
        }
    }
`

export default Navbar;