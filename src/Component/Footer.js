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
            <MDBFooter className='bg-light text-center text-white footer'>
                <MDBContainer className='p-4 pb-0'>
                    <section className='mb-4'>
                       
                            <SocialIcon  color="light  bg-light " url="https://web.facebook.com/7asnMousa/" />
                        

                            <SocialIcon url="https://www.linkedin.com/in/hassanabdelqader/" />
                    
                           <SocialIcon url="https://glittering-gumption-94e1b7.netlify.app/" />
                      
                        
                           <SocialIcon url="mailto:terawihassan@gmail.com" />
                  

                            <SocialIcon url="https://github.com/Hassanabdelqader" />
                       

                    </section>
                </MDBContainer>

                <div className='text-center text-black p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © {new Date().getFullYear() } Copyright:
                    <a className='text-black' href='https://glittering-gumption-94e1b7.netlify.app/'>
                        Hasan Mousa 
                    </a>
                                    
                </div>
            </MDBFooter>
        );

    }
}


/*


      */