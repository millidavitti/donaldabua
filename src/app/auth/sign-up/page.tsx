import Flex from "@/components/layouts/flex";
import CreateAccountButton from "./components/create-account-button";

export default function SignUp() {
	return (
		<form>
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
				<CreateAccountButton />
			</Flex>
		</form>
	);
}
