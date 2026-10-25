const employees = [
  {
    id: 1,
    name: "علي",
    role: "developer",
    salary: 5000,
    skills: ["js", "react", "node"],
  },
  {
    id: 2,
    name: "سارة",
    role: "designer",
    salary: 4500,
    skills: ["figma", "css", "html"],
  },
  {
    id: 3,
    name: "حسن",
    role: "developer",
    salary: 6000,
    skills: ["js", "vue", "python"],
  },
  {
    id: 4,
    name: "نور",
    role: "manager",
    salary: 8000,
    skills: ["management", "agile"],
  },
  {
    id: 5,
    name: "خالد",
    role: "developer",
    salary: 5500,
    skills: ["js", "react", "node", "aws"],
  },
];

const projects = [
  {
    id: 1,
    name: "متجر إلكتروني",
    budget: 15000,
    status: "completed",
    deadline: "2024-03-01",
    tasks: [
      { title: "تصميم", assignee: "سارة", hours: 40, completed: true },
      { title: "واجهة", assignee: "علي", hours: 80, completed: true },
      { title: "باك اند", assignee: "حسن", hours: 100, completed: true },
    ],
  },
  {
    id: 2,
    name: "تطبيق موبايل",
    budget: 25000,
    status: "in-progress",
    deadline: "2024-08-01",
    tasks: [
      { title: "تصميم", assignee: "سارة", hours: 60, completed: true },
      { title: "واجهة", assignee: "علي", hours: 120, completed: false },
      { title: "باك اند", assignee: "خالد", hours: 150, completed: false },
    ],
  },
  {
    id: 3,
    name: "نظام إدارة",
    budget: 30000,
    status: "in-progress",
    deadline: "2024-09-15",
    tasks: [
      { title: "تحليل", assignee: "نور", hours: 30, completed: true },
      { title: "واجهة", assignee: "حسن", hours: 100, completed: true },
      { title: "باك اند", assignee: "خالد", hours: 200, completed: false },
      { title: "اختبار", assignee: "علي", hours: 50, completed: false },
    ],
  },
  {
    id: 4,
    name: "موقع شخصي",
    budget: 5000,
    status: "completed",
    deadline: "2024-01-15",
    tasks: [
      { title: "تصميم", assignee: "سارة", hours: 20, completed: true },
      { title: "تطوير", assignee: "علي", hours: 30, completed: true },
    ],
  },
  {
    id: 5,
    name: "API خدمة",
    budget: 10000,
    status: "cancelled",
    deadline: "2024-05-01",
    tasks: [{ title: "تطوير", assignee: "حسن", hours: 80, completed: false }],
  },
];

let project_hours = projects.map((project) => ({
  name: project.name,
  totalHours: project.tasks.reduce((sum, task) => sum + task.hours, 0),
}));

project_hours.forEach(function (project) {
  console.log(`Total hours for each project:${project.name} : ${project.totalHours} ساعة`);
});


  let project_progress = projects.map((project) => {
  let total_Task = project.tasks.length;
  let completeTasks = project.tasks.filter((task) => task.completed).length;
  let progress = (completeTasks / total_Task) * 10;

  return {
    name: project.name,
    completed: completeTasks,
    total: total_Task,
    progress: progress.toFixed(2) + "%",
  };
});

    project_progress.forEach(function(project){
      console.log(` name :${project.name} ,  Completed_Task : ${project.completed} , Total Of Tasks ${project.total} , Progress : ${project.progress}`);
      
    })

let completed_Projects = projects
  .filter((project) => project.tasks.every((task) => task.completed))
  .map((project) => project.name);
    console.log(` completed Projects :  ${completed_Projects [0]} , ${completed_Projects [1]}`  );
    

let budgetByStatus = projects.reduce((acc, project) => {
  acc[project.status] = (acc[project.status] || 0) + project.budget;
  return acc;
}, {});


  Object.entries(budgetByStatus).forEach(function(status , budget){
    console.log(`${status} : ${budget}`);
    
  })
  

let inprogress_Emp = [
  ...new Set(
    projects
      .filter((p) => p.status === "in-progress")
      .flatMap((p) => p.tasks.map((t) => t.assignee)),
  ),
];

console.log(inprogress_Emp);

const tasks_per_emp = projects.reduce((acc, project) => {
  project.tasks.forEach(function (task) {
    acc[task.assignee] = (acc[task.assignee] || 0) + 1;
  });
  return acc;
}, {});

console.log(tasks_per_emp);


const tasks_per_hour = projects.reduce((acc, project) => {
  project.tasks.forEach(function (task) {
    acc[task.assignee] = (acc[task.assignee] || 0) + task.hours;
  });
  return acc;
}, {});

console.log(tasks_per_hour);


const sorted = Object.entries(tasks_per_hour).sort((a,b)=>b[1]-a[1]);
const top_emp = sorted[0]
console.log(`${top_emp[0]} : ${top_emp[1]}`);

const allskills = [
  ...new Set(employees.flatMap((emp)=> emp.skills)),
];
console.log(allskills);


const completed_project =  projects.filter((p)=>p.status ==="completed");

const avg_budget = completed_project.reduce((acc,p)=>acc+p.budget,0)/completed_Projects.length
console.log(`The Average Budget Is : ${avg_budget}`);


const highest_budget = projects.reduce((max,project)=>project.budget > max.budget ? project : max);
console.log(`${highest_budget.name} : ${highest_budget.budget}`);


const js_Emp = employees.filter((emp)=>emp.skills.includes("js")).map((emp)=>emp.name)


console.log(js_Emp);
