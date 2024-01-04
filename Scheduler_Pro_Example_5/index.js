import {
  SchedulerPro,
  ResourceModel,
  EventModel,
} from "https://bryntum.com/products/schedulerpro/build/schedulerpro.module.js";

document.addEventListener("DOMContentLoaded", function () {
  // Sample data
  const resources = [
    { id: 1, name: "Resource 1", dateDifference: 60 },
    { id: 2, name: "Resource 2", dateDifference: 90 },
    // Add more resources as needed
  ];

  const events = [
    {
      id: 1,
      resourceId: 1,
      startDate: "2023-12-23T08:00:00",
      endDate: calculateEndDate(
        "2023-12-23T08:00:00",
        resources[0].dateDifference
      ),
      name: "Event 1",
    },
    {
      id: 2,
      resourceId: 2,
      startDate: "2023-12-18T10:00:00",
      endDate: calculateEndDate(
        "2023-12-18T10:00:00",
        resources[1].dateDifference
      ),
      name: "Event 2",
    },
    {
      id: 3,
      resourceId: 1,
      startDate: "2023-12-19T10:00:00",
      endDate: calculateEndDate(
        "2023-12-19T10:00:00",
        resources[0].dateDifference
      ),
      name: "Event 2",
    },
    // Add more events as needed
  ];

  function calculateEndDate(startDate, dateDifference) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + dateDifference);
    return date.toISOString();
  }

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
      eventResize: false,
      eventDragCreate: false,
      eventDragSelect: false,
      eventDrag: false,
      filter: false,
      timeRanges: {
        showCurrentTimeLine: false,
        enableResizing: false,
        enableDragging: false,
      },
    },
    viewPreset: "hourAndDay",
    columns: [
      { type: "resourceInfo", text: "Name", field: "name", width: 200 },
      { text: "Tasks", field: "eventCount", width: 100 },
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
