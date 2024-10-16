import { useContext } from 'react';
import { ResumeContext } from 'contexts/ResumeContext';

export default function SummarySection() {
  const {
    basics: { summary },
  } = useContext(ResumeContext);

  return <section>{summary}</section>;
}
