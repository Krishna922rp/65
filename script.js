const healthReminders = [{
    metric: "Heart Rate",
    value: "78 bpm"
},
{
    metric: "Steps Taken",
    value: "5200"
},
{
    metric: "Sleep Duration",
    value: "7 hours"
}
];

function displayHealthReminders() {
const dataDisplay = document.querySelector(".data-display");
dataDisplay.innerHTML = "";

healthReminders.forEach(reminder => {
    const reminderElement = document.createElement("div");
    reminderElement.classList.add("reminder");
    reminderElement.innerHTML = `
  <h3>${reminder.metric}</h3>
  <p>${reminder.value}</p>
`;
    dataDisplay.appendChild(reminderElement);
});
}


displayHealthReminders();

const medicationReminders = [{
    medication: "Aspirin",
    dosage: "1 tablet",
    time: "8:00 AM"
},
{
    medication: "Calcium Supplement",
    dosage: "1 tablet",
    time: "12:00 PM"
},
{
    medication: "Blood Pressure Medication",
    dosage: "1 tablet",
    time: "6:00 PM"
}
];


function displayMedicationReminders() {
const medicationList = document.querySelector(".medication-list");
medicationList.innerHTML = ""; 

medicationReminders.forEach(reminder => {
    const reminderElement = document.createElement("li");
    reminderElement.classList.add("medication-reminder");
    reminderElement.innerHTML = `
  <h3>${reminder.medication}</h3>
  <p>Dosage: ${reminder.dosage}</p>
  <p>Time: ${reminder.time}</p>
`;
    medicationList.appendChild(reminderElement);
});
}


displayMedicationReminders();

const physicalActivities = [{
    activity: "Brisk Walking",
    duration: "15 minutes"
},
{
    activity: "Chair Exercises",
    duration: "10 minutes"
},
{
    activity: "Stretching",
    duration: "5 minutes"
}
];


function displayPhysicalActivities() {
const activityPlan = document.querySelector(".activity-plan");
activityPlan.innerHTML = ""; 

physicalActivities.forEach(activity => {
    const activityElement = document.createElement("div");
    activityElement.classList.add("physical-activity");
    activityElement.innerHTML = `
  <h3>${activity.activity}</h3>
  <p>Duration: ${activity.duration}</p>
`;
    activityPlan.appendChild(activityElement);
});
}


displayPhysicalActivities();

const appointmentReminders = [{
    doctor: "Dr. Smith",
    date: "2023-08-15",
    time: "10:30 AM",
    location: "Main Clinic, Room 203"
},
{
    doctor: "Dr. Patel",
    date: "2023-08-20",
    time: "2:00 PM",
    location: "Specialty Center, Room 105"
},
{
    doctor: "Dr. Johnson",
    date: "2023-08-25",
    time: "11:45 AM",
    location: "Main Clinic, Room 310"
}
];

function displayAppointmentReminders() {
const appointmentList = document.querySelector(".appointment-list");
appointmentList.innerHTML = ""; 

appointmentReminders.forEach(appointment => {
    const appointmentElement = document.createElement("li");
    appointmentElement.classList.add("appointment-reminder");
    appointmentElement.innerHTML = `
  <h3>${appointment.doctor}</h3>
  <p>Date: ${appointment.date}</p>
  <p>Time: ${appointment.time}</p>
  <p>Location: ${appointment.location}</p>
`;
    appointmentList.appendChild(appointmentElement);
});
}


displayAppointmentReminders();

const healthMonitoringSection = document.getElementById("health-monitoring");
healthMonitoringSection.addEventListener("click", () => {
displayHealthReminders();
});


const medicationRemindersSection = document.getElementById("medication-reminders");
medicationRemindersSection.addEventListener("click", () => {
displayMedicationReminders();
});


const physicalActivitySection = document.getElementById("physical-activity");
physicalActivitySection.addEventListener("click", () => {
displayPhysicalActivities();
});

const appointmentRemindersSection = document.getElementById("appointment-reminders");
appointmentRemindersSection.addEventListener("click", () => {
displayAppointmentReminders();
});


function playAlarmSound() {
const alarmSound = new Audio("alarm.mp3"); 
alarmSound.play();
}


function displayMedicationReminders() {
const medicationList = document.querySelector(".medication-list");
medicationList.innerHTML = ""; 

medicationReminders.forEach(reminder => {
    const reminderElement = document.createElement("li");
    reminderElement.classList.add("medication-reminder");
    reminderElement.innerHTML = `
  <h3>${reminder.medication}</h3>
  <p>Dosage: ${reminder.dosage}</p>
  <p>Time: ${reminder.time}</p>
`;
    medicationList.appendChild(reminderElement);

    const currentTime = new Date();
    const reminderTime = new Date();
    const [hours, minutes] = reminder.time.split(":");
    reminderTime.setHours(hours);
    reminderTime.setMinutes(minutes);

    if (currentTime >= reminderTime) {
        playAlarmSound();
    }
});
}


displayMedicationReminders();