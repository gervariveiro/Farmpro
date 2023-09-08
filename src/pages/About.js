import MenuNav from '../components/Navbar.js';
import FotoCampo from '../assets/campo fondo.jpg';
import {MDBContainer,MDBRow, MDBCol} from 'mdb-react-ui-kit';

function About () {


return (

<>
    <MenuNav />
    <MDBContainer >
        <img src={FotoCampo} className='fotoBack' alt=''/>
        <MDBRow className='overlay2 d-flex justify-content-center'>
            <MDBCol className='col12 col-md-4 text' style={{margin:150}}>
                <p>Our main goal is to give you a place to enjoy and have peace. The freedom to roam the land, buy fresh produce and have direct contact with nature. We offer tours and adventure tourism.</p>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    
</>

)

}

export default About;