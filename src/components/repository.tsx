import { SVGProps } from "react";
import Logo from "@/repository.svg";
interface Repository extends SVGProps<SVGElement> {
	size?: number;
}
export default function Repository({ size, ...props }: Repository) {
	return <Logo width={size || 24} height={size || 24} {...props} />;
}
