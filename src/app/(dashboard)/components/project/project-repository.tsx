import Flex from "@/components/layouts/flex";

export default function ProjectRepository({
	repository,
}: {
	repository: string;
}) {
	return (
		<Flex flex='column' className='shrink-0 gap-3'>
			<label className='text-xl font-semibold' htmlFor='title'>
				Repository
			</label>
			<p>{repository}</p>
		</Flex>
	);
}
