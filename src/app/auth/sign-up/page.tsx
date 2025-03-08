import { Suspense } from "react";
import SignUpForm from "./components/sign-up-form";
import Link from "next/link";
import Button from "@/components/ui/button";
import Flex from "@/components/layouts/flex";

export default function SignUp() {
	return (
		<Suspense>
			<Flex flex='column' className='gap-3'>
				<SignUpForm />
				<Link href='/auth/sign-in'>
					<Button type='button'>Sign In</Button>
				</Link>
			</Flex>
		</Suspense>
	);
}
