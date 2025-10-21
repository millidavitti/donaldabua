import { useEditName } from "@/hooks/interface/dashboard/use-edit-name.interface";

export default function EditName() {
	const { name, edit, Modal } = useEditName();
	return (
		<>
			<h2
				className='font-bold text-4xl cursor-pointer data-[is-visible=false]:absolute data-[is-visible=true]:hidden h-10'
				onClick={edit}
			>
				{name}
			</h2>
			{Modal}
		</>
	);
}
