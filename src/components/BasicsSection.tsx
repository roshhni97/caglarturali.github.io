import { useContext } from 'react';
import { ResumeContext } from 'src/contexts/ResumeContext';
import {
  faArrowPointer,
  faEnvelope,
  faMapMarker,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BasicsSection() {
  const {
    basics: { name, label, image, phone, email, url, location },
  } = useContext(ResumeContext);

  const locationStr = `${location.city}, ${location.countryCode}`;
  const contactInfo = [
    {
      text: phone,
      href: `tel:${phone}`,
      icon: faPhone,
      classes: 'blur-sm hover:blur-none print:blur-none transition',
    },
    {
      text: email,
      href: `mailto:${email}`,
      icon: faEnvelope,
    },
    {
      text: url,
      href: url,
      icon: faArrowPointer,
    },
    {
      text: locationStr,
      href: `https://maps.google.com/?q=${encodeURIComponent(locationStr)}`,
      icon: faMapMarker,
    },
  ];

  function softClick(href: string) {
    const el = document.createElement('a');
    el.href = href;
    el.click();
    el.remove();
  }

  return (
    <section className="flex flex-row">
      <div className="w-60 flex justify-center">
        <img
          src={image || 'https://placehold.co/200'}
          alt="profile picture"
          className="w-28 h-28 rounded-full"
        />
      </div>
      <div className="w-full flex flex-row justify-between items-end">
        <div className="">
          <h1 className="font-sans-narrow text-4xl pb-2">{name}</h1>
          <h2 className="font-mono font-light text-2xl">{label}</h2>
        </div>
        <div className="font-light text-sm text-right">
          <ul>
            {contactInfo.map(({ href, text, icon, classes }) => (
              <li key={href} className="mt-2">
                <a
                  href="#"
                  className={`${classes} select-none`}
                  onClick={() => softClick(href)}
                >
                  {text}
                </a>
                <FontAwesomeIcon icon={icon} className="pl-2" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
