import { createContext, PropsWithChildren } from 'react';
import type { Resume } from 'src/types/Resume';
import resumeJson from 'data/resume.json';

export const ResumeContext = createContext<Resume>({} as Resume);

export const ResumeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ResumeContext.Provider value={resumeJson}>
      {children}
    </ResumeContext.Provider>
  );
};
