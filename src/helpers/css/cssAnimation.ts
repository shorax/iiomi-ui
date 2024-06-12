import {IComplexCSSProperties, ISimpleCSS} from './css';

type IFillMode =
	'none'
	| 'forwards'
	| 'backwards'
	| 'both'
	| 'auto'
	| 'initial'
	| 'inherit'
	| 'unset'
	| 'revert'
	| 'revert-layer';

export interface ICssAnimationProps<IRuleProps> {
	name: string,
	keyframes: IComplexCSSProperties<IRuleProps>,
	duration?: number,
	fill?: IFillMode,
	delay?: number,
	iterationCount?: 'infinite' | number,
}

export default function cssAnimation<IRuleProps>(props: ICssAnimationProps<IRuleProps>) {
	let animationSettings = {
		animationName: '$' + props.name,
		animationDelay: (props.delay ?? 0) + 'ms',
		animationDuration: (props.duration ?? 0) + 'ms',
		animationFillMode: props.fill ?? 'forwards',
		animationIterationCount: (props.iterationCount ?? 1) + '',
	};

	return {
		props: animationSettings,
		keyframes: {
			[`@keyframes ${props.name}`]: props.keyframes,
		}
	};
}

type IAnimationName = string;

export function cssCombineAnimations<IRuleProps>(...animations: {props: ISimpleCSS, keyframes: Record<IAnimationName, IComplexCSSProperties<IRuleProps>>}[]) {

	let keyframes: Record<IAnimationName, IComplexCSSProperties<IRuleProps>> = {};

	animations.forEach(animation => {
		Object.keys(animation.keyframes).forEach((key: string) => {
			keyframes[key] = (animation.keyframes as any)[key];
		});
	});

	return {
		props: {
			animationName: animations.map(a => a.props.animationName).join(', '),
			animationDelay: animations.map(a => a.props.animationDelay).join(', '),
			animationDuration: animations.map(a => a.props.animationDuration).join(', '),
			animationFillMode: animations.map(a => a.props.animationFillMode).join(', '),
			animationIterationCount: animations.map(a => a.props.animationIterationCount).join(', '),
		},
		keyframes: keyframes,
	};
}

