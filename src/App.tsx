import { ResumeProvider } from './contexts/ResumeContext';
import CurriculumVitae from './views/CurriculumVitae';

export function App() {
  return (
    <ResumeProvider>
      <CurriculumVitae />
    </ResumeProvider>
  );
}
