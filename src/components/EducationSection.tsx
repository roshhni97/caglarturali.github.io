import { useContext } from 'react';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { ResumeContext } from 'src/contexts/ResumeContext';
import { formatDateRange } from 'src/utils/date';
import PrimarySectionWidget from 'src/widgets/PrimarySectionWidget';
import type { PrimarySectionWidgetProps } from 'src/widgets/PrimarySectionWidget';

export default function EducationSection() {
  const { education } = useContext(ResumeContext);

  function formatStudyMeta(studyType: string, score: string) {
    const parts = [studyType, score];
    return parts.filter((p) => p.length > 0).join(' / ');
  }

  const data: PrimarySectionWidgetProps = {
    title: 'Education',
    items: education.map(
      ({ area, studyType, institution, url, courses, score, ...dates }) => {
        return {
          title: area,
          subtitles: [
            formatStudyMeta(studyType, score),
            { text: institution, href: url },
          ],
          textRight: formatDateRange(dates.startDate, dates.endDate),
          icon: faGraduationCap,
          sublist: {
            title: 'Notable Courses',
            items: courses,
          },
        };
      },
    ),
  };

  return <PrimarySectionWidget {...data} />;
}
