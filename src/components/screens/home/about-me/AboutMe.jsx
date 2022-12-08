import styles from './AboutMe.module.scss'
import DescriptionButton from "./description-button/DescriptionButton";
import EmailButton from "./email-button/EmailButton";
import Image from "next/image";

const AboutMe = ({me}) => {
	return (
		<div className={styles.me}>
			<div className={styles.imgWrapper}>
				<Image src="/avatar.jpg" width={150} height={150} className={styles.img} alt={me.title}
				       quality={100}/>
			</div>
			<div className={styles.heading}>
				<span>Евгений Кушнир</span>
			</div>
			<EmailButton/>
			<DescriptionButton {...me}/>
		</div>
	);
};

export default AboutMe