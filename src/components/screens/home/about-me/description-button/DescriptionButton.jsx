import {useOutside} from "../../../../../hooks/hooks";
import styles from './DescriptionButton.module.scss'

const DescriptionButton = ({text}) => {
	const {show, setShow, ref} = useOutside(false)
	
	return (
		<div className={styles.block} ref={ref}>
			<button className={show ? styles.active : ''} onClick={() => setShow(!show)}>
				<span>Обо мне</span>
			</button>
			{show && <article>{text}</article>}
		</div>
	)
};

export default DescriptionButton