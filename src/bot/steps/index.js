import CareMessages from './care';
import AssessmentQuestions from './assessment';
import EmergencyQuestions from './emergency';
import TestingMessages from './testing';
import NonExposurePathWayQuestions from './nonexposure';
import AsymptomaticPathWayQuestions from './asymptomaticpathway';
import NonSecondaryExposurePathWayQuestions from './nosecondaryexposure';
import React, {useEffect} from "react";

const NeedConsent = ({triggerNextStep}) => {
    useEffect(() => {
        const d = Number.parseInt(localStorage.getItem('disagree')) + 1;
        if(d === 3){
            triggerNextStep({trigger: 'CM12'});
        }else{
            localStorage.setItem('disagree', `${d}`);
            triggerNextStep({trigger: 'Disclaimer'});
        }
    }, [triggerNextStep]);

    return <span>"Please consent to use the Coronavirus Self- Checker."</span>
};

const steps = () => {
    return [
        {
            id: "Disclaimer",
            message: `
            The purpose of the Coronavirus Self-Checker is to help you make decisions about seeking appropriate medical care. 
            This system is not intended for the diagnosis or treatment of disease, including COVID-19.
            This project was made possible through a partnership with the CDC Foundation and is enabled by 
            Microsoft’s Azure platform. 
            CDC’s collaboration with a non-federal organization does not imply an endorsement of any one particular service, 
            product, or enterprise.
            `,
            trigger: "consent"
        },
        {
            id: "consent",
            options: [
                {
                    value: "agree",
                    label: "I agree",
                    trigger: "Greeting"
                },
                {
                    value: "disagree",
                    label: "I disagree",
                    trigger: "Need consent"
                }
            ],
        },
        {
            id: "Need consent",
            component: <NeedConsent/>,
            asMessage: true
        },
        {
            id: "Greeting",
            message: `
            Hi, I’m Kojo. 
            I’m going to ask you some questions. 
            I will use your answers to give you advice about the level of medical care you should seek.
            `,
            trigger: "Emergency"
        },
        {
            id: "Emergency",
            message: `If you are not experiencing a life-threatening emergency, let’s get started.`,
            trigger: "Notice"
        },
        {
            id: "Notice",
            message: "During the assessment, you can refresh the page if you need to start again.",
            trigger: "Q0"
        },
        ...CareMessages,
        ...AssessmentQuestions,
        ...TestingMessages,
        ...EmergencyQuestions,
        ...NonExposurePathWayQuestions,
        ...NonSecondaryExposurePathWayQuestions,
        ...AsymptomaticPathWayQuestions
    ]
};

export default steps;