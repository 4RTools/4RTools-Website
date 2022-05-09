import * as React from "react"
import Hero from '@components/Hero'
import Image from '@components/Image'
import '../theme/reset.css'
import Section from "@sections/Section"
import Footer from "@components/Footer"

import styled from "styled-components"

const SHiddenMobile = styled.div`
  @media screen and (max-width: 700px) {
    display: none;
  }
`
    
// markup
const IndexPage = () => {
  return (
    <React.Fragment>
      <SHiddenMobile>
        <Image style={{position: "absolute", top: "6vh", transform: "scaleX(-1)", width: "290px"}}  src="kafra-png-7.png"/>
      </SHiddenMobile>
      <Hero/>
      <main>
        <Section title="Autopot" gif="autopot.gif" guide="autopot-guide.png" tips={["1. Autopot very customizable with Yggdrasil option", "2. Automatic status recovery (Curse, Silence, Poison...)"]}/>
        <Section title="Key Spammer" gif="spammer.gif" guide="spammer-guide.png" tips={[
            "1. Key spammer with 2 options (Click and Non-Click)", 
            "2. Configure your spammer delay with or without mouse flick (moves cursor by 1px in diagonal when activated)",
            "3. Configure any key to be pressed in specified seconds.",
          ]}/>
          <Section title="Macro Songs" gif="song-macro.gif" guide="macro-songs.png" tips={[
              "1. Activation Key and Delay configuration. Also a button to reset current macro.",
              "2. Up to 20 keys for configure how you want."
            ]}/>
          <Section title="Autobuff" gif="autobuff.gif" guide="autobuff-guide.png" tips={[
              "Autobuff for Stuffs and Skills",
              "More than 60 items and buffs ready for use",
              "Easy-to-add new buffs. Since our code is open, you can add extra-buffs and collaborate with us.",
              "Smart and performatic detection algorithm",
            ]}/>
      </main>
      <Footer/>
    </React.Fragment>
  )
}

export default IndexPage
