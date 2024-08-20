import DonateSection from "@/components/DonateSection"
import Newsletter from "@/components/Newsletter"
import { DStemp, Mediatemp, NLtemp } from "@/pages/api/(templates)/template"

import Base from "../Base"

const Home = () => {
  return (
    <Base>
      <section>
        {/* sessão hero - 100vh*/}
        <div style={{ height: "100vh", backgroundColor: "lightgreen" }}>
          sessão hero
        </div>
      </section>
      <section>
        {/* sessão about */}
        <div style={{ height: "100px", backgroundColor: "lightblue" }}>
          sessão about
        </div>
      </section>
      <section className="">
        {/* sessão donations (Doações Mobilizadas) */}
        <DonateSection
          title={DStemp.title}
          subtitle={DStemp.subtitle}
          description={DStemp.description}
          milestones={DStemp.milestones}
          mediaAutoplay={true}
          media={Mediatemp}
        />
      </section>
      <section>
        {/* sessão newsletter */}
        <Newsletter
          background={NLtemp.background}
          title={NLtemp.title}
          placeholder={NLtemp.placeholder}
          logo={NLtemp.logo}
          textLogo={NLtemp.textLogo}
        />
      </section>
    </Base>
  )
}

export default Home
