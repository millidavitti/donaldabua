import { Metadata } from "next";
import SelectUser from "./components/select-user";

export const metadata: Metadata = {
	title: "Donald Abua",
};
export default function SelectUserPage() {
	return <SelectUser />;
}
