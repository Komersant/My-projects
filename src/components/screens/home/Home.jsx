import styles from './Home.module.scss'
import Layout from "../../ui/layout/Layout";
import AboutMe from "./about-me/AboutMe";
import Grid from "./grid/Grid";
import Socials from "./socials/Socials";

const Home = ({links, me, socials}) => {
	return (
		<section>
			<Layout title="Главная"/>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<section className={styles.section}>
						<AboutMe me={me}/>
						<Socials socials={socials}/>
						<Grid links={links}/>
					</section>
				</div>
			</div>
		</section>
	);
};

export default Home