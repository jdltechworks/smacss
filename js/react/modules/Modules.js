import FrontPage from './basicPages/FrontPage';
import Dashboard from './Admin/Dashboard';
import Programming from './Articles/Programming';

export const view = {
	FrontPage: FrontPage,
	Admin: {
		dashboard: Dashboard
	},
	Articles: {
		Programming: {
			index: Programming
		}
	}
};