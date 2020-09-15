import styled from '@emotion/styled'
import Button from '../components/shared/Button'
import Input from '../components/shared/form/Input'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

function Login(){
    const router = useRouter();

    async function handleSubmit(event){
        event.preventDefault();

        await router.push('')
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
                        <Input type="text" placeholder="Username" name="username"/>
                    </div>
                    <div className="field">
                        <Input type="password" placeholder="Password" name="password"/>
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