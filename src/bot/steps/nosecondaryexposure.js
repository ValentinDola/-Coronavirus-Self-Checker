import React from "react";
import Q23BComponent from "./customs/Q23BComponent";

const questions = [
    {
        id: "Q21",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`Do ${self === 1 ? 'you' : 'they'} live in a long-term care facility, nursing home, or homeless shelter?`;
        },
        trigger: "Q21O"
    },
    {
        id: 'Q21O',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'CM7'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q22"
            }
        ]
    },

    {
        id: "Q22",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`
            In the last two weeks, have ${self === 1 ? 'you' : 'they'}  worked or volunteered in a healthcare facility or as a first responder? 
            Healthcare facilities include a hospital, medical or dental clinic, long-term care facility, or nursing home.
            `;
        },
        trigger: "Q22O"
    },
    {
        id: 'Q22O',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'CM8-CM6-T2'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q23"
            }
        ]
    },

    {
        id: "Q23",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Do any of these apply to ${self === 1 ? 'you' : 'them'}?(check any)
            `;
        },
        trigger: "Q23B"
    },
    {
        id: "Q23B",
        component: <Q23BComponent/>,
        waitAction: true
    },
];

export default questions;