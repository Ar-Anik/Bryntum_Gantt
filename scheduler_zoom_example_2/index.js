import {
  Scheduler,
  DateHelper,
} from "https://bryntum.com/products/schedulerpro/build/schedulerpro.module.js";

const events = [
  {
    id: 1,
    name: "Task 1",
    startDate: new Date(),
    endDate: DateHelper.add(new Date(), 1, "day"),
  },
  {
    id: 2,
    name: "Task 2",
    startDate: DateHelper.add(new Date(), 2, "day"),
    endDate: DateHelper.add(new Date(), 3, "day"),
  },
];

const scheduler = new Scheduler({
  appendTo: "scheduler",
  height: 600,
  features: {
    timeRanges: true,
    eventMenu: {
      items: {
        deleteEvent: {
          text: "Delete Event",
          icon: "b-icon b-icon-trash",
          weight: 200,
        },
      },
    },
    eventEdit: {
      items: {
        nameField: {
          type: "text",
          label: "Task Name",
          name: "name",
        },
        startDateField: {
          type: "date",
          label: "Start Date",
          name: "startDate",
        },
        endDateField: {
          type: "date",
          label: "End Date",
          name: "endDate",
        },
      },
    },
  },
  columns: [
    { text: "Task Name", field: "name", width: 200 },
    { text: "Start Date", field: "startDate", width: 120 },
    { text: "End Date", field: "endDate", width: 120 },
  ],
  resources: [
    { id: 1, name: "Resource 1" },
    { id: 2, name: "Resource 2" },
  ],
  events: events,
  startDate: new Date(),
  endDate: DateHelper.add(new Date(), 7, "day"),
  viewPreset: "weekAndDay",
  timeRanges: [
    {
      id: 1,
      startDate: new Date(),
      endDate: DateHelper.add(new Date(), 1, "day"),
      cls: "custom-time-range",
    },
  ],
});

const scrollSensitivity = 20;

function handleScroll(event) {
  const delta = event.deltaY || event.detail || event.wheelDelta;
  if (delta > 0) {
    scheduler.zoomOut();
  } else {
    scheduler.zoomIn();
  }
}

document.getElementById("scheduler").addEventListener("wheel", handleScroll);

window.addEventListener("beforeunload", function () {
  document
    .getElementById("scheduler")
    .removeEventListener("wheel", handleScroll);
});
