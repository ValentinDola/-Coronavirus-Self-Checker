import React from "react";
import Q7BComponent from "./customs/Q7BComponent";
import Q10BComponent from "./customs/Q10BComponent";
import Q10BPEDComponent from "./customs/Q10BPEDComponent";
import Q13BComponent from "./customs/Q13BComponent";
import Q13BPEDComponent from "./customs/Q13BPEDComponent";
import QVSetComponent from "./customs/QVSetComponent";

const questions = [
    {
        id: `Q1`,
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`Do ${self === 1 ? 'you' : 'they'} have any of these life-threatening symptoms?`;
        },
        trigger: `Q1B`
    },
    {
        id: `Q1B`,
        message: ({steps: {Q2V: {value}}}) => {
            const age = Number.parseInt(value);
            if(age >= 18){
                return `
                - Bluish lips or face
                - Severe and constant pain or pressure in the chest
                - Extreme difficulty breathing (such as gasping for air, being unable to talk without catching
                    your (their) breath, severe wheezing, nostrils flaring)
                - New disorientation (acting confused)
                - Unconscious or very difficult to wake up
                - Slurred speech or difficulty speaking (new or worsening)
                - New or worsening seizures
                - Signs of low blood pressure (too weak to stand, dizziness, lightheaded, feeling cold, pale,
                    clammy skin)
                - Dehydration (dry lips and mouth, not urinating much, sunken eyes)
                `;
            }
            if(age >= 2 && age <= 17){
                return `
                 Bluish lips or face
                 Severe and constant pain or pressure in the chest
                 Extreme difficulty breathing (such as gasping for air, being unable to walk or talk without
                catching your (their) breath, severe wheezing, nostrils flaring, grunting, or using extra
                muscles around the chest to help breathe)
                 Disoriented (acting confused or very irritable)
                 Unconscious or very difficult to wake up
                 New or worsening seizures
                 Signs of low blood pressure (too weak to stand, dizziness, lightheaded, feeling cold, pale,
                clammy skin)
                 Dehydration (dry lips and mouth, not urinating much, sunken eyes)
                 Refusing to drink liquids
                 Frequent vomiting
                `;
            }
        },
        trigger: `Q1O`
    },
    {
        id: `Q1O`,
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'CM4'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q3"
            }
        ]
    },

    {
        id: 'Q3',
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `Are ${self === 1 ? 'you' : 'they'} feeling sick?`
        },
        trigger: 'Q3O'
    },
    {
        id: 'Q3O',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'Q6'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q25"
            }
        ]
    },
    {
        id: 'Q6',
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            In the two weeks before ${self === 1 ? 'you' : 'they'} felt sick, 
            did ${self === 1 ? 'you' : 'they'} care for or have close 
            contact (within 6 feet of an infected person for at least 15 minutes) with someone with 
            symptoms of COVID-19, tested for COVID-19, or diagnosed with COVID-19?
            `;
        },
        trigger: "Q6O"
    },
    {
        id: 'Q6O',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'Q7'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q14"
            },
            {
                value: 2,
                label: "I don't know",
                trigger: "Q7"
            }
        ]
    },

    {
        id: "Q7",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`Do ${self === 1 ? 'you' : 'they'} have any of the following? (check any)`;
        },
        trigger: `Q7B`
    },
    {
        id: "Q7B",
        component: <Q7BComponent/>,
        waitAction: true,
    },

    {
        id: "Q8",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`Do ${self === 1 ? 'you' : 'they'} live in a long-term care facility, nursing home, or homeless shelter?`;
        },
        trigger: "Q8O"
    },
    {
        id: 'Q8O',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'CM7'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q9"
            }
        ]
    },
    {
        id: "Q8-PED",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`Do ${self === 1 ? 'you' : 'they'} live in a group home or other setting with others 
            (pediatric skilled nursing facility, behavioral health center, juvenile detention center, or homeless shelter)?
            `;
        },
        trigger: "Q8O-PED"
    },
    {
        id: 'Q8O-PED',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'CM7'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q9-PED"
            }
        ]
    },

    {
        id: "Q9",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`
            In the last two weeks, have ${self === 1 ? 'you' : 'they'}  worked or volunteered in a healthcare facility or as a first responder? 
            Healthcare facilities include a hospital, medical or dental clinic, long-term care facility, or nursing home.
            `;
        },
        trigger: "Q9O"
    },
    {
        id: 'Q9O',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'CM9'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q10"
            }
        ]
    },
    {
        id: "Q9-PED",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`
            In the last two weeks, have ${self === 1 ? 'you' : 'they'} attended or spent time in a group setting 
            (for example school, dormitory, daycare)?
            `;
        },
        trigger: "Q9O-PED"
    },
    {
        id: "Q9O-PED",
        component: <QVSetComponent trigger={'Q10-PED'} name={'Q9OPEDV'}/>,
        waitAction: true
    },

    {
        id: "Q10",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Do any of these apply to ${self === 1 ? 'you' : 'them'}?(check any)
            `;
        },
        trigger: "Q10B"
    },
    {
        id: "Q10B",
        component: <Q10BComponent/>,
        waitAction: true
    },
    {
        id: "Q10-PED",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Do any of these apply to ${self === 1 ? 'you' : 'them'}?(check any)
            `;
        },
        trigger: "Q10B-PED"
    },
    {
        id: "Q10B-PED",
        component: <Q10BPEDComponent/>,
        waitAction: true
    },

    {
        id: "Q11",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`
            Do ${self === 1 ? 'you' : 'they'} live in a long-term care facility, nursing home, or homeless shelter?
            `;
        },
        trigger: "Q11O"
    },
    {
        id: 'Q11O',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'CM7'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q12"
            }
        ]
    },
    {
        id: "Q11-PED",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`
            Do ${self === 1 ? 'you' : 'they'} live in a group home or other setting with others 
            (pediatric skilled nursing facility, behavioral health center, juvenile detention center, or homeless shelter)?
            `;
        },
        trigger: "Q11O-PED"
    },
    {
        id: 'Q11O-PED',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'CM7'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q12-PED"
            }
        ]
    },


    {
        id: "Q12",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`
            In the last two weeks, have ${self === 1 ? 'you' : 'they'} worked or volunteered in a healthcare facility 
            or as a first responder? Healthcare facilities include a hospital, medical or dental clinic, long-term care 
            facility, or nursing home.
            `;
        },
        trigger: "Q12O"
    },
    {
        id: 'Q12O',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'CM8-CM6-T2'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q13"
            }
        ]
    },
    {
        id: "Q12-PED",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`
            In the last two weeks, have ${self === 1 ? 'you' : 'they'} attended or spent time in a group setting 
            (for example school, dormitory, daycare)?
            `;
        },
        trigger: "Q12O-PED"
    },
    {
        id: 'Q12O-PED',
        // component: <Q12OPEDComponent/>,
        component: <QVSetComponent name='Q12OPEDV' trigger='Q13-PED'/>,
        waitAction: true
    },

    {
        id: "Q13",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Do any of these apply to ${self === 1 ? 'you' : 'them'}?(check any)
            `;
        },
        trigger: "Q13B"
    },
    {
        id: "Q13B",
        component: <Q13BComponent/>,
        waitAction: true
    },
    {
        id: "Q13-PED",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Do any of these apply to ${self === 1 ? 'you' : 'them'}?(check any)
            `;
        },
        trigger: "Q13B-PED"
    },
    {
        id: "Q13B-PED",
        component: <Q13BPEDComponent/>,
        waitAction: true
    }
];

export default questions;