import Flex from "@/components/layouts/flex";

export default function ProjectTitle({ title }: { title: string }) {
	return (
		<Flex flex='column' className='shrink-0 gap-3'>
			<label className='text-xl font-semibold' htmlFor='title'>
				Title
			</label>
			<p>{title}</p>
		</Flex>
	);
}
