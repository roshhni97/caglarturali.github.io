import { createContext, PropsWithChildren } from 'react';
import { ResumeResponse } from 'src/api/fetchResumeData';
import useResumeData from 'src/hooks/useResumeData';

export const ResumeContext = createContext<ResumeResponse | undefined>(
  undefined,
);

export const ResumeProvider = ({ children }: PropsWithChildren) => {
  const { data: resumeData } = useResumeData();
  return (
    <ResumeContext.Provider value={resumeData}>
      {children}
    </ResumeContext.Provider>
  );
};
