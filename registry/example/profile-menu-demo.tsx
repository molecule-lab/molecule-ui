import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  ProfileMenu,
  ProfileMenuContent,
  ProfileMenuGroup,
  ProfileMenuHeader,
  ProfileMenuHeaderContent,
  ProfileMenuItem,
  ProfileMenuTrigger,
} from "@/registry/molecule-ui/profile-menu"

export function ProfileMenuDemo() {
  return (
    <div className="relative">
      <ProfileMenu>
        <ProfileMenuHeader>
          <ProfileMenuHeaderContent className="flex flex-col">
            <div>Liam Patel</div>
          </ProfileMenuHeaderContent>
          <ProfileMenuTrigger>
            <div className="flex items-center justify-end">
              <Avatar className="">
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/1?v=4"
                  alt="MUI"
                />
                <AvatarFallback>MUI</AvatarFallback>
              </Avatar>
            </div>
          </ProfileMenuTrigger>
        </ProfileMenuHeader>
        <ProfileMenuContent>
          <ProfileMenuGroup className="w-40">
            <ProfileMenuItem>Menu</ProfileMenuItem>
            <ProfileMenuItem>Community</ProfileMenuItem>
            <ProfileMenuItem>Subscription</ProfileMenuItem>
            <Separator className="my-0.5" />
            <ProfileMenuItem>Settings</ProfileMenuItem>
          </ProfileMenuGroup>
        </ProfileMenuContent>
      </ProfileMenu>
    </div>
  )
}
