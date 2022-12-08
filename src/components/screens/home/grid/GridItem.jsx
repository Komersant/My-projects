import Image from "next/image";
import styles from "./Grid.module.scss"

const GridItem = ({item}) => {
	return (
		<a href={item.link} rel='noreferrer' target="_blank" className={styles.gridItem}>
			<div>
				<Image src={item.icon} width={100} height={100} alt="img"/>
			</div>
			<div>{item.title}</div>
		</a>
	);
};

export default GridItem