// Import the SchedulerPro class from the correct module path
import { SchedulerPro } from "https://bryntum.com/products/schedulerpro/build/schedulerpro.module.js";

document.addEventListener("DOMContentLoaded", function () {
  // Sample resource data
  const resources = [
    { id: 1, name: "Resource 1" },
    { id: 2, name: "Resource 2" },
    { id: 3, name: "Resource 3" },
  ];

  // Sample event data
  const events = [
    {
      id: 1,
      resourceId: 1,
      startDate: "2023-01-01T08:00:00",
      endDate: "2023-01-01T12:00:00",
      name: "Event 1",
    },
    {
      id: 2,
      resourceId: 2,
      startDate: "2023-01-02T10:00:00",
      endDate: "2023-01-02T14:00:00",
      name: "Event 2",
    },
    {
      id: 3,
      resourceId: 3,
      startDate: "2023-01-03T14:00:00",
      endDate: "2023-01-03T18:00:00",
      name: "Event 3",
    },
  ];

  // Use the imported SchedulerPro class
  const scheduler = new SchedulerPro({
    height: 1200,
    width: 1900,
    startDate: new Date(2023, 0, 1),
    endDate: new Date(2023, 0, 7),
    resources: resources,
    events: events,
    columns: [
      { text: "Name", field: "name", width: 200 },
      // Add more columns as needed
    ],
    features: {
      eventEdit: {
        editorConfig: {
          // Define the fields you want to edit in the event editor
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
      // Add more features as needed
    },
  });

  scheduler.render(document.getElementById("scheduler"));
});
