import React from "react";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function SignIn() {
	return (
		<div>
			<form className='p-3 flex gap-3'>
				<Link href='/auth/sign-in'>
					<Button type='submit'>Sign In</Button>
				</Link>
				<Link href='/auth/sign-up'>
					<Button type='submit'>Sign Up</Button>
				</Link>
			</form>
		</div>
	);
}
