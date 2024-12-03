import styles from './TextBubble.module.css';

export default function TextBubble({ text }) {
	return <div className={styles.TextBubble}>{text}</div>;
}
