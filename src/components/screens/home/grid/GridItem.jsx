import Image from "next/image";
import styles from "./Grid.module.scss"
import {APP_URL} from "../../../../constants";

const GridItem = ({item}) => {
	return (
		<a href={item.link} rel='noreferrer' target="_blank" className={styles.gridItem}>
			<div>
				<Image src={`${APP_URL}${item.icon}`} width={100} height={100} alt="img"/>
			</div>
			<div>{item.title}</div>
		</a>
	);
};

export default GridItem