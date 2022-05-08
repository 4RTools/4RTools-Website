import * as React from "react"
import Button from '@components/Button'
import Hero from '@components/Hero'
import '../theme/reset.css'
import AutopotSection from "@sections/Autopot"
import SpammerSection from "@sections/Spammer"
import SongMacroSection from "@sections/SongMacro"

// markup
const IndexPage = () => {
  return (
    <React.Fragment>
      <Hero/>
      <main>
        <AutopotSection/>
        <SpammerSection/>
        <SongMacroSection/>
      </main>
    </React.Fragment>
  )
}

export default IndexPage
