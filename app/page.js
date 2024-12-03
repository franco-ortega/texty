import Image from 'next/image';
import styles from './page.module.css';
import TextBubble from './components/textBubble/TextBubble';

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<h2>Hello, Text Bubble</h2>
				<section>
					<TextBubble />
				</section>
			</main>
		</div>
	);
}
