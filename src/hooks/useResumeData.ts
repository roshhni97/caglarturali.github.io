import { useSuspenseQuery } from '@tanstack/react-query';
import type { Resume } from 'src/types/Resume';

async function fetchResumeData(): Promise<Resume> {
  const response = await fetch('/resume.json');
  if (!response.ok) {
    throw new Error('Failed to fetch resume data');
  }
  return response.json();
}

export function useResumeData() {
  return useSuspenseQuery({
    queryKey: ['resumeData'],
    queryFn: fetchResumeData,
  });
}
