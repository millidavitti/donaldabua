import Button from "@/components/ui/button";
import Flex from "@/components/layouts/flex";

export default function SignIn() {
	return (
		<form
			action={async (formData) => {
				"use server";
			}}
		>
			<Flex flex='column' className='gap-3'>
				{/* <label htmlFor='name'>Full Name</label>
				<input type='text' id='name' name='name' className='outline p-3' />{" "} */}
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					name='email'
					className='outline p-3'
					required
				/>
				<Button type='submit'>Create Account</Button>
			</Flex>
		</form>
	);
}
