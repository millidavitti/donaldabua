"use client";

export default function Overlay() {
	return (
		<>
			<div
				className='inset-0 bg-light-surface-on-surface/15 backdrop-blur-md z-20 data-[is-shown=true]:fixed data-[is-shown=false]:hidden'
				id='overlay'
				data-is-shown={false}
			></div>
		</>
	);
}
