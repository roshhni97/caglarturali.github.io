import { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { ResumeProvider } from 'contexts/ResumeContext';
import LoadingView from 'views/LoadingView';
import ErrorView from 'views/ErrorView';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

const CurriculumVitae = lazy(() => import('views/CurriculumVitae'));

export function App() {
  return (
    <ErrorBoundary fallback={<ErrorView />}>
      <Suspense fallback={<LoadingView />}>
        <QueryClientProvider client={queryClient}>
          <ResumeProvider>
            <CurriculumVitae />
          </ResumeProvider>
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  );
}
