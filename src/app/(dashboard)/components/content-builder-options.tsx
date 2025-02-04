import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import { portfolio_project_data_jotai } from "@/data/atoms/app_data";
import { useSetAtom } from "jotai";
import { Edit, Trash } from "lucide-react";

interface ContentBuilderOptions<T extends (...args: any) => any = () => void> {
	componentID: string;
	edit: T;
}

export default function ContentBuilderOptions({
	componentID,
	edit,
}: ContentBuilderOptions) {
	const portfolio_project_data_setter = useSetAtom(
		portfolio_project_data_jotai,
	);
	return (
		<Flex className='justify-end gap-3'>
			<InteractiveIcon
				className='outline self-end sticky top-0'
				htmlProps={{
					onClick() {
						edit();
					},
				}}
			>
				<Edit />
			</InteractiveIcon>
			<InteractiveIcon
				className='outline self-end sticky top-0'
				htmlProps={{
					onClick() {
						portfolio_project_data_setter((data) => {
							const update = data.content.filter(
								(obj) => componentID !== obj.id,
							);
							return {
								...data,
								content: update,
							};
						});
					},
				}}
			>
				<Trash />
			</InteractiveIcon>
		</Flex>
	);
}
