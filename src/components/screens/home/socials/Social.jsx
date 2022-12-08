import styles from './Socials.module.scss'
import Image from "next/image";

const Social = ({item}) => {
	return (
		<a href={item.link} rel='noreferrer' target="_blank" className={styles.socialItem}>
			<Image className={styles.img} src={item.icon} width={30} height={30} alt="img"/>
			<div className={styles.title}>{item.title}</div>
		</a>
	);
};

export default Social