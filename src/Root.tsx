import {Composition} from 'remotion';
import {MyComposition, myCompositionSchema} from './MyComposition';
import { myCompositionSchema2 } from './image_update/ImageComposition';
import {ImageComposition} from './image_update/ImageComposition'


export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComponent"
				component={MyComposition}
				durationInFrames={810}
				fps={30}
				width={1080}
				height={1920}
				schema={myCompositionSchema}
				defaultProps={{
					titleTexts: [
						'Balancer Exploit Results in $900K stolen from LPs',
						'The Team warned about the bug 5 days prior',
						'Record 1 million ETH burned since the start of this year',
						'Uniswap fees alone made for 50% of the burn',
						'Grayscale wins against the sec in court',
					],
					titleColor: '#ffff',
				    logoPaths: ['google_1.png', 'grayscale_1.png'],
				}}
			/>
			{/**/}
			<Composition
				id="OnlyImage"
				component={ImageComposition}
				durationInFrames={150}
				fps={30}
				width={1080}
				height={1920}
				schema={myCompositionSchema2}
				defaultProps={{
					titleTexts: 'Ethereum and cryptocurrency price shakeup predicted amid Merge',
					titleColor: 'black',
				}}
			/>
		</>
	);
};
