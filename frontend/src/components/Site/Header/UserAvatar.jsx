import { useSelector } from 'react-redux';
import { UserAvatarSm } from '@/components/Gallery';

const UserAvatar = () => {

  const { user } = useSelector(state => state.auth);
  const avatarID = user?.avatarID || '';
  const userName = user?.userName || '';

    return (
        <span style={{
			letterSpacing: '.09rem',
			fontSize: 'inherit',
			fontWeight: 'inherit',
			color: 'inherit'
		}}>
            <UserAvatarSm avatarID={avatarID} />
            {userName}
        </span>
    )
}

export default UserAvatar
