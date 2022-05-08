import React from 'react'
import styled, {keyframes} from 'styled-components'
import theme from '@theme'
import Image from '@components/Image'
import { Col, Container, Row } from 'react-grid-system'
import {fadeInUp} from 'react-animations'

const fadeAnimation = keyframes`${fadeInUp}`;

const SAutopotSection = styled.div`
    background-color: ${theme.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

const STitleSection = styled.div`
    background-color: ${theme.secondaryColor};
    padding: 30px;
    text-align: center;
`

const SSpan = styled.span`
    font-family: "Globotipo Variable";
    font-size: 2rem;
    font-weight: bolder;
    color: #fff;
`

const SSpanSmall = styled.span`
    font-family: "Globotipo Variable";
    font-size: 1rem;
    font-weight: bolder;
    color: #fff;
`

const AnimatedFrame = styled.div`
    animation: 0.5s ${fadeAnimation};
`


const AutopotSection = () => {

    return (
        <>
            <STitleSection>
                <SSpan>Skill Spammer</SSpan>
            </STitleSection>
            <SAutopotSection>
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <AnimatedFrame>
                                <Image style={{"width": "100%", "boxShadow": "12px 10px 30px black"}} src={"spammer-guide.png"}/>
                            </AnimatedFrame>
                            <div style={{marginTop: 20}}>
                                <SSpanSmall> 1. Key spammer with 2 options (Click and Non-Click) </SSpanSmall><br/>
                                <SSpanSmall> 2. Configure your spammer delay with or without mouse flick (moves cursor by 1px in diagonal when activated) </SSpanSmall><br/>
                                <SSpanSmall> 3. Configure any key to be pressed in specified seconds. </SSpanSmall><br/>
                            </div>
                        </Col>
                        <Col xs={12} md={8}>
                            <AnimatedFrame>
                                <Image style={{"borderRadius": "10px", "boxShadow": "12px 10px 30px black"}} src={"spammer.gif"}/>
                            </AnimatedFrame>
                        </Col>
                    </Row>
                </Container>
            </SAutopotSection>
        </>
    )
}

export default AutopotSection