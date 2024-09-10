import * as Module from 'https://bryntum.com/products/schedulerpro/build/schedulerpro.module.js';
Object.assign(window, Module);

CSSHelper.insertRule('.result .b-sch-event { border-radius : 20px; }');

// Get the current date
let startDate = new Date();

// Set the end date to one year from the start date
let endDate = new Date();
endDate.setFullYear(endDate.getFullYear() + 1);

// Format the dates to 'YYYY-MM-DD' format
const formatDate = (date) => date.toISOString().split('T')[0];


// Create the SchedulerPro instance
const scheduler = new SchedulerPro({
    appendTo : document.getElementById("scheduler-container"),

    cls : 'result',

    width: 2400,
    height: 800,
    rowHeight: 100,

    startDate : '2023-04-16',
    endDate   : '2023-05-25',

    /* Event Style
        plain
        border
        line
        colored
        rounded
        hollow
        minimal
        calendar
    */

    /* Event Color
        red
        pink
        purple
        violet
        indigo
        blue
        cyan
        teal
        green
        lime
        yellow
        orange
        deep-orange
        brown
        grey
        black
        custom
    */

    eventStyle: 'boarder',
    eventColor: 'orange',

    viewPreset: {
        base : 'weekAndDayLetter',

        headers : [
            // upper header
            {
                unit : 'week',
                dateFormat : 'Wp'
            },

            // bottom header
            {
                unit: 'day',
                dateFormat: 'd1'    // it have more value like : d2, d3 etc.
            }
        ]
    },

    project : {
        loadUrl : 'https://run.mocky.io/v3/b13b81fe-0b0c-41f5-a062-a7adea5a8af1',
        autoLoad: true,

        listeners : {
            // not work
            hasChanges() {
                console.log("Change Data : ", scheduler.project.changes);
            }
        }
    },

    listeners : {
        eventClick({ eventRecord }) {
            console.log("Event : ", eventRecord);
            Toast.show(`Clicked ${eventRecord.name}`);
        },

        eventDbClick({ eventRecord }) {
            Toast.show(`Double-Clicked ${eventRecord.name}`);
        },
        
        beforeeventresize({eventRecord}) {
            Toast.show(`Event Resize : ${eventRecord.name}`);
        },

        dataChange() {
            console.log("Project has unsaved changes:", scheduler.project.changes);
        },
        
    },

    features: {
        dependencies : {
            radius : 10,
            clickWidth: 5
        }
    },

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
    ]
});

scheduler.on('beforeEventEdit', ({ eventRecord }) => {
    Toast.show(`Before Editing Popup of ${eventRecord.name}`);
});
