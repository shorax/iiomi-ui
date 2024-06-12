import React from 'react';

export default function TrashIcon(props: { className?: string, variant?: 'default' | 'solid' }) {
	return <svg
		className={props.className}
		viewBox={'0 0 24 24'}
		fill={'none'}
	>
		{props.variant === 'solid' ?
			<>
				<path
					d={'M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9'}
					strokeLinecap={'round'}
					strokeLinejoin={'round'}
					strokeWidth={1.5}
					stroke={'currentColor'}
				/>
				<path
					d={'M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9H20Z'}
					strokeLinecap={'round'}
					strokeLinejoin={'round'}
					strokeWidth={1.5}
					stroke={'currentColor'}
				/>
				<path
					d={'M21 6H15.375M3 6H8.625M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6H15.375'}
					strokeLinecap={'round'}
					strokeLinejoin={'round'}
					strokeWidth={1.5}
					stroke={'currentColor'}
				/>
			</>	: <>
				<path
					d={'M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9'}
					strokeLinecap={'round'}
					strokeLinejoin={'round'}
					strokeWidth={1.5}
					stroke={'currentColor'}
				/>
				<path
					d={'M21 6L15.375 6M3 6L8.625 6M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6L15.375 6'}
				strokeLinecap={'round'}
				strokeLinejoin={'round'}
				strokeWidth={1.5}
				stroke={'currentColor'}
			/>
		</>
		}
	</svg>;
}
