"use client"
import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { useRouter } from "next/navigation"


const NAV_ITEMS = {
    home: ['Home', 'home'],
    experience: ['Experience', 'experience'],
    projects: ['Projects', 'projects'],
    skills: ['Skills', 'skills'],
    courses: ['Courses', 'courses'],
    contact: ['Contact', 'contact'],
};


const NavBar = () => {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        router.push(`/#${href}`, { scroll: true });
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      };
    return (
        <nav className="flex h-20 max-w-[75rem] px-8 mx-auto justify-between items-center">
            <>
                <div className="float-start">
                    <Link href="/" passHref onClick={(e) => handleClick(e, '')}>
                        <Avatar className="md:h-14 md:w-14 border border-white">
                            <AvatarImage src="/avatar.png" />
                            <AvatarFallback>BA</AvatarFallback>
                        </Avatar>
                    </Link>
                </div>

                <NavigationMenu className="font-bold">
                    <NavigationMenuList>
                        {Object.entries(NAV_ITEMS).map(([key, value]) => {
                            const [name, href] = value;
                            return (
                                <NavigationMenuItem key={key}>
                                    <Link href={`/#${href}`} legacyBehavior passHref>
                                        <NavigationMenuLink
                                            className={navigationMenuTriggerStyle()}
                                            onClick={(e) => handleClick(e, href)}
                                        >
                                            {name}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            );
                        })}
                    </NavigationMenuList>
                </NavigationMenu>
            </>
        </nav>
    );
}


export default NavBar;