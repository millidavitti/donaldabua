import Flex from "@/components/layouts/flex";
import React from "react";

export default function Sidebar() {
	return (
		<Flex className='grow gap-3' flex='column'>
			<h2>Sidebar</h2>
			<Flex className='grow'></Flex>
			<Flex className='grow'></Flex>
		</Flex>
	);
}
