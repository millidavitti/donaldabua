"use client";
import Flex from "@/components/layouts/flex";
import Button from "@/components/ui/button";
import { signUpController } from "@/backend/auth/sign-up.controller";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils/get-error-message";

export default function SignUpForm() {
	return (
		<form
			action={async (formData) => {
				try {
					await signUpController(formData);
					toast.info("A verification email has been sent");
				} catch (error) {
					console.log("---CreateAccountButton---\n", error);
					if (getErrorMessage(error).includes("duplicate"))
						toast.info("Email already exists. Try signing in");
					else toast.info("Unable to create your account at the moment ");
				}
			}}
		>
			<Flex flex='column' className='gap-3'>
				<label htmlFor='name'>Full Name</label>
				<input type='text' id='name' name='name' className='outline p-3' />
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					name='email'
					className='outline p-3'
					required
				/>
				<Button type='submit' htmlProps={{}}>
					Create Account
				</Button>
			</Flex>
		</form>
	);
}
