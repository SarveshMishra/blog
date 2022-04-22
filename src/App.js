import { Compose } from "./components/Compose";
import { Navbar } from "./components/Navbar";
import { ShowPost } from "./components/ShowPost";
function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Compose></Compose>
			<ShowPost></ShowPost>
		</div>
	);
}

export default App;
