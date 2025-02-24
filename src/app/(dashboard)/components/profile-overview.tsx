import Flex from "@/components/layouts/flex";
import React from "react";
import EditProfileProjects from "./edit-profile/edit-profile-projects";
import EditProfileTechnologies from "./edit-profile/edit-profile-technologies";
import EditProfileSummary from "./edit-profile/edit-profile-summary";

export default function ProfileOverview() {
	return (
		<Flex className='basis-[720px] grow-[2] gap-3' flex='column'>
			<EditProfileSummary />
			<EditProfileProjects />
			<EditProfileTechnologies />
		</Flex>
	);
}
