import { useState, useMemo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { sliceData } from '@/features';
import { inputSchemas } from '@/state';
import { useSelectorAlert } from '.';
import { Global } from '@/globals/js';

const { upperCaseFirst } = Global;

const useForm = ({ isUser, collection }) => {

	const dataID = useMemo(() =>
		['invoices', 'services'].includes(collection) ? 'invoicedata' : collection, [collection]);

	const dataKeys = useMemo(() => sliceData.find(_ => _.id === dataID), [dataID]);

	const dataValue = useCallback((collection, dataKey) => {
		if(!['invoices', 'services'].includes(collection)) return dataKeys[dataKey];
		return dataKeys[dataKey + upperCaseFirst(collection.replace(/.$/, ''))];
	}, [dataKeys]);

	const { schema, create } = useMemo(() => ({
		schema: dataValue(collection, 'schema'),
		create: dataValue(collection, 'create')
	}), [collection, dataValue]);

	const { user } = useSelector(state => state.auth);
	const userID = user !== null && !!user?._id ? user._id : '';
	const initialState = (isUser && !!userID) ? inputSchemas[schema](userID) : inputSchemas[schema];

	const { selector } = useSelectorAlert(dataID, 'New item successfully added.');

	const [clear, setClear] = useState(false);
	const [entering, setEntering] = useState(false);
	const [newItem, setNewItem] = useState(initialState);

	const clearForm = useCallback(() => setClear(true), [setClear]);

	useEffect(() => {
		if (clear) {
			let timer = setTimeout(() => {
				setEntering(false);
				setNewItem(initialState)
				setClear(false)
			}, 1000);
			return () => {
				clearTimeout(timer)
			};
		}
	}, [clear, initialState, setClear, setEntering, setNewItem]);

	return {
		newItem,
		setNewItem,
		clearForm,
		entering,
		setEntering,
		initialState,
		createSlice: create,
		selector,
		clear
	};
}

export default useForm;
