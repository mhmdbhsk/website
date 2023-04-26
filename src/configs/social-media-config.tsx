import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  Mail,
  TwitterIcon,
} from "lucide-react";

export const socialMediaConfig = [
  {
    id: "twitter",
    title: "ikuti saya di twitter",
    path: "https://twitter.com/mhmdbhsk",
    icon: <TwitterIcon />,
  },
  {
    id: "github",
    title: "ikuti saya di github",
    path: "https://github.com/mhmdbhsk",
    icon: <GithubIcon />,
  },
  {
    id: "linkedin",
    title: "lihat di linkedin",
    path: "https://linkedin.com/in/mhmdbhsk",
    icon: <LinkedinIcon />,
  },
  {
    id: "telegram",
    title: "hubungi saya di telegram",
    path: "https://t.me/mhmdbhsk",
    icon: <Mail />,
  },
  {
    id: "facebook",
    title: "lihat di facebook",
    path: "https://facebook.com/mhmdbhsk",
    icon: <FacebookIcon />,
  },
];

export type SocialMediaConfigType = typeof socialMediaConfig;