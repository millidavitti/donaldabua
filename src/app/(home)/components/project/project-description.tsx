import React from "react";

export default function ProjectDescription({
	description,
}: {
	description: string;
}) {
	return (
		<>
			<h2 className='text-xl font-semibold shrink-0'>Project Description</h2>
			<p>{description}</p>
		</>
	);
}
