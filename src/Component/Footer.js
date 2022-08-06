import React from 'react';

import { SocialIcon } from 'react-social-icons';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

export default class Footer extends React.Component {

    render() {

        return (
            <MDBFooter className='bg-dark text-center text-white footer'>
                <MDBContainer className='p-4 pb-0'>
                    <section className='mb-4'>
                        <MDBBtn outline color="light  bg-light " floating className='m-1' href='#!' role='button'>
                            <SocialIcon url="https://web.facebook.com/7asnMousa/" />
                        </MDBBtn>

                        <MDBBtn outline color="light  bg-light " floating className='m-1' href='#!' role='button'>
                            <SocialIcon url="https://www.linkedin.com/in/hassanabdelqader/" />
                        </MDBBtn>

                        <MDBBtn outline color="light  bg-light " floating className='m-1' href='https://glittering-gumption-94e1b7.netlify.app/' role='button'>
                            <SocialIcon url="https://glittering-gumption-94e1b7.netlify.app/" />
                        </MDBBtn>
                        
                        <MDBBtn outline color="light  bg-light " floating className='m-1' href='#!' role='button'>
                            <a href='mailto :terawihassan@gmail.com'>
                                <SocialIcon url="mailto:terawihassan@gmail.com" />
                            </a>

                        </MDBBtn>

                        <MDBBtn outline color="light  bg-light " floating className='m-1' href='https://github.com/Hassanabdelqader' role='button'>
                            <SocialIcon url="https://github.com/Hassanabdelqader" />
                        </MDBBtn>

                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © {new Date().getFullYear() } Copyright:
                    <a className='text-white' href='https://glittering-gumption-94e1b7.netlify.app/'>
                        Hasan Mousa
                    </a>
                </div>
            </MDBFooter>
        );

    }
}