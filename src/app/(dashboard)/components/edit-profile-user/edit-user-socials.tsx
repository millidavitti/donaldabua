"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import useEditUserSocials from "@/hooks/interface/dashboard/use-edit-user-socials-interface";
import { Plus, Trash2, X } from "lucide-react";
import SelectSocialPlatform from "../select-social-platform";
import Image from "next/image";
import {
	DELAY,
	SOCIAL_PLATFORM_ICONS,
} from "@/data/dashboard/dashboard-constants";
import { SocialPlatforms } from "@/data/dashboard/dashboard-atoms/dashboard-data";
import { HashLoader } from "react-spinners";
import { cn } from "@/utils/cn";
import { getAnimationClass } from "@/utils/animations";

export default function EditUserSocials() {
	const {
		capture,
		close,
		display,
		save,
		inputSocials,
		socials,
		isPending,
		update,
		dashboard_view,
		remove,
	} = useEditUserSocials();
	return (
		<>
			<Flex flex='column' className='grow gap-3' htmlProps={{ id: "socials" }}>
				<a href='#socials' className='shrink-0'>
					<Flex className='h-fit items-center justify-between'>
						<p className='font-semibold lg:text-2xl'>Socials</p>
						<InteractiveIcon
							callback={() => {
								display("add-socials");
							}}
						>
							<Plus size={24} />
						</InteractiveIcon>
					</Flex>
				</a>
				{/* Added Socials */}
				<Flex flex='column' className='gap-3 h-full border-0 p-0'>
					{socials?.map((account, i) => (
						<Flex
							key={account.id}
							className={cn(
								"group shrink-0 bg-light-surface-surface-container gap-3 font-semibold justify-between",
								getAnimationClass("swing-in-top-fwd"),
							)}
							htmlProps={{ style: { animationDelay: i * DELAY + "ms" } }}
						>
							<span
								className='flex w-full gap-3 active:scale-95 transition cursor-pointer'
								onClick={() => update(account)}
							>
								<Image
									src={SOCIAL_PLATFORM_ICONS[account.platform]}
									width={24}
									height={24}
									alt={account.platform}
								/>
								{account.platform}
							</span>
							<Trash2
								className='stroke-light-error active:scale-95 transition group-hover:block hidden cursor-pointer'
								onClick={() => remove(account)}
							/>
						</Flex>
					))}
				</Flex>
			</Flex>
			<Overlay
				stateFlag={
					dashboard_view === "add-socials" ? "add-socials" : "update-socials"
				}
				className='flex justify-center items-center'
			>
				<Flex
					flex='column'
					className='bg-light-surface gap-3 basis-[720px] max-h-[80%] neonScan'
				>
					<Flex className='justify-between items-center shrink-0'>
						<h2 className='text-2xl font-semibold'>Add Socials</h2>
						<InteractiveIcon callback={() => close()}>
							<X size={24} className='stroke-light-error' />
						</InteractiveIcon>
					</Flex>

					<form
						className='flex flex-col gap-3'
						onSubmit={(e) => {
							e.preventDefault();
							if (dashboard_view === "add-socials") save("add-socials");
							else if (dashboard_view === "update-socials")
								save("update-socials");
						}}
					>
						<SelectSocialPlatform />
						<Flex flex='column' className='gap-3'>
							<label className='text-xl font-semibold shrink-0' htmlFor='title'>
								Profile
							</label>
							<input
								type='url'
								required
								className='border p-3'
								defaultValue={inputSocials.profile}
								onChange={(e) => capture(e.target.value as SocialPlatforms)}
							/>
						</Flex>
						<Button type='submit' className='bg-black text-light-surface'>
							{dashboard_view === "add-socials"
								? "Add Account"
								: "Update Account"}{" "}
							{isPending && <HashLoader color='#fff' size={24} />}
						</Button>
					</form>
				</Flex>
			</Overlay>
		</>
	);
}
