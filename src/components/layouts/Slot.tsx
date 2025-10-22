import { ReactElement, ReactNode } from "react";

export default function Slot({
	children,
	slot,
	slots,
}: {
	slot: string;
	slots: { [key: string]: ReactElement };
	children: (
		slot: ReactElement<Record<string, unknown> | HTMLElement>,
	) => ReactNode;
}) {
	const component = slots[slot] as ReactElement<
		Record<string, unknown> | HTMLElement
	>;
	if (!component) return;
	return children(component);
}
