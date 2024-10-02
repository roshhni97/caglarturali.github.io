import AwardsSection from 'src/components/AwardsSection';
import BasicsSection from 'src/components/BasicsSection';
import EducationSection from 'src/components/EducationSection';
import InterestsSection from 'src/components/InterestsSection';
import LanguagesSection from 'src/components/LanguagesSection';
import ProfilesSection from 'src/components/ProfilesSection';
import ProjectsSection from 'src/components/ProjectsSection';
import PublicationsSection from 'src/components/PublicationsSection';
import SkillsSection from 'src/components/SkillsSection';
import SummarySection from 'src/components/SummarySection';
import VolunteerSection from 'src/components/VolunteerSection';
import WorkSection from 'src/components/WorkSection';

export default function CurriculumVitae() {
  return (
    <div className="min-h-screen w-full bg-neutral-100 text-gray-900 dark:bg-neutral-900 dark:text-gray-100">
      <main className="container mx-auto">
        <div className="border-b-2 border-dashed border-gray-400 py-8">
          <BasicsSection />
        </div>
        <div className="flex flex-row py-6">
          <aside className="w-60 space-y-8 text-sm font-light">
            <ProfilesSection />
            <SkillsSection />
            <LanguagesSection />
            <InterestsSection />
          </aside>
          <div className="w-full space-y-10">
            <SummarySection />
            <WorkSection />
            <EducationSection />
            <VolunteerSection />
            <AwardsSection />
            <PublicationsSection />
            <ProjectsSection />
          </div>
        </div>
      </main>
    </div>
  );
}
