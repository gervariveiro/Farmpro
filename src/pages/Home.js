import MenuNav from '../components/Navbar.js';
import Video from '../assets/campo.mp4';
//import Divider from '../components/Divider.js';

function Home () {


return (

<>
    <MenuNav />
    <div className='main'>
        <div className="overlay"></div>  
            <div className='vid'></div>
                <video  autoplay="autoplay" loop="loop" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto"  style={{display:'block'}} height='1080'>
                    <source src={Video} type="video/mp4" ></source>
                </video>
        <div className="content">
            <h1>Welcome to Paradise</h1>
            <h4>Be free and natural</h4>
        </div>
    </div>
    
</>

)

}

export default Home;