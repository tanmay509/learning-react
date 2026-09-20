import { Card } from "./components/cards";


export default function App(){
  let arr= [
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      job_role: "Frontend Engineer",
      salary: "$165,000 - $210,000",
      location: "Menlo Park, CA"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      job_role: "Software Development Engineer II",
      salary: "$150,000 - $195,000",
      location: "Seattle, WA"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      job_role: "iOS Software Engineer",
      salary: "$170,000 - $220,000",
      location: "Cupertino, CA"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      job_role: "Senior UI Engineer",
      salary: "$220,000 - $350,000",
      location: "Los Gatos, CA"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      job_role: "Full Stack Developer",
      salary: "$160,000 - $205,000",
      location: "Mountain View, CA"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      job_role: "Production Engineer",
      salary: "$155,000 - $190,000",
      location: "New York, NY"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      job_role: "AWS Cloud Architect",
      salary: "$160,000 - $215,000",
      location: "Austin, TX"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      job_role: "Machine Learning Engineer",
      salary: "$180,000 - $240,000",
      location: "Cupertino, CA"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      job_role: "Backend Infrastructure Engineer",
      salary: "$240,000 - $380,000",
      location: "Remote (US)"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      job_role: "Site Reliability Engineer (SRE)",
      salary: "$165,000 - $210,000",
      location: "Sunnyvale, CA"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      job_role: "React Native Mobile Engineer",
      salary: "$160,000 - $200,000",
      location: "Seattle, WA"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      job_role: "Frontend Engineer (Prime Video)",
      salary: "$145,000 - $185,000",
      location: "Culver City, CA"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      job_role: "Core OS Systems Engineer",
      salary: "$175,000 - $230,000",
      location: "Austin, TX"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      job_role: "Data Platform Engineer",
      salary: "$230,000 - $360,000",
      location: "Los Gatos, CA"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      job_role: "Security Software Engineer",
      salary: "$170,000 - $225,000",
      location: "New York, NY"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      job_role: "AR/VR Systems Developer",
      salary: "$175,000 - $230,000",
      location: "Redmond, WA"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      job_role: "Distributed Systems Engineer",
      salary: "$155,000 - $200,000",
      location: "Arlington, VA"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      job_role: "UI/UX Software Engineer",
      salary: "$165,000 - $210,000",
      location: "Cupertino, CA"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      job_role: "Algorithm & Streaming Engineer",
      salary: "$250,000 - $400,000",
      location: "Los Gatos, CA"
    },
    {
      company_logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      job_role: "AI Research Engineer",
      salary: "$190,000 - $260,000",
      location: "Cambridge, MA"
    }
  ];
  return <div className="cards-container">{arr.map(function(elm, idx) {
    return <div key={idx} >
      <Card company_logo={elm.company_logo} salary={elm.salary} location={elm.location} job_role={elm.job_role}/>
    </div>
  
})}</div> }