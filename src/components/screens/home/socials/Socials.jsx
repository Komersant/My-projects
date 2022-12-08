import Social from "./Social";
import styles from './Socials.module.scss'

const Socials = ({socials}) => {
	return (
		<div className={styles.socials}>
			{socials.map((social, id) => <Social key={id} item={social}/>)}
		</div>
	);
};

export default Socials