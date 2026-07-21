interface Configuration {
  [key: string]: string; // Any string key will return a string or number
}

export const PathCommands: Configuration = {
  "/": "cyberfetch",
  "/about": "man cyber",
  "/board": "cat /etc/passwd",
  "/socials": "ip link | grep cyber0",
  "/calendar": "cal",
  "/resources": "grep “resources”",
  "/partners": "cat thank_you.service",
};
