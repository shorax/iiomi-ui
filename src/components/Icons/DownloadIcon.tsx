import React from 'react';

export default function DownloadIcon(props: { className?: string }) {
	return <svg
		className={props.className}
		viewBox={'0 0 24 24'}
		fill={'none'}
	>
		<path
			d={'M6 20L18 20'}
			strokeLinecap={'round'}
			strokeLinejoin={'round'}
			strokeWidth={1.5}
			stroke={'currentColor'}
		/>
		<path
			d={'M12 4V16M12 16L15.5 12.5M12 16L8.5 12.5'}
			strokeLinecap={'round'}
			strokeLinejoin={'round'}
			strokeWidth={1.5}
			stroke={'currentColor'}
		/>
	</svg>;
}
