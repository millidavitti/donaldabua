import React from "react";
import { signIn } from "../../../auth";
import Button from "@/components/ui/button";

export default function SignIn() {
	return (
		<div>
			<form
				action={async () => {
					"use server";
				}}
				className='p-3'
			>
				<Button type='submit'>Sign In</Button>
			</form>
		</div>
	);
}
