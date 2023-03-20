import { useSelector } from "react-redux";

const useUserID = () => {
  const { user } = useSelector(state => state.auth);
  const userID = user?.userID || '';
	return { userID };
}

export default useUserID
