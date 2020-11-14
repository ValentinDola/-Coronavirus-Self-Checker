import React, {useState} from "react";
import {Button, CustomBubble} from "../index";

const Q4OComponent = ({triggerNextStep}) => {
    const handleClick = self => {
        localStorage.setItem("self", `${self}`);
        triggerNextStep({trigger: 'Q2'});
    };
    return <CustomBubble>
        <Button style={{marginRight: '.2rem'}} primary onClick={() => handleClick(1)}>My Self</Button>
        <Button primary onClick={() => handleClick(0)}>Someone else</Button>
    </CustomBubble>
};

const Q4OCM11Component = ({triggerNextStep}) => {
    const handleClick = self => {
        localStorage.setItem("self", `${self}`);
        triggerNextStep({trigger: 'CM11'});
    };
    return <CustomBubble>
        <Button style={{marginRight: '.2rem'}} primary onClick={() => handleClick(1)}>My Self</Button>
        <Button primary onClick={() => handleClick(0)}>Someone else</Button>
    </CustomBubble>
};

const Q5OComponent = ({triggerNextStep}) => {
    const handleClick = gender => {
        localStorage.setItem("gender", `${gender}`);
        triggerNextStep({trigger: 'Q1'});
    };
    return <CustomBubble>
        <Button style={{marginRight: '.2rem'}} primary onClick={() => handleClick(1)}>Male</Button>
        <Button style={{marginRight: '.2rem'}} primary onClick={() => handleClick(0)}>Female</Button>
        <Button primary onClick={() => handleClick(2)}>Other</Button>
    </CustomBubble>
};

const Q2Component = () => {
    const [self] = useState(() => Number.parseInt(localStorage.getItem("self")));
    return `What is ${self === 1 ? "your" : "their"} age?`;
};

const questions = [
    {
        id: "Q0",
        message: `Are you in the United States or a U.S. territory right now?`,
        trigger: "Q0O"
    },
    {
        id: "Q0O",
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'Q0A'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q4-CM11-IT2"
            }
        ]
    },

    {
        id: 'Q0A',
        message: `Where in the United States or in which U.S. territory are you currently located?`,
        trigger: 'Q0AV'
    },
    {
        id: 'Q0AV',
        user: true,
        trigger: ({value}) => {
            if(value === 'LA') return 'CM13';
            return 'Q4';
        },
        validator: (value) => {
            if (value === undefined || value === null || value.length === 0){
                return 'value must be a US Location';
            }

            return true;
        }
    },

    {
        id: "Q4O",
        component: <Q4OComponent/>,
        waitAction: true,
        trigger: 'Q2'
    },
    {
        id: "Q4O-CM11-IT2",
        component: <Q4OCM11Component/>,
        waitAction: true,
        trigger: 'CM11'
    },

    {
        id: "Q2",
        component: <Q2Component/>,
        asMessage: true,
        trigger: 'Q2V'
    },
    {
        id: "Q2V",
        user: true,
        validator: (value) => {
            if (value === undefined || value === null || isNaN(value) || isNaN(Number.parseInt(value))) {
                return 'value must be a number';
            } else if (value < 0) {
                return 'value must be positive';
            } else if (value > 150) {
                return `${value}? Come on!`;
            }
            return true;
        },
        trigger: ({value}) => {
            const age = Number.parseInt(value);
            if (age < 1) return 'CM19';
            const self = Number.parseInt(localStorage.getItem('self'));
            if ((age >= 2 && age <= 9) && self === 1) return 'CM20';
            if ((age >= 10 && age <= 12) && self === 1) return 'CM21';
            if ((age >= 13 && age <= 17) && self === 1) return 'CM22';
            return 'Q5';
        }
    },

    {
        id: "Q4",
        message: "Are you answering for yourself or someone else?",
        trigger: "Q4O"
    },

    {
        id: "Q4-CM11-IT2",
        message: "Are you answering for yourself or someone else?",
        trigger: "Q4O-CM11-IT2"
    },

    {
        id: 'Q5',
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `What is ${self === 1 ? "your" : "their"} gender?`;
        },
        trigger: "Q5O"
    },
    {
        id: "Q5O",
        component: <Q5OComponent/>,
        waitAction: true,
        trigger: 'Q1'
    }
];

export default questions;