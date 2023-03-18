import { Link } from 'react-router-dom';
import { LinkOrModal } from '.';

const FooterLink = ({ link, userID }) => {

  return (
    <div key={link.label} className="px-4 py-2">
      {link?.path ? (
        <Link
          to={link?.user ? `/${userID}/${link.path}` : `/${link.path}`}
          className="text-sm text-gray-300-hover"
        >
          {link.label}
        </Link>
      ) : <LinkOrModal link={link} />}
    </div>
  )
}

export default FooterLink
