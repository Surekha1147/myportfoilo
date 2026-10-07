const menuBtn=document.getElementById("menuBtn");
const navbar=document.querySelector(".navbar");
const navLinks=document.querySelectorAll("#navMenu a");
menuBtn.addEventListener("click",()=>navbar.classList.toggle("open"));
navLinks.forEach(link=>link.addEventListener("click",()=>navbar.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

const projectData={
 weather:{type:"PROJECT 01",title:"API Weather Dashboard",image:"assets/weather-dashboard.jpg",description:"Built a live weather dashboard using Python and a public weather API. Implemented real-time data fetching and display of current weather conditions.",tech:["Python","Public Weather API","Real-Time Data"]},
 ev:{type:"PROJECT 02",title:"EV Charging Station Finder",image:"assets/ev-charging-station.png",description:"Built a location-based application to locate nearby EV charging stations. Implemented search and results-display functionality for location-based information.",tech:["Location-Based","Search","Results Display"]},
 civic:{type:"PROJECT 03",title:"Smart Local Problem Reporting System",image:"assets/smart-local-reporting.png",description:"Developed a civic-issue reporting platform allowing citizens to submit local problems and track resolution status. Implemented an end-to-end workflow for issue reporting and status tracking.",tech:["Civic Platform","Issue Reporting","Status Tracking"]},
 library:{type:"PROJECT 04",title:"Library Management System",image:"assets/library-management.png",description:"Developed an application to manage book records, issue/return operations, and library inventory. Applied database and application-development concepts to manage library information.",tech:["Database","Book Records","Inventory"]}
};
const modal=document.getElementById("projectModal"),modalTitle=document.getElementById("modalTitle"),modalType=document.getElementById("modalType"),modalDescription=document.getElementById("modalDescription"),modalTech=document.getElementById("modalTech"),modalImage=document.getElementById("modalImage");
function openProject(key){const p=projectData[key];modalType.textContent=p.type;modalTitle.textContent=p.title;modalDescription.textContent=p.description;modalImage.src=p.image;modalImage.alt=p.title+" preview";modalTech.innerHTML=p.tech.map(x=>`<span>${x}</span>`).join("");modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function closeProject(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
document.querySelectorAll(".project-btn").forEach(b=>b.addEventListener("click",()=>openProject(b.dataset.project)));
document.getElementById("modalClose").addEventListener("click",closeProject);document.getElementById("modalBackdrop").addEventListener("click",closeProject);document.addEventListener("keydown",e=>{if(e.key==="Escape")closeProject()});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
