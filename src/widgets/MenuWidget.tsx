import { useContext } from 'react';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuContext } from 'contexts/MenuContext';

export const icons = {
  open: faBars,
  close: faClose,
};

export default function MenuWidget() {
  const { isOpen, toggleOpen } = useContext(MenuContext);
  const icon = isOpen ? icons.close : icons.open;

  return (
    <button
      onClick={toggleOpen}
      className="absolute left-4 top-4 z-50 p-2 sm:hidden"
    >
      <FontAwesomeIcon icon={icon} size="2x" opacity={0.8} />
    </button>
  );
}
