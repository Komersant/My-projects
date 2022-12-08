import styles from './Grid.module.scss'
import GridItem from "./GridItem";

const Grid = ({links}) => {
	return (
		<div className={styles.grid}>
			<div className={styles.h1}>Мои проэкты</div>
			<div className={styles.wrapper}>
				{links.map((link, id) => <GridItem key={id} item={link}/>)}
			</div>
		</div>
	);
};

export default Grid