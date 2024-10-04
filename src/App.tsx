import { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ResumeProvider } from 'src/contexts/ResumeContext';
import LoadingWidget from 'src/widgets/LoadingWidget';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

const CurriculumVitae = lazy(() => import('src/views/CurriculumVitae'));

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ResumeProvider>
        <Suspense fallback={<LoadingWidget />}>
          <CurriculumVitae />
        </Suspense>
      </ResumeProvider>
    </QueryClientProvider>
  );
}
