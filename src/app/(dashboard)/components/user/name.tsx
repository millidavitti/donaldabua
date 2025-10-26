import { ReactNode } from "react";
import { useName } from "./interfaces/use-name.interface";

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
