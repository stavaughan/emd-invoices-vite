const dropDownLabels = {
  siteDDLabels: [
    {
      _id: 'invoices',
      label: 'Business Income'
    }
  ],
  userDDdata: [
    {
      pid: 'admin',
      path: 'admin',
      icon: 'user-cog',
      label: 'Admin',
      access: 'admin'
    },
    {
      pid: 'usersettings',
      path: 'user-settings',
      icon: 'cog',
      label: 'Settings',
      access: 'read'
    },
    {
      pid: 'userprofile',
      path: 'user-profile',
      icon: 'user',
      label: 'User Profile',
      access: 'read'
    }
  ]
};

export default dropDownLabels;
