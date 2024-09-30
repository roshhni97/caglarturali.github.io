import { useContext } from 'react';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { ResumeContext } from 'src/contexts/ResumeContext';
import { formatDateRange } from 'src/utils/date';
import CollapsibleWidget from 'src/widgets/CollapsibleWidget';
import ListItemWidget from 'src/widgets/ListItemWidget';
import SimpleListWidget from 'src/widgets/SimpleListWidget';

export default function EducationSection() {
  const { education } = useContext(ResumeContext);
  if (education.length == 0) return null;

  function formatStudyMeta(studyType: string, score: string) {
    const parts = [studyType, score];
    return parts.filter((p) => p.length > 0).join(' / ');
  }

  return (
    <section>
      <CollapsibleWidget title="Education">
        <ul>
          {education.map(
            ({
              area,
              studyType,
              institution,
              url,
              courses,
              score,
              ...dates
            }) => (
              <li key={institution + area}>
                <ListItemWidget
                  title={area}
                  subtitles={[
                    formatStudyMeta(studyType, score),
                    { text: institution, href: url },
                  ]}
                  textRight={formatDateRange(dates.startDate, dates.endDate)}
                  icon={faGraduationCap}
                >
                  <SimpleListWidget title="Courses" items={courses} />
                </ListItemWidget>
              </li>
            ),
          )}
        </ul>
      </CollapsibleWidget>
    </section>
  );
}
