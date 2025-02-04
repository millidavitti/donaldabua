import React from "react";

export default function ContentBuilderVideo({ url }: { url: string }) {
	return <iframe src={url} className='aspect-[16/9]' />;
}
