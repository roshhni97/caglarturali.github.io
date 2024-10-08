import { useContext } from 'react';
import {
  faGithub,
  faLinkedin,
  faSoundcloud,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { ResumeContext } from 'src/contexts/ResumeContext';
import IconLinkWidget from 'src/widgets/IconLinkWidget';

const networkIconMap = {
  github: faGithub,
  linkedin: faLinkedin,
  twitter: faTwitter,
  soundcloud: faSoundcloud,
};

export default function ProfilesSection() {
  const {
    basics: { profiles },
  } = useContext(ResumeContext);

  return (
    <section>
      <ul>
        {profiles.map(({ network, url, username }) => (
          <li key={url} className="pb-2">
            <IconLinkWidget
              text={username}
              target={url}
              title={network}
              icon={networkIconMap[network.toLowerCase()] || faUserCircle}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
