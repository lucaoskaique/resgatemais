import Newsletter from "@/components/Newsletter"
import SectionAbout from "@/components/SectionAbout"
import DonateSection from "@/components/SectionDonate"
import { donateSectionData, newsletterData, sectionAboutData } from "@/mock"

import Base from "../Base"

const Home = () => {
  return (
    <Base>
      <SectionAbout
        title={sectionAboutData.title}
        content={sectionAboutData.content}
        label={sectionAboutData.label}
        QrCode={sectionAboutData.QrCode}
        image={sectionAboutData.image}
        cards={sectionAboutData.cards}
      />

      <DonateSection
        title={donateSectionData.title}
        subtitle={donateSectionData.subtitle}
        description={donateSectionData.description}
        milestones={donateSectionData.milestones}
        mediaAutoplay={true}
        media={donateSectionData.media}
      />
      <div className="bg-highlight text-white">
        <p className="container py-container text-center text-paragraph leading-tight">
          Procuramos organizações parceiras, dispostas a contribuir com todas as
          etapas de reconstrução do Rio Grande do Sul para somar junto com a
          Resgate+ no desenvolvimento dos nossos projetos.
        </p>
      </div>
      <Newsletter
        background={newsletterData.background}
        title={newsletterData.title}
        placeholder={newsletterData.placeholder}
        logo={newsletterData.logo}
        textLogo={newsletterData.textLogo}
      />
    </Base>
  )
}

export default Home
