import Head from "next/head";

const Layout = ({title, description}) => {
	return (
		<Head>
			<title>{title || "Home"}</title>
			<meta name="description" content={description || "My portfolio on Next-js"}/>
			<meta property="og:description" content={description || "My portfolio on Next-js"}/>
		</Head>
	);
};

export default Layout