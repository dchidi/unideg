import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";

export const AppInfo = {
  name: "UniDezk",
  footerShortNote:
    "Your comprehensive platform for finding and applying to medical schools worldwide. We simplify the journey to becoming a doctor.",
  address: "128 Grace Park Grove, Drumcondra, Dublin, D09C3VY",
  email: "support@unidezk.com",
  phone: "+353 (899) 523-677",
};
export const FeaturesList = [
  {
    title: "Smart School Matching",
    description:
      "Our intelligent algorithm matches you with medical schools based on your qualifications, preferences, and career goals.",
  },
  { title: "Application Guidance", description: "" },
  { title: "Personal Dashboard", description: "" },
  { title: "Real-time Update", description: "" },
];

export const MenuList = [
  { name: "Programs", label: "programs" },
  { name: "Scholarship", label: "scholarship" },
  { name: "How it works", label: "how-it-works" },
  { name: "Login", label: "login" },
];

export const CoverageList = [
  { name: "Schools", value: "500+", label: "schools" },
  { name: "Countries", value: "120+", label: "countries" },
  { name: "Success Stories", value: "5,000+", label: "success_stories" },
];

export const SocialMediaHandle = [
  { name: "facebook", icon: <SlSocialFacebook />, url: "", isActive: true },
  { name: "twitter", icon: <FaXTwitter />, url: "", isActive: true },
  { name: "instagram", icon: <FaInstagram />, url: "", isActive: true },
  { name: "linkedin", icon: <FiLinkedin />, url: "", isActive: true },
];
