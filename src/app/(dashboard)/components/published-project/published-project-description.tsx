import React from "react";

export default function PublishedProjectDescription({
	description,
}: {
	description: string;
}) {
	return (
		<>
			<label className='text-xl font-semibold shrink-0' htmlFor='title'>
				Project Description
			</label>
			<p>{description}</p>
		</>
	);
}
