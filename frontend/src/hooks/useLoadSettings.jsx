import React, { useEffect } from "react";
import { getSettings } from '@/features/settings/settingsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { statusCodes } from '@/features/sliceData';
import { toast } from "react-toastify";

const useLoadSettings = () => {

	const dispatch = useDispatch()

	const slice = useSelector((state) => state.settings);

	useEffect(() => {
		if (slice?.isError) {
			if (Object.values(statusCodes).includes(slice?.message)) {
				toast.error(`Settings data cannot be fetched at this time due to server error. Please try again later.`, {
					toastId: `onloadsettingserror`,
					position: 'top-center'
				})
			} else {
				toast.error(slice?.message, {
					toastId: `onloadsettings`,
					position: 'top-center'
				})
			}
		} else {
			dispatch(getSettings())
		}
    // eslint-disable-next-line
	}, [])

	return { ...slice }
}

export default useLoadSettings
