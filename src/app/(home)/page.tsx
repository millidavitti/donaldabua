import React from "react";
import ProjectVault from "./components/project-vault";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Donald Abua",
};
export default function page() {
	return <ProjectVault />;
}
