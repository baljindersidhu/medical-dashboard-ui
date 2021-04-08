import 'remixicon/fonts/remixicon.css';
import './App.css';

import Dashboard from './components/dashboard/Dashboard';
import Sidenav from './components/sidenav/Sidenav';

function App() {
	return (
		<div className="Row App">
			<Dashboard />
			<Sidenav />
		</div>
	);
}

export default App;
