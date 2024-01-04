import { SchedulerPro } from "https://bryntum.com/products/schedulerpro/build/schedulerpro.module.js";

document.addEventListener("DOMContentLoaded", function () {
  // Create a new Scheduler instance
  const scheduler = new SchedulerPro({
    appendTo: "scheduler-container",
    minHeight: "40em",
    resourceImagePath: "https://images.app.goo.gl/Zj93zmD2CMbeFpcb9",
    features: {
      filterBar: true,
      timeRanges: true,
      eventMenu: true,
      eventDragCreate: true,
      dependencies: true,
      dependencyEdit: true,
      resourceTimeRanges: true,
      group: "jobTitle", // Group resources by jobTitle
    },
    columns: [
      { type: "resourceInfo", text: "Staff", width: 150 },
      { text: "Event", field: "name", width: 200 },
      { text: "Start", field: "startDate", width: 150 },
      { text: "End", field: "endDate", width: 150 },
      { text: "Job Title", field: "jobTitle", width: 150 },
    ],
    startDate: new Date(2023, 0, 1),
    endDate: new Date(2023, 11, 31),
  });

  // Access the project directly from the Scheduler instance
  const project = scheduler.project;

  // Add resources and events to the project
  const resource1 = project.resourceStore.add({
    id: 1,
    name: "Resource 1",
    jobTitle: "Developer",
  });

  const resource2 = project.resourceStore.add({
    id: 2,
    name: "Resource 2",
    jobTitle: "Designer",
  });

  const event1 = project.eventStore.add({
    id: 1,
    resourceId: 1,
    name: "Project Kickoff",
    startDate: new Date(2023, 0, 1, 8),
    endDate: new Date(2023, 0, 7, 18),
  });

  const event2 = project.eventStore.add({
    id: 2,
    resourceId: 2,
    name: "Design Review",
    startDate: new Date(2023, 0, 1, 14),
    endDate: new Date(2023, 0, 12, 20),
  });

  // Add dependency between events
  project.dependencyStore.add({
    fromEvent: event1,
    toEvent: event2,
    type: "FS", // Finish-to-Start dependency
  });

  // Render the Scheduler
  scheduler.render();
});
