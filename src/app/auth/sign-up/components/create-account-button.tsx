"use client";
import { signUpController } from "@/backend/auth/sign-up.controller";
import Button from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";

export default function CreateAccountButton() {
	return (
		<Button
			type='submit'
			htmlProps={{
				async formAction(formData) {
					try {
						await signUpController(formData);
						toast.info("A verification email has been sent");
					} catch (error) {
						console.log(
							"---CreateAccountButton---\n",
							(error as Record<string, string>).message,
						);
						if ((error as Record<string, string>).message.includes("duplicate"))
							toast.info("Email already exists. Try signing in ");
						else toast.info("Unable to create your account at the moment ");
					}
				},
			}}
		>
			Create Account
		</Button>
	);
}
