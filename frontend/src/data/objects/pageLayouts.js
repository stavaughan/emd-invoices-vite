const pageLayouts = [
  {
    _id: "invoices",
    type: "listing",
    section: {
      allItems: {
        tableCollumns: [
          {
            id: 'Sent',
            width: 'text-center'
          },
          {
            id: 'Number'
          },
          {
            id: 'Customer'
          },
          {
            id: 'Total',
            width: "text-end"
          },
          {
            id: 'Due',
            width: 'text-end'
          },
          {
            id: 'Status',
          },
          {
            id: 'Created',
          },
          {
            id: 'Due Date'
          },
          {
            id: 'action',
            width: 'text-center'
          }
        ]
      },
      selectedItem: {}
    }
  }
];

export default pageLayouts;
