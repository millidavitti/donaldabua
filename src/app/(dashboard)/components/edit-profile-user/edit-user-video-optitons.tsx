import Flex from "@/components/layouts/flex";
import React, { ReactNode } from "react";

interface EditUserVideoOptions {
	children: ReactNode;
}
export default function EditUserVideoOptions({
	children,
}: EditUserVideoOptions) {
	return <>{children}</>;
}
