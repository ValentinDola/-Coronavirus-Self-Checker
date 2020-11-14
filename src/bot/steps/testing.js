import {CustomBubble} from "../index";
import React, {useState} from "react";

const T2Component = () => {
    const [self] = useState(() => Number.parseInt(localStorage.getItem("self")));
    return (
        <CustomBubble>
            <div>
                <p>{self === 1 ? 'You' : 'They'} may be eligible for COVID-19 testing.</p>
                <p>Visit your health department’s website or talk to your medical provider for more information.</p>
                <p>To find a testing location near you, visit the <a href="https://www.hhs.gov">HHS website</a>.</p>
            </div>
        </CustomBubble>
    );
};

const messages = [
    {
        id: 'T0',
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            No COVID-19 testing needed at this time.
            Based on the answers given, ${self === 1 ? 'you' : 'they'} do not need to get tested for COVID-19 at this time.
            `
        },
        end: true
    },
    {
        id: 'T2',
        component: <T2Component/>,
        asMessage: true,
        end: true
    },

    {
        id: "IT2",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            (for non-U.S. respondents) <<${self === 1 ? 'You' : 'They'} may be eligible for COVID-19 testing.>> 
            Contact your local health department or your medical provider for more information.
            `;
        },
        end: true
    }
];

export default messages;