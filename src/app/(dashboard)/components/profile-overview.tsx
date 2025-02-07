import Flex from "@/components/layouts/flex";
import React from "react";
import EditProfilePortfolio from "./profile/edit-profile-portfolio";
import EditProfileTechStack from "./profile/edit-profile-tech-stack";
import EditProfileSummary from "./profile/edit-profile-summary";

export default function ProfileOverview() {
	return (
		<Flex className='basis-[720px] grow-[2] gap-3' flex='column'>
			<EditProfileSummary />
			<EditProfilePortfolio />
			<EditProfileTechStack />
		</Flex>
	);
}
