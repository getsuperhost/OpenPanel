import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";

import { MENU_ITEMS, NavbarItemType } from "./constants";
import {
    GithubStarIcon,
    GithubIcon,
    DiscordIcon,
} from "../icons/popover";
import { MenuItem } from "./menu-item";
import { NavbarItem } from "./navbar-item";
import { NavbarPopoverItem } from "./navbar-popover-item";

export const Menu: React.FC = () => {
    return (
        <>
            {MENU_ITEMS.map((item) => {
                if (item.isPopover) {
                    return (
                        <NavbarPopoverItem
                            key={`navbar-${item.label}`}
                            item={item}
                        >
                            {item.label === "Community" && (
                                <>
                                    <div
                                        className={clsx(
                                            "grid gap-4",
                                            "p-4",
                                            "w-[336px]",
                                            "dark:bg-gray-900 bg-white",
                                        )}
                                    >
                                        {item.items.map((subItem) => (
                                            <MenuItem
                                                key={subItem.label}
                                                item={subItem}
                                            />
                                        ))}
                                    </div>
                                    <div
                                        className={clsx(
                                            "border-t dark:border-gray-700 border-gray-300",
                                            "dark:bg-gray-800 bg-gray-100",
                                            "flex justify-between items-center",
                                            "py-4 px-7",
                                        )}
                                    >
                                        <div className="dark:text-gray-400 text-gray-600">
                                            Join the party!
                                        </div>
                                        <div className="flex gap-4">
                                            <Link
                                                to="https://github.com/stefanpejcic/openpanel/"
                                                className={clsx(
                                                    "no-underline",
                                                    "hover:text-inherit",
                                                )}
                                            >
                                                <GithubIcon className="dark:text-gray-400 text-gray-500" />
                                            </Link>
                                            <Link to="https://discord.com/invite/7bNY8fANqF">
                                                <DiscordIcon />
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )}

                            {item.label === "Company" && (
                                <div
                                    className={clsx(
                                        "grid gap-4",
                                        "p-4",
                                        "w-[336px]",
                                        "dark:bg-gray-900 bg-white",
                                    )}
                                >
                                    {item.items.map((subItem) => (
                                        <MenuItem
                                            key={subItem.label}
                                            item={subItem}
                                        />
                                    ))}
                                </div>
                            )}
                        </NavbarPopoverItem>
                    );
                }

                return (
                    <NavbarItem
                        key={`navbar-${item.label}`}
                        item={item as NavbarItemType}
                    />
                );
            })}
        </>
    );
};
