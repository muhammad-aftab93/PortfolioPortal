import {INavData} from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/',
    iconComponent: {name: 'cil-speedometer'},
  },
  {
    title: true,
    name: 'Resume'
  },
  {
    name: 'Resume',
    iconComponent: {name: 'cil-puzzle'},
    children: [
      {
        name: 'Personal Details',
        url: '/resume/personal-details'
      },
    ]
  },
];
