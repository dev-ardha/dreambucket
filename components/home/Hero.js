import styled from '@emotion/styled'
import Button from '../shared/Button'

function Hero(){
    return(
        <HeroStyled>
            <div className="title">
                <h1>Your dreams, made possible</h1>
                <h3>A way to manage a list of things to do before you expire.</h3>
                <Button className="primary size-medium">Start dreaming now!</Button>
            </div>
            <section id="photos">
                <div className="photo">
                    <img className="photo-grid" src="https://i0.wp.com/bestplacesofinterest.com/wp-content/uploads/2018/11/Photos-by-Lucas-Favre-on-Unsplash.jpg?resize=1280%2C640&ssl=1"/>
                </div>
                <div className="photo">
                    <img className="photo-grid" src="https://www.wanderluluu.com/wp-content/uploads/2018/06/20170707-IMG_0771.jpg"/>
                </div>
                <div className="photo">
                    <img className="photo-grid" src="https://4.bp.blogspot.com/-UmbWiviEPSQ/XGA-FHsHZUI/AAAAAAAACP8/4AWbQq1IEDQGJfwiVYUYtLE82x9I_1vcwCLcBGAs/s1600/14772291568709.png"/>
                </div>
                <div className="photo">
                    <img className="photo-grid" src="https://www.wanderluluu.com/wp-content/uploads/2018/06/20180507-DSC01954.jpg"/>
                </div>
                <div className="photo">
                    <img className="photo-grid" src="https://1.bp.blogspot.com/-RDrEhLmWKIg/Xz88koqYNiI/AAAAAAAABWo/hrWGEzcUtr8Ff_rp8fUSQ3COACp4PfArACNcBGAsYHQ/w480-h640/12607.jpg"/>
                </div>
                <div className="photo">
                    <img className="photo-grid" src="https://images.squarespace-cdn.com/content/v1/57a43cf715d5db0bee1397d9/1540784308704-0SER6BC686CADVTEAXZB/ke17ZwdGBToddI8pDm48kH7bcx_p807l_7aJvGUB_uN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ivq7Q1ckvJa8MA8qNUlEOb5ayIfISEBZb_L8CfvGEaIB8YD9SEW32zUFrGfM3H_Sw/Beautifulphototravelsolo"/>
                </div>
                <div className="photo">
                    <img className="photo-grid" src="https://s27922.pcdn.co/wp-content/uploads/2017/02/Sam-Sand-Dunes-Jaisalmer-India.jpg.optimal.jpg"/>
                </div>
                <div className="photo">
                    <img className="photo-grid" src="https://1.bp.blogspot.com/-OkiycSZjTcg/Xz5WSeTrR7I/AAAAAAAABV4/K1SzguqjWR0Zy9eb_erow32oYAMqoNdXACNcBGAsYHQ/w640-h480/Greweng%2BFamily.jpg"/>
                </div>
            </section>
        </HeroStyled>
    )
}

const HeroStyled = styled.div`
    display:flex;
    flex-direction:column;

    .title{
        width:100%;
        height:400px;
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        color:#121212;
        background:#fff;

        h1{
            text-align:center;
            font-size:2.5rem;
            font-weight:800;
            margin-top:-50px;
            margin-bottom:0px;
        }

        h3{
            font-weight:normal;
            margin-bottom:3rem;
            color:#777;
            text-align:center;
        }
    }

    #photos {
        margin-top:-50px;
        padding:0 48px;
        line-height: 0;
        
        -webkit-column-count: 4;
        -webkit-column-gap:   5px;
        -moz-column-count:    4;
        -moz-column-gap:      5px;
        column-count:         4;
        column-gap:           5px;  
    }
    
    #photos .photo {
        width: 100%;
        height: auto;
        margin-bottom:5px;
        position:relative;

        .photo-grid{
            width:100%;
            height:100%;
        }
    }
    
`

export default Hero;