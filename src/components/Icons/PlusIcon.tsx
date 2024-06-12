import React from 'react';

export default function PlusIcon(props: { className?: string }) {
	return <svg
		className={props.className}
		viewBox={'0 0 24 24'}
	>
		<path
			d={'M6 12H12M18 12H12M12 12V6M12 12V18'}
			strokeLinecap={'round'}
			strokeLinejoin={'round'}
			strokeWidth={1.5}
			stroke={'currentColor'}
		/>
	</svg>;
}
