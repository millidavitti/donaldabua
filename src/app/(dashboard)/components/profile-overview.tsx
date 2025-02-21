import Flex from "@/components/layouts/flex";
import React from "react";
import EditProjects from "./edit-profile/edit-profile-portfolio";
import EditProfileTechnologies from "./edit-profile/edit-profile-tech-stack";
import EditProfileSummary from "./edit-profile/edit-profile-summary";

export default function ProfileOverview() {
	return (
		<Flex className='basis-[720px] grow-[2] gap-3' flex='column'>
			<EditProfileSummary />
			<EditProjects />
			<EditProfileTechnologies />
		</Flex>
	);
}
