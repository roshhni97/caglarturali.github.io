import AwardsSection from 'src/components/AwardsSection';
import BasicsSection from 'src/components/BasicsSection';
import EducationSection from 'src/components/EducationSection';
import ProfilesSection from 'src/components/ProfilesSection';
import ProjectsSection from 'src/components/ProjectsSection';
import PublicationsSection from 'src/components/PublicationsSection';
import SummarySection from 'src/components/SummarySection';
import VolunteerSection from 'src/components/VolunteerSection';
import WorkSection from 'src/components/WorkSection';

export default function CurriculumVitae() {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 text-gray-900 dark:text-gray-100 w-full min-h-screen">
      <main className="container mx-auto">
        <div className="border-b-2 border-dashed border-gray-400 py-8">
          <BasicsSection />
        </div>
        <div className="flex flex-row py-6">
          <aside className="w-60 font-light">
            <ProfilesSection />
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
