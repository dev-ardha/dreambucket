import styled from '@emotion/styled'
import Button from '../components/shared/Button'
import Input from '../components/shared/form/Input'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { addUser } from '../lib/make-request'
import { useState } from 'react'
import FormMessage from '../components/shared/form/FormMessage'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

function Signup(){
    const router = useRouter();
    const [error, setError] = useState()

    async function handleSubmit(event){
        event.preventDefault();
        setError("")

        const fullname = event.currentTarget.elements.fullname
        const username = event.currentTarget.elements.username
        const email = event.currentTarget.elements.email
        const password = event.currentTarget.elements.password

        try {
            console.log('loading')
            const { data } = await addUser(fullname.value, username.value, email.value, password.value)

            if(data.data.register){
                console.log(data.data)
                router.push('/')
            }else{
                setError(data.errors[0].message)
                console.log(data.errors[0])
            }

        } catch (error) {
            console.log('error', error)
        }
    }

    return(
        <SignupStyled>
            <Head>
                <title>Sign Up | DreamBucket</title>
            </Head>
            <div className="page-left" css={css`
                @media (max-width: 1024px) {
                    width:0% !important;
                }
            `}>
            </div>
            <div className="page-right" css={css`
                @media (max-width: 1024px) {
                    width:100% !important;
                }
            `}>
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    {error ? <FormMessage msg={error} style="error"/> : ''}
                    <div className="field">
                        <Input type="text" placeholder="Full Name" name="fullname"/>
                    </div>
                    <div className="field">
                        <Input type="text" placeholder="Username" name="username"/>
                    </div>
                    <div className="field">
                        <Input type="email" placeholder="Email" name="email"/>
                    </div>
                    <div className="field">
                        <Input type="password" placeholder="Password" name="password"/>
                    </div>
                    <Button type="submit" className="primary size-medium">Sign Up</Button>
                    <Link
                        href="/auth/google"
                    >
                        <a className="social-login-btn btn-disabled">
                        <i className="google-icon"></i>
                        <span>Sign up with Google</span>
                        </a>
                    </Link>
                    <p>Already have an account? <Link href="/login"><a>Log in</a></Link> here</p>
                </form>
            </div>
        </SignupStyled>
    )
}

const SignupStyled = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;

    .page-left, .page-right{
        width:50%;
        height:100vh;
    }

    .page-left{
        background-image: linear-gradient(to right, #01a7e5 ,#0b9dd4);
    }
    .page-right{
        display:flex;
        justify-content:center;
        align-items:center;
    }

    form{
        display:flex;
        flex-direction:column;
        width:280px;
        padding:2rem 1rem;
        background:#fff;

        h1{
            text-align:center;
            font-weight:800;
            margin-bottom:2rem;
            margin-top:1rem;
            font-size:2rem;
        }
    }

    .field{
        width:100%;
        display:flex;
    }

    p{
        text-align:center;
        font-size:.9rem;
    }
`

export default Signup;