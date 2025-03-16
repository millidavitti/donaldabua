import Flex from "@/components/layouts/flex";

export default function ProjectTitle({ title }: { title: string }) {
	return (
		<Flex flex='column' className='shrink-0 gap-3'>
			<h2 className='text-xl font-semibold'>Project Title</h2>
			<p>{title}</p>
		</Flex>
	);
}
