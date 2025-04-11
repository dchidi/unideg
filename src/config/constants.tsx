import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";

export const AppInfo = {
  name: "UniDezk",
  fullname: "University Desk",
  heroShortNote: `Navigate the complex world of medical school admissions with
        personalized guidance, comprehensive resources, and expert support for
        international opportunities.`,
  footerShortNote: `Your comprehensive platform for finding and applying to medical schools worldwide. 
        We simplify the journey to becoming a doctor.`,
  address: "128 Grace Park Grove, Drumcondra, Dublin, D09C3VY",
  email: "info@unidezk.com",
  phone: "+353 (899) 523-677",
};
export const FeaturesList = [
  {
    title: "Smart School Matching",
    description:
      "Our intelligent algorithm matches you with medical schools based on your qualifications, preferences, and career goals.",
  },
  {
    title: "Application Guidance",
    description:
      "Step-by-step assistance through the entire application process with personalized checklists and timelines.",
  },
  {
    title: "Personal Dashboard",
    description:
      "Track your applications, save favorite schools, and monitor deadlines with your customized dashboard.",
  },
  {
    title: "Real-time Updates",
    description:
      "Receive timely notifications about application deadlines, status changes, and new opportunities.",
  },
];

export const MenuList = [
  { name: "Home", label: "home", topMenu: true },
  { name: "Programs", label: "programs", topMenu: true },
  // { name: "Scholarship", label: "scholarship", topMenu: true },
  { name: "How it works", label: "how-it-works", topMenu: true },
  // { name: "Login", label: "login", topMenu: false },
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
