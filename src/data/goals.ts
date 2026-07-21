export interface GoalsSecData {
  title: string;
  description: string;
  topicsTitle: string;
  topics: string[];
  competitionsTitle: string;
  competitions: string[];
}
export const goalsData: GoalsSecData = {
  title: "Goals",
  description:
    "Since our humble beginning, we've aimed to attract more members and grow our competition rankings.",
  topicsTitle: "Some topics we practice",
  topics: [
    "Secure System Administration",
    "Web Application Security",
    "Secure Software Development",
    "Offensive Security",
    "Incident Response",
    "Security Awareness Training",
    "Locksport",
    "Ethical Disclosure Practices",
  ],
  competitionsTitle: "Some competitions we participate in",
  competitions: [
    "Collegiate Cyber Defense Competition",
    "Collegiate Penetration Testing Competition",
  ],
};
