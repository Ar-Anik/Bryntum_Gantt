// Import the classes directly from the module
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
      startDate: "2023-12-23T08:00:00",
      endDate: "2023-12-25T12:00:00",
      name: "Event 1",
    },
    {
      id: 2,
      resourceId: 2,
      startDate: "2023-12-18T10:00:00",
      endDate: "2023-12-22T14:00:00",
      name: "Event 2",
    },
    {
      id: 3,
      resourceId: 1,
      startDate: "2023-12-19T10:00:00",
      endDate: "2023-12-21T14:00:00",
      name: "Event 2",
    },
    // Add more events as needed
  ];

  const scheduler = new SchedulerPro({
    height: 1200,
    appendTo: "scheduler",
    features: {
      eventEdit: {
        editorConfig: {
          fields: [
            {
              type: "text",
              name: "name",
              label: "Event Name",
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
      eventDrag: false,
      filter: true,
      timeRanges: {
        showCurrentTimeLine: false,
        enableResizing: false,
        enableDragging: false,
      },
    },
    // resourceImagePath: "/static/img/party/",
    // defaultResourceImageName: "default.png",
    viewPreset: "weekAndDay",
    rowHeight: 50,
    columns: [
      { type: "resourceInfo", text: "Name", field: "name", width: 200 },
      { text: "Events", field: "eventCount", width: 100 },
      // Add more columns as needed
    ],
  });

  // Set the modelClass directly to the classes
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
