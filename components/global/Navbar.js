import styled from '@emotion/styled'
import Button from '../shared/Button'
import Link from '../shared/Link'
import { HiOutlineGlobeAlt, HiOutlineUser, HiOutlineHome, HiOutlineMail } from 'react-icons/hi'
import { getUsers } from '../../lib/make-request'
import { useState } from 'react'

function Navbar(){
    const auth = true;
    const [focus, setFocus] = useState(false)
    const [results, setResults] = useState([])
    const [searchQuery, setSearchQuery] = useState()
    const [loading, setLoading] = useState(true)

    const limitText = (text, count) => {
        return text.slice(0, count) + (text.length > count ? "..." : "");
    }

    async function handleChange(e){
        setSearchQuery(e)
        setLoading(true)
        getUsers(e).then(data => {
            if(data.data.data.search){
                setLoading(false)
                setResults(data.data.data.search)
            }else{
                setLoading(false)
                console.log('Something went wrong')
            }
        })
    }

    function leavePage(){
        setFocus(false)
        searchQuery(null)
        setResults([])
    }

    return(
        <StyledNavbar>
            <div className="nav-brand">
                <Link href="/">
                <a>DreamBuckets</a>
                </Link>
            </div>
            <div className="nav-center">
                <input type="text" placeholder="Search..." onChange={(e) => handleChange(e.target.value)} onFocus={() => setFocus(true)}/>
                {
                    focus && searchQuery ? (
                    <>
                        {
                        searchQuery && !loading? (
                            <div className="search-preview" onBlur={() => setFocus(false)}>
                                <ul>
                                    {
                                    results?.map((result, index) => {
                                        return(
                                            <Link href={`/${result.username}`} key={index}>
                                            <a onClick={() => leavePage()}>
                                                <li>
                                                    <div className="list-image"></div>           
                                                    <div className="list-detail">
                                                        <span className="list-username">{result.username}</span>
                                                        <span className="list-fullname">{limitText('Yudhatama Indra Wardhana Setyabudi', 22)}</span>
                                                    </div>
                                                </li>
                                            </a>
                                            </Link>
                                        )
                                    })
                                    }
                                </ul>
                            </div>
                        ) : ''
                        }
                    </>
                    ) : ''
                }
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
    position: sticky;
    top: 0;
    z-index: 10;
    background: #fff;
    box-shadow: 0 1px 4px rgb(0 0 0 / 7%);
    box-sizing:border-box;
    display:flex;
    align-items:center;

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

    .nav-center{
        position:relative;
        
        input{
            border: 1px solid #ddd;
            background: #f9f9f9;
            text-align: center;
            font-size: .9rem;
            padding: .3rem;
            border-radius: 4px;
            width: 200px;

            &:focus{
                border:1px solid #ddd;
                outline:none;
            }
        }

        .search-preview{
            width: 270px;
            height: 360px;
            background: #fff;
            position: absolute;
            box-shadow: 0 0px 10px #0000001c;
            left: -28px;
            top: 41px;
            overflow-y: scroll;

            ul{
                margin:0;

                a{
                    margin: 0;
                    width: 100%;
                }

                li{
                    width:100%;
                    padding: .8rem;
                    box-sizing: border-box;
                    font-size:.8rem;
                    border: 1px solid #ddd;
                    border-top: 0;
                    border-right:0;
                    border-left:0;
                    display: inline-box;
                    cursor:pointer;

                    &:hover{
                        background: #f0f2f545;
                    }

                    .list-image{
                        height:45px;
                        width:45px;
                        background:#eee;
                        margin-right:8px;
                        border-radius:50%;
                    }
                    .list-detail{
                        display:flex;
                        flex-direction:column;
                        justify-content: center;
                        max-width: 169px;

                        .list-username{
                            font-weight:bold;
                            margin-bottom:4px;
                        }
                        .list-fullname{
                            font-size:.8rem;
                            color:#777;
                        }
                    }
                }
            }
        }
    }
    .nav-right{
        margin-left:auto;
        position:relative;
        z-index:1;
        display: flex;
        align-items: center;
        flex: 1 0 0%;
        justify-content: flex-end;
        
        a{
            margin: 0 0 0 1.3rem;
        }
    }

    .primary{
        margin-left:2rem;
    }
    .nav-brand{
        font-family: 'Leckerli One', cursive;
        flex: 1 0 0%;

        a{
            font-size:1.5rem;
        }
    }
`

export default Navbar;