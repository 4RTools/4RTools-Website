import React from 'react'
import styled, {keyframes} from 'styled-components'
import {Row, Container, Col} from 'react-grid-system'
import Button from '@components/Button'
import Image from '@components/Image'
import {fadeInUp} from 'react-animations'
import theme from '@theme'

const fadeAnimation = keyframes`${fadeInUp}`;
const alignCenter = {display: "flex", justifyContent: "center"}

const CHero = styled.div`
    img {
        margin: 0px auto;
        display: block;
    }
`

const CText = styled.span`
    color: ${theme.primaryColor};
    font-family: "Globotipo Variable";
    font-weight: bolder;
    text-align: center;
    font-size: 1.5rem;
    margin: 40px 0;
`

const AnimatedFrame = styled.div`
    animation: 0.5s ${fadeAnimation};
`

const Hero = () => {
    return(
        <>
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <CHero> 
                            <Image src={"logo-4rtools.png"}/>
                        </CHero>
                    </Col>
                    <Col xs={12} style={alignCenter}>
                        <CText>Your 100% opensource Autopot, Autobuff, Skill Spammer, Macro and Switch for Ragnarok Online.</CText>
                    </Col>
                    <Col xs={12} md={12} style={alignCenter}>
                        <AnimatedFrame>
                            <Button label='Github'/>
                            <Button label='Download Latest Version'/>
                            <Button label='Join your discord'/>
                        </AnimatedFrame>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Hero