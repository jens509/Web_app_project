import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import LayersIcon from '@mui/icons-material/Layers';
import WorkIcon from '@mui/icons-material/Work';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GradeIcon from '@mui/icons-material/Grade';
import SchoolIcon from '@mui/icons-material/School';

const navItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Employés', icon: <PeopleIcon />, path: '/employes' },
  { text: 'Directions Générales', icon: <BusinessIcon />, path: '/directions-generales' },
  { text: 'Structures', icon: <AccountTreeIcon />, path: '/structures' },
  { text: 'Coordinations', icon: <ApartmentIcon />, path: '/coordinations' },
  { text: 'Directions', icon: <BusinessIcon />, path: '/directions' },
  { text: 'Services', icon: <MeetingRoomIcon />, path: '/services' },
  { text: 'Sections', icon: <LayersIcon />, path: '/sections' },
  { text: 'BAC', icon: <ApartmentIcon />, path: '/bac' },
  { text: 'Postes', icon: <WorkIcon />, path: '/postes' },
  { text: 'Corps de métier', icon: <AssignmentIndIcon />, path: '/corps-metier' },
  { text: 'Types employés', icon: <AssignmentIndIcon />, path: '/type-employes' },
  { text: 'Salaires', icon: <MonetizationOnIcon />, path: '/salaires' },
  { text: 'Notes', icon: <GradeIcon />, path: '/notes' },
  { text: 'Niveaux d\'étude', icon: <SchoolIcon />, path: '/niveaux-etude' },
];
export default navItems;
