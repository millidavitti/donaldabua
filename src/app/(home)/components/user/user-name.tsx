import { user_snapshot_jotai } from "@/data/home/home-atoms/home-data";
import { useAtomValue } from "jotai";

export default function UserName() {
	const user_snapshot = useAtomValue(user_snapshot_jotai);

	return (
		<>
			<h2 className='font-bold text-4xl cursor-pointer data-[is-visible=false]:absolute data-[is-visible=true]:hidden h-10'>
				{user_snapshot.name}
			</h2>
		</>
	);
}
