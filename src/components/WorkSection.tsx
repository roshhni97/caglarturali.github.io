import { useContext } from 'react';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { ResumeContext } from 'src/contexts/ResumeContext';
import { formatDateRange } from 'src/utils/date';
import CollapsibleWidget from 'src/widgets/CollapsibleWidget';
import ListItemWidget from 'src/widgets/ListItemWidget';
import SimpleListWidget from 'src/widgets/SimpleListWidget';

export default function WorkSection() {
  const { work } = useContext(ResumeContext);
  if (work.length == 0) return null;

  return (
    <section>
      <CollapsibleWidget title="Experience">
        <ul>
          {work.map(
            ({ position, name, url, summary, highlights, ...dates }) => (
              <li key={position + name}>
                <ListItemWidget
                  title={position}
                  subtitles={[{ text: name, href: url }]}
                  textRight={formatDateRange(dates.startDate, dates.endDate)}
                  icon={faBuilding}
                >
                  <div>{summary}</div>
                  <SimpleListWidget title="Highlights" items={highlights} />
                </ListItemWidget>
              </li>
            ),
          )}
        </ul>
      </CollapsibleWidget>
    </section>
  );
}
