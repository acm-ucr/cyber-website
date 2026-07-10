export interface incidentResponseSubpage {
  title: string;
  subtitle: string;
  body: string[];
}

export const incidentResponseData: incidentResponseSubpage = {
  title: "Incident Response",
  subtitle: "LOGS, LOGS, AND MORE LOGS!",
  body: [
    "https://www.splunk.com/en_us/training.html",
    "https://www.elastic.co/guide/index.html",
  ],
};
