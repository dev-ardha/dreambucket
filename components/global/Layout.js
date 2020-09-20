import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect, useState } from 'react'
import Head from 'next/head'

function Layout({pageTitle, children}){
    const [ alert, setAlert ] = useState(true)

    useEffect(() => {
        setAlert(localStorage.getItem('alert'))
    }, [])

    function removeAlert(){
        localStorage.setItem('alert', false)
        setAlert(false)
    }

    return(
        <>
            <Head>
                <title>{pageTitle} | DreamBucket</title>
            </Head>
            <Navbar/>
            {
                alert === true  || alert === undefined || alert === null? (
                    <div className="alert">
                        <p>Website is under construction.</p>
                        <div className="close" onClick={() => removeAlert()}>x</div>
                    </div>
                ) : (
                    ''
                )
            }
                <div className="page">
                    {children}
                </div>
            <Footer/>
            <style jsx>{`
                .page{
                    min-height:80vh;
                }
                .alert{
                    padding:.25rem 3rem;
                    box-sizing:border-box;
                    display:flex;
                    align-items:center;
                    background:#121212;
                    color:#fff;
                    width:100%;
                    font-size:.9rem;
                    position:fixed;
                    bottom:0;
                }
                .close{
                    display:flex;
                    font-weight:bold;
                    font-size:1rem;
                    position:absolute;
                    right:2rem;
                    cursor:pointer;
                }
            `}</style>
        </>
    )
}

export default Layout;