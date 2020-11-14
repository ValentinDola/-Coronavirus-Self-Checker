import React from "react";
import Q14BComponent from "./customs/Q14BComponent";
import Q17BComponent from "./customs/Q17BComponent";
import Q17BPEDComponent from "./customs/Q17BPEDComponent";
import Q20BComponent from "./customs/Q20BComponent";
import Q20BPEDComponent from "./customs/Q20BPEDComponent";
import QVSetComponent from "./customs/QVSetComponent";

const questions = [
    {
        id: 'Q14',
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`Do ${self === 1 ? 'you' : 'they'} have any of the following? (check any)`;
        },
        trigger: `Q14B`
    },
    {
        id: "Q14B",
        component: <Q14BComponent/>,
        waitAction: true,
    },

    {
        id: "Q15",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`Do ${self === 1 ? 'you' : 'they'} live in a long-term care facility, nursing home, or homeless shelter?`;
        },
        trigger: "Q15O"
    },
    {
        id: 'Q15O',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'CM7'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q16"
            }
        ]
    },
    {
        id: "Q15-PED",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`Do ${self === 1 ? 'you' : 'they'} live in a group home or other setting with others 
            (pediatric skilled nursing facility, behavioral health center, juvenile detention center, or homeless shelter)?
            `;
        },
        trigger: "Q15O-PED"
    },
    {
        id: 'Q15O-PED',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'CM7'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q16-PED"
            }
        ]
    },

    {
        id: "Q16",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`
            In the last two weeks, have ${self === 1 ? 'you' : 'they'}  worked or volunteered in a healthcare facility or as a first responder? 
            Healthcare facilities include a hospital, medical or dental clinic, long-term care facility, or nursing home.
            `;
        },
        trigger: "Q16O"
    },
    {
        id: 'Q16O',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'CM8-CM6-T2'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q17"
            }
        ]
    },
    {
        id: "Q16-PED",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`
            In the last two weeks, have ${self === 1 ? 'you' : 'they'} attended or spent time in a group setting 
            (for example school, dormitory, daycare)?
            `;
        },
        trigger: "Q16O-PED"
    },
    {
        id: "Q16O-PED",
        // component: <Q16OPEDComponent/>,
        component: <QVSetComponent name='Q16OPEDV' trigger='Q17-PED'/>,
        waitAction: true
    },

    {
        id: "Q17",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Do any of these apply to ${self === 1 ? 'you' : 'them'}?(check any)
            `;
        },
        trigger: "Q17B"
    },
    {
        id: "Q17B",
        component: <Q17BComponent/>,
        waitAction: true
    },
    {
        id: "Q17-PED",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Do any of these apply to ${self === 1 ? 'you' : 'them'}?(check any)
            `;
        },
        trigger: "Q17B-PED"
    },
    {
        id: "Q17B-PED",
        component: <Q17BPEDComponent/>,
        waitAction: true
    },

    {
        id: "Q18",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`Do ${self === 1 ? 'you' : 'they'} live in a long-term care facility, nursing home, or homeless shelter?`;
        },
        trigger: "Q18O"
    },
    {
        id: 'Q18O',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'CM7'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q19"
            }
        ]
    },
    {
        id: "Q18-PED",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`Do ${self === 1 ? 'you' : 'they'} live in a group home or other setting with others 
            (pediatric skilled nursing facility, behavioral health center, juvenile detention center, or homeless shelter)?
            `;
        },
        trigger: "Q18O-PED"
    },
    {
        id: 'Q18O-PED',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'CM7'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q19-PED"
            }
        ]
    },

    {
        id: "Q19",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`
            In the last two weeks, have ${self === 1 ? 'you' : 'they'}  worked or volunteered in a healthcare facility or as a first responder? 
            Healthcare facilities include a hospital, medical or dental clinic, long-term care facility, or nursing home.
            `;
        },
        trigger: "Q19O"
    },
    {
        id: 'Q19O',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'CM9'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q20"
            }
        ]
    },
    {
        id: "Q19-PED",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`
            In the last two weeks, have ${self === 1 ? 'you' : 'they'} attended or spent time in a group setting 
            (for example school, dormitory, daycare)?
            `;
        },
        trigger: "Q19O-PED"
    },
    {
        id: "Q19O-PED",
        // component: <Q19OPEDComponent/>,
        component: <QVSetComponent name='Q19OPEDV' trigger='Q20-PED'/>,
        waitAction: true
    },

    {
        id: "Q20",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Do any of these apply to ${self === 1 ? 'you' : 'them'}?(check any)
            `;
        },
        trigger: "Q20B"
    },
    {
        id: "Q20B",
        component: <Q20BComponent/>,
        waitAction: true
    },
    {
        id: "Q20-PED",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Do any of these apply to ${self === 1 ? 'you' : 'them'}?(check any)
            `;
        },
        trigger: "Q20B-PED"
    },
    {
        id: "Q20B-PED",
        component: <Q20BPEDComponent/>,
        waitAction: true
    },
];

export default questions;