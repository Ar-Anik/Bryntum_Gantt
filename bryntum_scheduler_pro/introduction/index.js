import * as Module from 'https://bryntum.com/products/schedulerpro/build/schedulerpro.module.js';
Object.assign(window, Module);

new SchedulerPro({
    project: new ProjectModel({
        resourcesData: [
            { id: 1, name: 'Dan Stevenson' },
            { id: 2, name: 'Talisha Babin' }
        ],
        eventsData: [
            { id: 1, startDate: '2017-01-01', duration: 3, durationUnit: 'd', name: 'Event 1' },
            { id: 2, duration: 4, durationUnit: 'd', name: 'Event 2' }
        ],
        assignmentsData: [
            { event: 1, resource: 1 },
            { event: 2, resource: 2 }
        ],
        dependenciesData: [
            { fromEvent: 1, toEvent: 2 }
        ]
    }),
    
    autoHeight: true,
    rowHeight: 50,
    appendTo: document.getElementById('scheduler-container'), // Attach to the container

    columns: [
        { text: 'ID', field: 'id', width: 50 },
        { text: 'Name', field: 'name', width: 160 }
    ],

    startDate: new Date(2017, 0, 1),
    endDate: new Date(2017, 0, 10)
});
