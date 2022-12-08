import styles from './Socials.module.scss'
import Image from "next/image";
import {APP_URL} from "../../../../constants";

const Social = ({item}) => {
	return (
		<a href={item.link} rel='noreferrer' target="_blank" className={styles.socialItem}>
			<Image className={styles.img} src={`${APP_URL}${item.icon}`} width={30} height={30} alt="img"/>
			<div className={styles.title}>{item.title}</div>
		</a>
	);
};

export default Social