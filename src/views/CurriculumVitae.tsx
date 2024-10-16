import { useContext } from 'react';
import MetaSection from 'components/MetaSection';
import AwardsSection from 'components/AwardsSection';
import BasicsSection from 'components/BasicsSection';
import CertificatesSection from 'components/CertificatesSection';
import EducationSection from 'components/EducationSection';
import InterestsSection from 'components/InterestsSection';
import LanguagesSection from 'components/LanguagesSection';
import ProfilesSection from 'components/ProfilesSection';
import ProjectsSection from 'components/ProjectsSection';
import PublicationsSection from 'components/PublicationsSection';
import ReferencesSection from 'components/ReferencesSection';
import SkillsSection from 'components/SkillsSection';
import SummarySection from 'components/SummarySection';
import VolunteerSection from 'components/VolunteerSection';
import WorkSection from 'components/WorkSection';
import FooterSection from 'components/FooterSection';
import { MenuContext } from 'contexts/MenuContext';
import MenuWidget from 'widgets/MenuWidget';

export default function CurriculumVitae() {
  const { menuStyle, restStyle } = useContext(MenuContext);

  return (
    <div className="min-h-screen w-full">
      <MetaSection />
      <main className="container mx-auto px-6 pb-60 sm:px-0">
        <MenuWidget />
        <div
          className="border-b-2 border-dashed border-gray-400 py-6 sm:py-8"
          style={restStyle}
        >
          <BasicsSection />
        </div>
        <div className="flex flex-col pt-6 sm:flex-row">
          <aside
            className="hidden w-full space-y-8 pe-2 font-light sm:block sm:w-60 sm:text-sm"
            style={menuStyle}
          >
            <ProfilesSection />
            <SkillsSection />
            <LanguagesSection />
            <InterestsSection />
          </aside>
          <div className="w-full space-y-10" style={restStyle}>
            <SummarySection />
            <WorkSection />
            <EducationSection />
            <VolunteerSection />
            <AwardsSection />
            <CertificatesSection />
            <PublicationsSection />
            <ProjectsSection />
            <ReferencesSection />
            <FooterSection />
          </div>
        </div>
      </main>
    </div>
  );
}
