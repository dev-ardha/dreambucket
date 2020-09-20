import NextNProgress from '../components/global/NextNProgress'
import '../styles/app.scss'
import { HiPlusCircle } from 'react-icons/hi'
import { UserProvider } from '../context/UserContext'

function MyApp({ Component, pageProps }) {

    return (
        <>
            <NextNProgress
                color="#01a7e5"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <UserProvider>
                <Component {...pageProps}/>
            </UserProvider>
            {/* <div className="create"><span>+</span></div> */}
            <style jsx>{`
            .create{
                font-size:3rem;
                color:#01a7e5;
                display:flex;
                padding:.5rem;
                background:#fff;
                box-shadow: 0 0 12px #0000001c;
                border-radius: 50%;
                z-index: 100000;
                bottom: 2rem;
                position: fixed;
                right: 2rem;
                align-items: center;
                justify-content: center;
                width: 35px;
                height: 35px;
                font-weight: 700;
                cursor: pointer;
            }

            .create span{
                transform: translateY(-1px);
            }

            .create:hover{
                background: #f0f1f3;    
            }
            `}</style>
        </>
    )
}

export default MyApp;