import React from "react";

export default function ProjectDescription({
	description,
}: {
	description: string;
}) {
	return (
		<>
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Description
			</label>
			<p>{description}</p>
		</>
	);
}
