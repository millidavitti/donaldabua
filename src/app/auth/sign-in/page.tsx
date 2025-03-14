import { Suspense } from "react";
import SignInForm from "./components/sign-in-form";
import Flex from "@/components/layouts/flex";
import Button from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sign In",
	description:
		"Sign in to organize and manage your development projects in one place.",
};

export default function SignIn() {
	return (
		<Suspense>
			<Flex flex='column' className='gap-3'>
				<SignInForm />
				<Link href='/auth/sign-up'>
					<Button type='button'>Sign Up</Button>
				</Link>
			</Flex>
		</Suspense>
	);
}
