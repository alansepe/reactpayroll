import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'Colors',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Payroll Files',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Employees',
        to: '/base/employees',
      },
      {
        component: CNavItem,
        name: 'SSS Table',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'HDMF Tables',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Philhealth Tables',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Departments',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'Users',
        to: '/base/tablesacs',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Transactions',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Payroll Transactions',
        to: '/buttons/paytrans',
      },
      {
        component: CNavItem,
        name: 'Cash Advances',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'SSS Dedeuctions',
        to: '/buttons/dropdowns',
      },
      {
        component: CNavItem,
        name: 'HDMF Dedeuctions',
        to: '/buttons/dropdowns',
      },
      {
        component: CNavItem,
        name: 'PhilHealth Dedeuctions',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Reports',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Payroll Summary',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Payroll Summary1',
        to: '/reports/report-control',
      },
      {
        component: CNavItem,
        name: 'Payslip',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'SSS Monthly Remittance',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'HDMF Monthly Remittance',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Philhealth Monthly Remittance',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Cash Advance Monthly Summary Report',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Monthly Late Summary',
        to: '/forms/layout',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Utilities',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'User Maintenance',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'Online Documentation',
        to: '/icons/flags',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Human Resource',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Employees Detailed Info',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Salary Rate History',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Written Warnings',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Employees Performance Review',
        to: '/notifications/toasts',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },

]

export default _nav
