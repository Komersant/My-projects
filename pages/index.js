import axios from "axios";
import {API_URL} from "../src/constants";
import Home from "../src/components/screens/home/Home";

export const getStaticProps = async () => {
	const {data: links} = await axios.get(`${API_URL}/links`);
	const {data: me} = await axios.get(`${API_URL}/me`);
	const {data: socials} = await axios.get(`${API_URL}/socials`);
	
	return {
		props: {
			links, me, socials
		}
	}
	
}

const HomePage = (props) => {
	return (
		<Home {...props}/>
	)
}

export default HomePage

