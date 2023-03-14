const inputSelectorValues = [
	{
		id: 'contacts',
		initCheckedState: {
			name: false,
			email: false,
			website: false,
			phones: false,
			venID: false,
			address: false,
			organization: false,
			role: false,
			group: false,
			notes: false
		},
		selectorfields: [
			['name', 'Contact Name'],
			['email', 'Contact Email'],
			['website', 'Contact Website'],
			['phones', 'Contact Phones'],
			['venID', 'Contact Vendor'],
			['address', 'Contact Addresses'],
			['organization', 'Contact Business'],
			['role', 'Contact Role'],
			['group', 'Contact Group'],
			['notes', 'Notes'],
		],
	}
];

export default inputSelectorValues;
