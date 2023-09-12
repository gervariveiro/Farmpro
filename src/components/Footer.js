import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';


export default function Footer() {
  return (
    <MDBFooter className='text-center text-white mt-2' style={{ backgroundColor: '#51a60c' }}>
      <MDBContainer className='pt-2'>
        <section className='mb-2'>
          
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark'
            href=''
            role='button'
          >
            <MDBIcon fab className='fa-instagram' size="2x" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark iconSize'
            href=''
            role='button'
          >
            <MDBIcon fab className='fa-youtube' size="2x" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark'
            href=''
            role='button'
          >
           <MDBIcon far icon="envelope" size="2x" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3 small' style={{ backgroundColor: '#51a60c' }}>
        © 2023 Copyright: Turistic Proyect
        <a className='text-dark small' href='https://gervasioriveiro.com'>
          @Gervasio Riveiro
        </a>
      </div>
    </MDBFooter>
  );
}