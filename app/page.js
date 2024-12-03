import Image from 'next/image';
import styles from './page.module.css';
import TextBubble from './components/textBubble/TextBubble';
import TextBubbleContainer from './components/textBubbleContainer/TextBubbleContainer';

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<h2>Hello, Text Bubble</h2>
				<section>
					<TextBubbleContainer>
						<TextBubble text={'These are my words. Yay!!'} />
					</TextBubbleContainer>

					<TextBubbleContainer>
						<TextBubble text={'Good morning, sunshine.'} />
					</TextBubbleContainer>

					<TextBubbleContainer>
						<TextBubble text={'I love pudding :-D'} />
					</TextBubbleContainer>

					<TextBubbleContainer>
						<TextBubble
							text={
								'So much to say... So much to say... So much to say... So much to say... So much to say... '
							}
						/>
					</TextBubbleContainer>
				</section>
			</main>
		</div>
	);
}
