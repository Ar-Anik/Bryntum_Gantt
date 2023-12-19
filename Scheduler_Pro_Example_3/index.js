import {
  SchedulerPro,
  ResourceModel,
  EventModel,
} from "https://bryntum.com/products/schedulerpro/build/schedulerpro.module.js";

document.addEventListener("DOMContentLoaded", async function () {
  // Fetch real-life data from an API (using JSONPlaceholder as an example)
  const fetchResourceData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/?_limit=10"
    );
    const data = await response.json();
    return data.map((user) => ({ id: user.id, name: user.name }));
  };

  var tm = 1;
  var startDate = new Date();

  const fetchEventData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/?_limit=10"
    );
    const data = await response.json();
    return data.map((todo) => ({
      id: todo.id,
      resourceId: tm,
      startDate: new Date(startDate.getTime() + tm * 3600 * 100),
      endDate: new Date(startDate.getTime() + 3600 * (1000 * tm++)),
      name: todo.title,
    }));
  };

  const resources = await fetchResourceData();
  const events = await fetchEventData();

  const scheduler = new SchedulerPro({
    height: 800,
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
        showCurrentTimeLine: false,
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
