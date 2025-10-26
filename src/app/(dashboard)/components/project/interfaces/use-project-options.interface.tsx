import { useState } from "react";

export default function useProjectOptions() {
	const [isVisible, setIsVisible] = useState(false);
	const view = () => {
		setIsVisible(true);
		const cb = function (e: PointerEvent) {
			const options = document.querySelector("#project-options");
			const children = options?.children;
			const target = e.target as HTMLElement;
			const isOption = Boolean(children?.namedItem(target.id));
			const isModalOpen = Boolean(target.closest("[id*='modal']"));
			if (isOption || isModalOpen) return;
			setIsVisible(false);
			document.removeEventListener("click", cb);
		};
		document.addEventListener("click", cb);
	};
	return { view, isVisible };
}
