import styles from './EmailButton.module.scss'
import Image from "next/image";

const EmailButton = () => {
	return (
		<div className={styles.emailBtn}>
			<a href="mailto:kushnir.evgeniy2014@gmail.com" target="_blank" rel="noreferrer"
			   title="kushnir.evgeniy2014@gmail.com">
			<span>
				<Image className={styles.image} src="/icons/email.svg" alt="Картинка" width={25} height={25}/>
			</span>
				<span>Email</span>
			</a>
		</div>
	);
};

export default EmailButton