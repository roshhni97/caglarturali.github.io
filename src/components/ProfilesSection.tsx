import { useContext } from 'react';
import {
  faGithub,
  faLinkedin,
  faSoundcloud,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ResumeContext } from 'src/contexts/ResumeContext';

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
          <li key={url} className="pb-3">
            <a href={url}>
              <span className="inline-block w-6">
                <FontAwesomeIcon
                  icon={networkIconMap[network.toLowerCase()] || faUserCircle}
                />
              </span>
              <span>{username}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
