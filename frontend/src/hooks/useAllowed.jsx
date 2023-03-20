import { useSelector } from "react-redux";

const useAllowed = () => {

    const { user } = useSelector(state => state.auth);
    const access = user?.access || '';
    return { allowed: access === 'admin' }
}

export default useAllowed
