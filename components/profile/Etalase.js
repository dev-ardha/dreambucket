import Styled from '@emotion/styled'
import Button from '../shared/Button'
import { useState } from 'react'
import Link from 'next/link'
import { HiOutlineBookOpen, HiOutlineStar } from 'react-icons/hi'

function Etalase(){
    const [tab, setTab] = useState('achieved');

    const emptyDream = <>
        <div className="is-empty">
            <h2>No dreams to show</h2>
            <p>You have not yet added any dreams</p>
        </div>
    </>

    const emptyAchievedDream = <>
        <div className="is-empty">
            <h2>No dreams to show</h2>
            <p>Don't give up, your dreams will come true tomorrow:)</p>
        </div>
    </>

    const achieved = <>
        {emptyAchievedDream}
    </>

    const saved = <>
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
    </>

    const switchTabs = () => {
        switch (tab) {
            case'achieved':
                return achieved
            case'saved':
                return saved
            default:
                break;
        }
    }

    return(
        <StyledEtalase>
            <ul className="tabs">
                <li className={tab === 'achieved' ? 'active' : ''} onClick={()=> setTab('achieved')}><span className="tab-icon"><HiOutlineStar/></span>Achieved<span className="count">(0)</span></li>
                <li className={tab === 'saved' ? 'active' : ''} onClick={()=> setTab('saved')}><span className="tab-icon"><HiOutlineBookOpen/></span>My Dreams<span className="count">(2)</span></li>
            </ul>
            {
                switchTabs()
            }
        </StyledEtalase>
    )
}

const StyledEtalase = Styled.section`

    .is-empty{
        padding-top: 1rem;
        height: 240px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin:1rem auto;

        h2{
            margin:0;
        }
    }
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
`

export default Etalase