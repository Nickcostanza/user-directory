import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';

function About() {
    return(
        <div>
            <Hero backgroundImage='https://cdn.pizap.com/pizapfiles/images/photo_backgrounds_textures_app04.jpg'>
                <h1>User Directory</h1>
            </Hero>
            <Container style ={{ marginTop: 30}}>
                <Row>
                    <Column size='md-12'>
                        <p> Welcome to one of my first React applications. This application will let a user easily search their company's employees and find their contact information.</p>
                        <br></br>
                    </Column>
                </Row>
            </Container>
        </div>
    );
}

export default About;