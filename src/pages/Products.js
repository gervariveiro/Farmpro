import MenuNav from '../components/Navbar.js';
import Spa from '../assets/spa.jpg';
import quesoDulce from '../assets/quesoydulce.jpg';
import Parrilla from '../assets/almuerzoparrilla.jpg';
import pasoCaballo from '../assets/paseocaballo.jpg';
import {MDBContainer,MDBRow, MDBCard, MDBCol, MDBRipple, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBBtn} from 'mdb-react-ui-kit';
import Footer from '../components/Footer.js';

function Products () {


    return (
    
    <>
        <MenuNav/>
    
    <MDBContainer>
        <MDBRow className= 'backProducts d-flex justify-content-center  mt-5 mb-5'>
            <MDBCol size="12" lg="5" className='d-flex align-items-center flex-column' >
                <MDBCard className='w-50 mb-3 mt-4' style={{ height:'350px' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={Spa} fluid alt='...' style={{ height:'200px' }}/>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle className='small'>Spa</MDBCardTitle>
                        <MDBCardText className='small'>
                            Enjoy our Spa in the middle of the countryside and nature..
                        </MDBCardText>
                        <MDBBtn href='#' className='d-inline bg-opacity-75 bg-success'>See more</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol size="12" lg="5" className='d-flex align-items-center flex-column' >
                <MDBCard className='w-50 mb-3 mt-4' style={{ height:'350px' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={quesoDulce} fluid alt='...' style={{ height:'200px' }}/>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle className='small'>Breakfast and natural products</MDBCardTitle>
                        <MDBCardText className='small'>
                            All our products are brought from nature to your breakfast table. Taste them and buy them to take them home.
                        </MDBCardText>
                        <MDBBtn href='#' className='d-inline bg-opacity-75 bg-success'>See more</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol size="12" lg="5" className='d-flex align-items-center flex-column' >
                <MDBCard className='w-50 mb-3 mt-4' style={{ height:'350px' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={pasoCaballo} fluid alt='...' style={{ height:'200px' }}/>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle className='small'>Horseback riding tours</MDBCardTitle>
                        <MDBCardText className='small'>
                             Experience the feeling of riding a horse and riding through the countryside.
                        </MDBCardText>
                        <MDBBtn href='#' className='d-inline bg-opacity-75 bg-success'>See more</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol size="12" lg="5" className='d-flex align-items-center flex-column' >
                <MDBCard className='w-50 mb-3 mt-4' style={{ height:'350px' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src={Parrilla} fluid alt='...' style={{ height:'200px' }}/>
                    </MDBRipple>
                    <MDBCardBody>
                        <MDBCardTitle className='small'>Enjoy a delicious lunch </MDBCardTitle>
                        <MDBCardText className='small'>
                            We invite you to try our grill with the best "Asado".
                        </MDBCardText>
                        <MDBBtn href='#' className='d-inline bg-opacity-75 bg-success'>See more</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    <Footer/>
    </>
    
    )
    
    }
    
    export default Products;