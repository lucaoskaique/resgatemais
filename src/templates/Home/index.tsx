import Hero from "@/components/Hero"
import Newsletter from "@/components/Newsletter"
import DonateSection from "@/components/SectionDonate"
import {
  DStemp,
  Herotemp,
  Mediatemp,
  NLtemp
} from "@/pages/api/(templates)/template"

import Base from "../Base"

const Home = () => {
  return (
    <Base>
      {/* sessão hero - 100vh*/}
      <Hero
        bgHero={Herotemp.bgHero}
        home={{
          logo: Herotemp.home.logo,
          title: Herotemp.home.title
        }}
      />

      {/* sessão about */}
      <div style={{ height: "100px", backgroundColor: "lightblue" }}>
        sessão about
      </div>

      {/* sessão donations (Doações Mobilizadas) */}
      <DonateSection
        title={DStemp.title}
        subtitle={DStemp.subtitle}
        description={DStemp.description}
        milestones={DStemp.milestones}
        mediaAutoplay={true}
        media={Mediatemp}
      />

      {/* sessão newsletter */}
      <Newsletter
        background={NLtemp.background}
        title={NLtemp.title}
        placeholder={NLtemp.placeholder}
        logo={NLtemp.logo}
        textLogo={NLtemp.textLogo}
      />
    </Base>
  )
}

export default Home
