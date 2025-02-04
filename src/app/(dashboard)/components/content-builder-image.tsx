import Image from "next/image";
import React from "react";

export default function ContentBuilderImage({ url }: { url: string }) {
	return <Image src={url} width={1000} height={1000} alt='' />;
}
