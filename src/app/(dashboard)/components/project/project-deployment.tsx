import Flex from "@/components/layouts/flex";

export default function ProjectDeployment({
	deployment,
}: {
	deployment: string;
}) {
	return (
		<Flex flex='column' className='shrink-0 gap-3'>
			<label className='text-xl font-semibold' htmlFor='title'>
				Deployment{" "}
			</label>
			<p>{deployment}</p>
		</Flex>
	);
}
