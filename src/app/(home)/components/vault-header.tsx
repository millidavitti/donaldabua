import Flex from "@/components/layouts/flex";
import Image from "next/image";

export default function VaultHeader() {
	return (
		<Flex className='items-center shrink-0 border-0 p-0'>
			<Image
				src='/logo.svg'
				width={48}
				height={48}
				className='w-6 h-6 md:w-12 md:h-12'
				alt='logo'
			/>
			<h1 className='md:text-2xl font-bold text-center'>Project Vault</h1>
		</Flex>
	);
}
