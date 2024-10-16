import { useContext } from 'react';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { ResumeContext } from 'contexts/ResumeContext';
import { formatDateRange } from 'utils/date';
import PrimarySectionWidget from 'widgets/PrimarySectionWidget';
import type { PrimarySectionWidgetProps } from 'widgets/PrimarySectionWidget';

export default function ProjectsSection() {
  const { projects = [] } = useContext(ResumeContext);

  const data: PrimarySectionWidgetProps = {
    title: 'Projects',
    items: projects.map(
      ({
        name,
        description,
        url,
        roles,
        keywords,
        highlights,
        entity,
        ...rest
      }) => {
        return {
          title: { text: name, href: url },
          subtitles: [roles.join(', '), entity],
          textRight: formatDateRange(rest.startDate, rest.endDate),
          icon: faTools,
          content: description,
          sublist: {
            title: 'Highlights',
            items: highlights,
          },
          keywords: {
            items: keywords,
            search: 'github',
          },
        };
      },
    ),
  };

  return <PrimarySectionWidget {...data} />;
}
