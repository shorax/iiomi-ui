import React from 'react';

export default function MinusIcon(props: { className?: string }) {
	return <svg
		className={props.className}
		viewBox={'0 0 24 24'}
	>
		<path
			d={'M6 12H18'}
			strokeLinecap={'round'}
			strokeLinejoin={'round'}
			strokeWidth={1.5}
			stroke={'currentColor'}
		/>
	</svg>;
}
