import Hero from "@/components/Hero"
import Newsletter from "@/components/Newsletter"
import SectionAbout from "@/components/SectionAbout"
import DonateSection from "@/components/SectionDonate"
import {
  Abouttemp,
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
        bgUrl={Herotemp.bgHero.src}
        home={{
          logo: Herotemp.home.logo,
          title: Herotemp.home.title
        }}
      />

      {/* sessão about */}
      <SectionAbout
        title={Abouttemp.title}
        content={Abouttemp.content}
        label={Abouttemp.label}
        QrCode={Abouttemp.QrCode}
        image={Abouttemp.image}
        cards={Abouttemp.cards}
      />

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
