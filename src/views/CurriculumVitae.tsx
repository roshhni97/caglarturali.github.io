import { useContext } from 'react';
import AwardsSection from 'src/components/AwardsSection';
import BasicsSection from 'src/components/BasicsSection';
import CertificatesSection from 'src/components/CertificatesSection';
import EducationSection from 'src/components/EducationSection';
import InterestsSection from 'src/components/InterestsSection';
import LanguagesSection from 'src/components/LanguagesSection';
import ProfilesSection from 'src/components/ProfilesSection';
import ProjectsSection from 'src/components/ProjectsSection';
import PublicationsSection from 'src/components/PublicationsSection';
import ReferencesSection from 'src/components/ReferencesSection';
import SkillsSection from 'src/components/SkillsSection';
import SummarySection from 'src/components/SummarySection';
import VolunteerSection from 'src/components/VolunteerSection';
import WorkSection from 'src/components/WorkSection';
import { MenuContext } from 'src/contexts/MenuContext';
import MenuWidget from 'src/widgets/MenuWidget';

export default function CurriculumVitae() {
  const { menuStyle, restStyle } = useContext(MenuContext);

  return (
    <div className="min-h-screen w-full">
      <MenuWidget />
      <main className="container mx-auto px-6 pb-60 lg:px-0">
        <div
          className="border-b-2 border-dashed border-gray-400 py-6 lg:py-8"
          style={restStyle}
        >
          <BasicsSection />
        </div>
        <div className="flex flex-col pt-6 lg:flex-row">
          <aside
            className="hidden w-full space-y-8 font-light lg:block lg:w-60 lg:text-sm"
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
          </div>
        </div>
      </main>
    </div>
  );
}
