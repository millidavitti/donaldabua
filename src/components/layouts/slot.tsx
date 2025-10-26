import { ReactElement, ReactNode } from "react";

export default function Slot({
	children,
	name,
	slots,
}: {
	name: string;
	slots: { [key: string]: ReactElement };
	children: (
		element: ReactElement<Record<string, unknown> | HTMLElement>,
	) => ReactNode;
}) {
	const component = slots[name] as ReactElement<
		Record<string, unknown> | HTMLElement
	>;
	if (!component) return;
	return children(component);
}
