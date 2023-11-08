import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import '../font.css';

export const myTextSchema = z.object({
	titleTexts: z.string(),
	titleColor: zColor(),
});


export const Text: React.FC<z.infer<typeof myTextSchema>> = ({
	titleTexts,
	titleColor,
}) => {
	return (
		<div style={{position: 'absolute', bottom: '1%', paddingLeft: '50px'}}>
			<p
				style={{
					color: titleColor,
					fontSize: '120px',
					textAlign: 'left',
					width: '80%',
					fontFamily: 'Agbalumo',
				}}
			>
				{titleTexts}
			</p>
		</div>
	);
};
