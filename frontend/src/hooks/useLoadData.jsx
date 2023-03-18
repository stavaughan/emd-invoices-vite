import { useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { sliceData } from '@/features';
import { statusCodes } from '@/features/sliceData';
import { toast } from "react-toastify";
import { Global } from "@/globals/js";

const useLoadData = ({ dataName }) => {

	const action = useMemo(() => sliceData.find(_ => _.id === dataName), [dataName])

	const dispatch = useDispatch()

	const slice = useSelector((state) => state[dataName]);

  const launchErrorToast = useCallback(() => {
    if (Object.values(statusCodes).includes(slice?.message)) {
      toast.error(`${Global.upperCaseFirst(dataName)} data cannot be fetched at this time due to server error. Please try again later.`, {
        toastId: `nocollection${dataName}`,
        position: 'top-center'
      })
    } else {
      toast.error(slice?.message, {
        toastId: `onload${dataName}`,
        position: 'top-center'
      })
    }
  }, []);

	useEffect(() => {
		if (slice?.isError) {
			launchErrorToast();
		} else {
			dispatch(action.get())
		}
		// eslint-disable-next-line
	}, [])

	return { ...slice }

}

export default useLoadData
