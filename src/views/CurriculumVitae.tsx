import { useContext } from 'react';
import { ResumeContext } from 'src/contexts/ResumeContext';

export default function CurriculumVitae() {
  const { basics } = useContext(ResumeContext);

  return (
    <div>
      <h1 className="text-5xl">Hello, {basics.name}!</h1>
    </div>
  );
}
