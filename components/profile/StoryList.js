import Styled from '@emotion/styled'
import { HiOutlinePencil, HiPlusCircle } from 'react-icons/hi'
import { AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai'

function StoryList(){
    const limitTitle = (text, count) => {
        return text.slice(0, count) + (text.length > count ? "..." : "");
    }
    return(
        <StoryListStyled>
            <div className="section-title">
                <h2>Story</h2>
                <span className="icon"><HiPlusCircle/></span>
            </div>
            <ul>
                <li>
                    <div className="list-wrap">
                        <span className="title">Serunya jalan-jalan di Eropa</span>
                        <span className="date-published">Published on 1 July 2020</span>
                    </div>
                    <div className="icon-wrap">
                        <span className="note-icon edit"><HiOutlinePencil/></span>
                        <span className="note-icon pin-this pinned"><AiFillPushpin/></span>
                    </div>
                </li>
                <li>
                    <div className="list-wrap">
                        <span className="title">{limitTitle('Terbang ke luar angkasa bareng BlueOrigin dan melihat bulan lebih dekat', 45)}</span>
                        <span className="date-published">Published on 10 January 2020</span>
                    </div>
                    <div className="icon-wrap">
                        <span className="note-icon edit"><HiOutlinePencil/></span>
                        <span className="note-icon pin-this"><AiOutlinePushpin/></span>
                    </div>
                </li>
            </ul>
        </StoryListStyled>
    )
}

const StoryListStyled = Styled.section`

    .section-title{
        display:flex;
        align-items:flex-start;
        justify-content:space-between;

        h2{
            margin:0;
        }
        .icon{
            font-size:2.5rem;
            color:#01a7e5;
        }
    }
    ul{
        display:flex;
        flex-direction:column;

        li{
            padding:1rem 2rem;
            box-sizing: border-box;
            border:1px solid #ddd;
            width:100%;
            display:flex;
            align-items:center;
            justify-content:space-between;
            margin-bottom:1rem;
            border-radius: 4px;

            &:hover{
                box-shadow: 0px 1px 3px #00000012;
            }

            .list-wrap{
                display:flex;
                flex-direction:column;
            }
            .icon-wrap{
                display: flex;
                align-items: center;
            }

            .edit{
                position:relative;

                &:hover{
                    &::before{
                        font-size:.9rem;
                        content: "Edit";
                        display:block;
                        position:absolute;
                        bottom:-2.5rem;
                        padding:.5rem;
                        background:#333;
                        color:#fff;
                        right:-5%;
                        border-radius:.25rem;
                        box-shadow:0 2px 4px #00000033
                    }
                }
            }

            .pin-this{
                margin-left:.25rem;
                position:relative;

                &:hover{
                    &::before{
                        font-size:.9rem;
                        content: "Pin story";
                        display:block;
                        position:absolute;
                        bottom:-2.5rem;
                        padding:.5rem;
                        background:#333;
                        color:#fff;
                        right:-45%;
                        border-radius:.25rem;
                        box-shadow:0 2px 4px #00000033;
                        min-width: 60px;
                        right:-52%;
                    }
                }
            }
            .pinned{
                color:#01a7e5;

                &:hover{
                    &::before{
                        right:-72%;
                        content: "Unpin story";
                        min-width: 80px;
                    }
                }
            }
            .note-icon{
                font-size:1.4rem;
                cursor:pointer;
                padding: .5rem;
                border-radius: 50%;
                display: flex;
                position:relative;

                &:hover{
                    padding: .5rem;
                    background: #f7f7f7;
                    border-radius: 50%;
                    display: flex;
                }
            }

            .title{
                font-weight:bold;
                margin-bottom:.4rem;
            }
            .date-published{
                color:#888;
                font-size:.9rem;
            }
        }
    }
`

export default StoryList;