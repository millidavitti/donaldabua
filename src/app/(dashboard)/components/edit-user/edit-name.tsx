import { useEditName as useName } from "@/hooks/interface/dashboard/use-edit-name.interface";
import { ReactNode } from "react";

export default function Name({
	children,
}: {
	children: (name: string | undefined, edit?: () => void) => ReactNode;
}) {
	const { name, edit, Modal } = useName();
	return (
		<>
			{children(name, edit)}
			{Modal}
		</>
	);
}
