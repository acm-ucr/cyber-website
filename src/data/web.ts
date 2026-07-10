export interface webSubpage {
  title: string;
  subtitle: string;
  body: string[];
}

export const webData: webSubpage = {
  title: "Web",
  subtitle: "Reverse Proxy, fowarding proxy, databases...",
  body: [
    "http://manual-snort-org.s3-website-us-east-1.amazonaws.com/",
    "https://www.digitalocean.com/community/tutorials/how-to-set-up-mod_security-with-apache-on-debian-ubuntu",
    "https://www.owasp.org/index.php/Main_Page",
  ],
};
