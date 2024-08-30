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
      <div className="bg-highlight text-center text-paragraph font-bold leading-tight text-white md:text-h3">
        <p className="container py-container">
          Procuramos organizações parceiras, dispostas a contribuir com todas as
          etapas de reconstrução do Rio Grande do Sul para somar junto com a
          Resgate+ no desenvolvimento dos nossos projetos.
        </p>
      </div>
      <Newsletter bgUrl={newsletterData.bgUrl} />
    </Base>
  )
}

export default Home
