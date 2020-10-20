import styled from '@emotion/styled'
import Button from '../components/shared/Button'
import Input from '../components/shared/form/Input'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import graphxios from '../lib/graphxios'

function Login(){
    const router = useRouter();
    const [errors, setErrors] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event){
        event.preventDefault();

        const mutation = `
        mutation{
            login(email: "${email}", password: "${password}"){
                user{
                    username
                }
            }
        }
        `

        graphxios.request('http://localhost:3000/api/graphql', mutation).then( async ({data}) => {

            if(data.errors){
                return setErrors(data.errors[0].message)
            }

            console.log(data.data.login);
            await router.push(`/${data.data.login.user.username}`)
        }).catch(err => console.log(err))
    }

    return(
        <LoginStyled>
            <Head>
                <title>Login | DreamBucket</title>
            </Head>
            <div className="page-left"></div>
            <div className="page-right">
                <form onSubmit={handleSubmit}>
                    <h1>Log In</h1>
                    <div className="field">
                        <Input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="field">
                        <Input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <Button className="primary size-medium" type="submit">Log In</Button>
                    <Link
                        href="/auth/google"
                    >
                        <a className="social-login-btn btn-disabled">
                        <i className="google-icon"></i>
                        <span>Login with Google</span>
                        </a>
                    </Link>
                    <p>Don't have an account? <Link href="/signup"><a>Sign up</a></Link> here</p>
                </form>
            </div>
        </LoginStyled>
    )
}

const LoginStyled = styled.div`
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
    
    @media (max-width: 1024px) {
        .page-left{
            width:0%;
        }
        @media (max-width: 1024px) {
            width:100%;
        }
    }
`

export default Login;