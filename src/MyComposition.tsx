import {useVideoConfig} from 'remotion';
import {z} from 'zod';
import {NewsUpdateDisplay} from './NewsUpdateDisplay';

export const myCompositionSchema = z.object({
	
});

export const MyComposition: React.FC<z.infer<typeof myCompositionSchema>> = ({
	
}) => {
	const {width, height} = useVideoConfig();

	return (
		<div
			style={{
				gap: '40px',
				position: 'absolute',
				top: 0,
				left: 0,
				width: width,
				height: height,
			}}
		>
			<NewsUpdateDisplay />
		</div>
	);
};
