import styles from './TextBubbleContainer.module.css';

export default function TextBubbleContainer({ children }) {
	return <div className={styles.TextBubbleContainer}>{children}</div>;
}
