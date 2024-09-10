import * as Module from 'https://bryntum.com/products/schedulerpro/build/schedulerpro.module.js';
Object.assign(window, Module);

CSSHelper.insertRule('.event1.b-sch-event { border-radius: 20px; background-color: lightblue; }');
CSSHelper.insertRule('.event2.b-sch-event { border-radius: 10px; background-color: lightgreen; }');
CSSHelper.insertRule('.event3.b-sch-event { border-radius: 5px; background-color: lightcoral; }');
new SchedulerPro({
    project: new ProjectModel({
        resources: [
                {
                    "id": 1,
                    "name": "Alice",
                    "role": "Developer"
                },
                {
                    "id": 2,
                    "name": "Bob",
                    "role": "PM"
                },
                {
                    "id": 3,
                    "name": "Charlie",
                    "role": "Analyst"
                },
                {
                    "id": 4,
                    "name": "David",
                    "role": "UI/UX Designer"
                },
                {
                    "id": 5,
                    "name": "Eve",
                    "role": "QA Engineer"
                }
            ],

        events: [
                {
                    "id": 1,
                    "startDate": "2023-04-17",
                    "duration": 7,
                    "cls": 'event1',
                    "name": "Project Kickoff"
                },
                {
                    "id": 2,
                    "startDate": "2023-04-22",
                    "duration": 10,
                    "name": "Requirements Gathering",
                    "cls": 'event2',
                },
                {
                    "id": 3,
                    "startDate": "2023-05-02",
                    "duration": 7,
                    "name": "Data Analysis",
                    "cls": 'event3',
                },
                {
                    "id": 4,
                    "startDate": "2023-05-13",
                    "duration": 8,
                    "name": "UI/UX Design Review",
                    "cls": "event1",
                },
                {
                    "id": 5,
                    "startDate": "2023-05-14",
                    "duration": 6,
                    "name": "QA Testing",
                    "cls": "event2",
                }
            ],

        assignments: [
                {
                    "id": 1,
                    "resourceId": 1,
                    "eventId": 1
                },
                {
                    "id": 2,
                    "resourceId": 2,
                    "eventId": 2
                },
                {
                    "id": 3,
                    "resourceId": 3,
                    "eventId": 3
                },
                {
                    "id": 4,
                    "resourceId": 4,
                    "eventId": 4
                },
                {
                    "id": 5,
                    "resourceId": 5,
                    "eventId": 5
                }
            ],

        dependencies: [
                {
                    "id": 1,
                    "fromEvent": 1,
                    "toEvent": 2
                },
                {
                    "id": 2,
                    "fromEvent": 2,
                    "toEvent": 3
                },
                {
                    "id": 3,
                    "fromEvent": 3,
                    "toEvent": 4
                },
                {
                    "id": 4,
                    "fromEvent": 4,
                    "toEvent": 5
                }
            ]
    }),
    
    autoHeight: false,
    height: 800,
    rowHeight: 50,
    appendTo: document.getElementById('scheduler-container'), // Attach to the container

    columns: [
        { 
            text: 'Name',
            field: 'name',
            width: 160 
        },
        { 
            text: 'Role', 
            field: 'role', 
            width: 150 
        }
    ],

    startDate : '2023-04-16',
    endDate   : '2023-05-25',
});
