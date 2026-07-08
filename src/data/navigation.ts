interface NavLink {
  name: string;
  link: string;
}

export const navigations: NavLink[] = [
  { name: "About", link: "/about" },
  { name: "Board", link: "/board" },
  { name: "Socials", link: "/socials" },
  { name: "Calendar", link: "/calendar" },
  { name: "Resources", link: "/resources" },
];
