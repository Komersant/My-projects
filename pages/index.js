import axios from "axios";
import {TEST_URL} from "../src/constants";
import Home from "../src/components/screens/home/Home";

export const getStaticProps = async () => {
	const {data: links} = await axios.get(`${TEST_URL}/links`);
	const {data: me} = await axios.get(`${TEST_URL}/me`);
	const {data: socials} = await axios.get(`${TEST_URL}/socials`);
	
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

