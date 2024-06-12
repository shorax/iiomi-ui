import React from 'react';

export default function ArrowIcon(props: { className?: string }) {
	return <svg
		className={props.className}
		viewBox={'0 0 24 24'}
		fill={'none'}
	>
		<path
			d={'M6 13L12 19L18 13'}
			strokeLinecap={'round'}
			strokeLinejoin={'round'}
			strokeWidth={1.5}
			stroke={'currentColor'}
		/>
		<path
			d={'M6 5L12 11L18 5'}
			strokeLinecap={'round'}
			strokeLinejoin={'round'}
			strokeWidth={1.5}
			stroke={'currentColor'}
		/>
	</svg>;
}
