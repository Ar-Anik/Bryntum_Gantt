import {
  SchedulerPro,
  ResourceModel,
  EventModel,
} from "https://bryntum.com/products/schedulerpro/build/schedulerpro.module.js";

document.addEventListener("DOMContentLoaded", function () {
  // Sample data
  const resources = [
    { id: 1, name: "Resource 1" },
    { id: 2, name: "Resource 2" },
    // Add more resources as needed
  ];

  const events = [
    {
      id: 1,
      resourceId: 1,
      startDate: new Date(2023, 11, 19, 8),
      endDate: new Date(2023, 11, 19, 10),
      name: "Task 1",
    },
    {
      id: 2,
      resourceId: 1,
      startDate: new Date(2023, 11, 20, 11),
      endDate: new Date(2023, 11, 20, 14),
      name: "Task 2",
    },
    {
      id: 3,
      resourceId: 1,
      startDate: new Date(2023, 11, 21, 15),
      endDate: new Date(2023, 11, 21, 18),
      name: "Task 3",
    },
    {
      id: 4,
      resourceId: 2,
      startDate: new Date(2023, 11, 19, 10),
      endDate: new Date(2023, 11, 19, 12),
      name: "Task 4",
    },
    {
      id: 5,
      resourceId: 2,
      startDate: new Date(2023, 11, 20, 13),
      endDate: new Date(2023, 11, 20, 16),
      name: "Task 5",
    },
    // Add more events as needed
  ];

  const scheduler = new SchedulerPro({
    height: 500,
    appendTo: "scheduler",
    features: {
      eventEdit: {
        editorConfig: {
          fields: [
            {
              type: "text",
              name: "name",
              label: "Task Name",
              required: true,
            },
            {
              type: "date",
              name: "startDate",
              label: "Start Date",
              required: true,
            },
            {
              type: "date",
              name: "endDate",
              label: "End Date",
              required: true,
            },
            // Add more fields as needed
          ],
        },
      },
      eventResize: true,
      eventDragCreate: true,
      eventDragSelect: true,
      eventDrag: true,
      filter: true,
      timeRanges: {
        showCurrentTimeLine: true,
        enableResizing: true,
        enableDragging: true,
      },
    },
    viewPreset: "hourAndDay",
    columns: [
      { type: "resourceInfo", text: "Name", field: "name", width: 200 },
      { text: "Tasks", field: "eventCount", width: 100 },
    ],
  });

  scheduler.project = {
    resourceStore: {
      modelClass: ResourceModel,
      data: resources,
    },
    eventStore: {
      modelClass: EventModel,
      data: events,
    },
  };

  scheduler.render(document.getElementById("scheduler"));
});
