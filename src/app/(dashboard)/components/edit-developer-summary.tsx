"use client";
import Flex from "@/components/layouts/flex";
import EditTitle from "./edit-title";
import EditHourlyRate from "./edit-hourly-rate";

export default function EditDeveloperSummary() {
	return (
		<Flex className='basis-40 grow shrink-0 justify-between'>
			<EditTitle />
			<EditHourlyRate />
		</Flex>
	);
}
