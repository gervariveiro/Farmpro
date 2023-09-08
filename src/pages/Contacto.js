import MenuNav from '../components/Navbar.js';
import {MDBContainer, MDBBtn, MDBInput} from 'mdb-react-ui-kit';
import Footer from '../components/Footer.js';

function Contact () {


    return (
    
    <>
        <MenuNav/>
    
        <MDBContainer>
        <section className='mb-4 d-flex flex-column justify-content-center align-items-center textContact'>
            <h2 className="font-weight-bold text-center my-4">Contact with us</h2>
            <p className="text-center w-responsive mx-auto mb-5">¿Tienes preguntas o algo para plantear?<br></br>
            No dudes en ponerte en contacto con nosotros a través de nuestro formulario o por nuestras redes sociales.</p>
            <form className='d-flex flex-column'>
                <MDBInput id='form4Example1' className="bg-light" wrapperClass='mb-4' label='Name' name="user_name"/>
                <MDBInput type='email' id='form4Example2' className="bg-light" wrapperClass='mb-4' label='Email address' name="user_email"/>
                <textarea wrapperClass='mb-4' textarea="true" id='form4Example3' label='Message' name="message" className='textMesagge mb-4 border border-1 border-secondary'/>
                <MDBBtn type='submit' className='mb-4 bg-success square border border-1 border-secondary align-self-center'>
                    Send
                </MDBBtn>
            </form>   
        </section>
        </MDBContainer>
        <br></br>
        <br></br>
        <Footer className='mt-5'/>
    </>
    
    )
    
    }
    
    export default Contact;