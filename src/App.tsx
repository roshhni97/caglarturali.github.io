import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedditAlien } from '@fortawesome/free-brands-svg-icons';

export function App() {
  return (
    <>
      <FontAwesomeIcon icon={faRedditAlien} size="3x" />
      <h1 className="text-5xl inline">Hello world!</h1>
    </>
  );
}
