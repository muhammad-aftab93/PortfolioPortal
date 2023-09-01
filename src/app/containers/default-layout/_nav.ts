import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Resume'
  },
  {
    name: 'Resume',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Add Resume',
        url: '/resume/add'
      },
    ]
  },
];
