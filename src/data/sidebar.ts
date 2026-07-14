export interface SidebarLink {
  label: string;
  href: string;
  isExternalSite?: boolean;
}

export interface SidebarConfig {
  pages: SidebarLink[];
  links: SidebarLink[];
}

export const sidebarData: Record<"about" | "resources", SidebarConfig> = {
  about: {
    pages: [
      {
        label: "origins.conf",
        href: "#about",
      },
      {
        label: "goals.conf",
        href: "#goals",
      },
      {
        label: "competitions.conf",
        href: "#competitions",
      },
      {
        label: "general_meetings.conf",
        href: "#meetings",
      },
    ],
    links: [
      {
        label: "resources.csv",
        href: "/resources",
        isExternalSite: true,
      },
      {
        label: "partners.csv",
        href: "/partners",
        isExternalSite: true,
      },
    ],
  },
  resources: {
    pages: [
      {
        label: "networks.log",
        href: "#networks",
      },
      {
        label: "gnu_linux.log",
        href: "#gnulinux",
      },
      {
        label: "incident_response.log",
        href: "#incidentresponse",
      },
      {
        label: "windows.log",
        href: "#windows",
      },
      {
        label: "web.log",
        href: "#web",
      },
      {
        label: "CTF.log",
        href: "#ctf",
      },
    ],
    links: [
      {
        label: "Cyber@UCR CTFs.csv",
        href: "https://ctf.cyberucr.org",
        isExternalSite: true,
      },
    ],
  },
};
