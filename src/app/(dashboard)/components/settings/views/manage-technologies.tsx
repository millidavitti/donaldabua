import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import AddTechnologies from "../add-technologies";
import Button from "@/components/ui/button";
import { X } from "lucide-react";
import useManageTechnologies from "@/hooks/interface/dashboard/use-manage-technologies-interface";
import { HashLoader } from "react-spinners";

export default function ManageTechnologies() {
	const { close, updateTechnologies, isPending } = useManageTechnologies();
	return (
		<Overlay stateFlag='manage-technologies'>
			<Flex
				flex='column'
				className='bg-light-surface gap-3 basis-[720px] neonScan'
			>
				<Flex className='justify-between items-center shrink-0'>
					<h2 className='text-2xl font-semibold'>Technologies</h2>
					<InteractiveIcon callback={() => close()}>
						<X size={24} className='stroke-light-error' />
					</InteractiveIcon>
				</Flex>
				<form
					className='flex flex-col gap-3'
					onSubmit={(e) => {
						e.preventDefault();
						updateTechnologies();
					}}
				>
					<AddTechnologies />
					<Button type='submit' className='bg-black text-light-surface'>
						Save {isPending && <HashLoader size={24} color='#fff' />}
					</Button>
				</form>
			</Flex>
		</Overlay>
	);
}
