import FrontPage from './basicPages/FrontPage';



import Contact from './basicPages/Contact';
import About from './basicPages/About';
import Services from './basicPages/Services';


import Dashboard from './Admin/Dashboard';

import Programming from './Articles/Programming';
import ProgrammingSingle from './Articles/ProgrammingSingle';

export const view = {
	FrontPage: FrontPage,
	Admin: {
		dashboard: Dashboard
	},
	Articles: {
		Programming: {
			index: Programming,
			single: ProgrammingSingle
		}
	},
	Public: {
		contact: Contact,
		about: About,
		services: Services
	}
};