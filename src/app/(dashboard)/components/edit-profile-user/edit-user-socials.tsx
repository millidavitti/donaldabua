"use client";
import Flex from "@/components/layouts/flex";
import InteractiveIcon from "@/components/layouts/interactive_icon";
import Overlay from "@/components/layouts/overlay";
import Button from "@/components/ui/button";
import useEditUserSocialsInterface from "@/hooks/interface/use-edit-user-socials-interface";
import { CirclePlus, Trash2, X } from "lucide-react";
import SelectSocialPlatform from "../select-social-platform";
import Image from "next/image";
import { DELAY, SOCIAL_PLATFORM_ICONS } from "@/data/constants";
import { SocialPlatforms } from "@/data/atoms/app_data";
import { HashLoader } from "react-spinners";
import { cn } from "@/utils/cn";
import { getAnimationClass } from "@/utils/animations";
import AlertDialog from "@/components/ui/alert-dialog";

export default function EditUserSocials() {
	const {
		capture,
		close,
		display,
		save,
		social_account,
		user_socials_snapshot,
		api_task,
		update,
		dashboard_view,
		remove,
	} = useEditUserSocialsInterface();
	return (
		<>
			<Flex flex='column' className='grow gap-3'>
				<Flex className='h-fit items-center justify-between shrink-0'>
					<p className='font-semibold lg:text-2xl'>Socials</p>
					<InteractiveIcon
						callback={() => {
							display("add-socials");
						}}
					>
						<CirclePlus size={24} />
					</InteractiveIcon>
				</Flex>
				{/* Added Socials */}
				<Flex flex='column' className='gap-3 h-full max-h-[472px]'>
					{user_socials_snapshot.map((social_account, i) => (
						<Flex
							key={social_account.id}
							className={cn(
								"group shrink-0 bg-light-surface-surface-container gap-3 font-semibold justify-between",
								getAnimationClass("swing-in-top-fwd"),
							)}
							htmlProps={{ style: { animationDelay: i * DELAY + "ms" } }}
						>
							<span
								className='flex w-full gap-3 active:scale-95 transition cursor-pointer'
								onClick={() => update(social_account)}
							>
								<Image
									src={SOCIAL_PLATFORM_ICONS[social_account.platform]}
									width={24}
									height={24}
									alt={social_account.platform}
								/>
								{social_account.platform}
							</span>
							<Trash2
								className='stroke-light-error active:scale-95 transition group-hover:block hidden cursor-pointer'
								onClick={() => remove(social_account)}
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
								className='outline p-3'
								value={social_account.profile}
								onChange={(e) =>
									capture("profile", e.target.value as SocialPlatforms)
								}
							/>
						</Flex>
						<Button type='submit' className='bg-black text-light-surface'>
							{dashboard_view === "add-socials"
								? "Add Account"
								: "Update Account"}{" "}
							{(api_task === "add-social-account" ||
								api_task === "update-social-account") && (
								<HashLoader color='#fff' size={24} />
							)}
						</Button>
					</form>
				</Flex>
			</Overlay>

			<AlertDialog apiTask={api_task} />
		</>
	);
}
