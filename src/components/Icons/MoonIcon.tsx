import React from 'react';

export default function MoonIcon(props: { className?: string }) {
	return <svg 
		className={props.className}
		viewBox={'0 0 24 24'}
		fill={'none'}
	>
		<path
			d={'M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z'}
			strokeLinecap={'round'}
			strokeLinejoin={'round'}
			strokeWidth={1.5}
			stroke={'currentColor'}
		/>
	</svg>;
}