import { ReactNode } from "react";

interface EditUserVideoOptions {
	children: ReactNode;
}
export default function EditUserVideoOptions({
	children,
}: EditUserVideoOptions) {
	return <>{children}</>;
}
