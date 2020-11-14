const care = [
    {
        id: "CM1-CM16-T0",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `Sounds like ${self === 1 ? 'you' : 'they'} are feeling ok.`;
        },
        trigger: "CM16"
    },

    {
        id: "CM4",
        message: `
         Urgent medical attention may be needed. Please call 911 or go to the Emergency Department.
        `,
        trigger: "CM4B"
    },
    {
        id: "CM4B",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `Based on ${self === 1 ? 'your' : 'their'} symptoms, you may need urgent medical care. 
            Please call 911 or go to the nearest emergency department.`
        },
        trigger: "CM4C"
    },
    {
        id: 'CM4C',
        message: 'Tell the 911 operator or emergency staff if you have had contact with someone with COVID-19.',
        end: true
    },

    {
        id: 'CM5',
        message: 'Call a medical provider.',
        trigger: "CM5B"
    },
    {
        id: "CM5B",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Sorry ${self === 1 ? 'you' : 'they'} are not feeling well. ${self === 1 ? 'Your' : 'Their'} symptoms may be related to COVID-19. 
            ${self === 1 ? 'You' : 'They'} also have medical conditions that may put ${self === 1 ? 'you' : 'them'} at risk of becoming more seriously ill.
            • Call ${self === 1 ? 'your' : 'their'} medical provider, clinician advice line, or telemedicine provider. • ${self === 1 ? 'Stay' : 'Keep them'} home except to get medical care.
            o Do not go to work, school, or public areas including grocery stores, pharmacies, or restaurants. Consider delivery options for food and medicine.
            o Do not use public transportation or ride sharing
            • If ${self === 1 ? 'you' : 'they'} feel worse, and you think it is an emergency, call 911 or seek medical care
            immediately.
             Consider using telehealth services if available.
             Learn how to take care of yourself or someone else who is sick. 
            • Take these steps to help protect others from getting sick
            `;
        },
        trigger: "T2"
    },

    {
        id: 'CM6',
        message: "Contact the occupational health provider at your workplace immediately.",
        trigger: "CM6B"
    },
    {
        id: "CM6B",
        message: "Tell the occupational health provider (or supervisor) in your workplace that you’re feeling sick as soon as possible.",
        trigger: "T2"
    },

    {
        id: 'CM7',
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `Contact a medical provider in the care center, nursing home, 
            or homeless shelter where ${self === 1 ? 'you' : 'they'} live.
            Tell a caregiver in ${self === 1 ? 'your' : 'their'} facility that ${self === 1 ? 'you' : 'they'} are sick 
            and need to see a medical provider as soon as possible. Living in a long-term care facility or nursing 
            home may put ${self === 1 ? 'you' : 'them'} at a higher risk for severe illness.
            `;
        },
        trigger: "CM7B"
    },
    {
        id: 'CM7B',
        message: () => {
            return `
            Help protect others from getting sick:
             Stay in your room as much as possible except to get medical care.
             Cover your coughs and sneezes with a tissue or the inside of your elbow.
             Wash your hands often with soap and water.
             Avoid close contact with other people. Stay at least 6 feet away from other people.
             Wear a mask when around others.
             Clean and disinfect frequently touched surfaces in your room.
             Monitor your health and notify a medical provider if you think you are getting sicker.
            `;
        },
        trigger: "T2"
    },

    {
        id: "CM8-T2",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
             ${self === 1 ? 'Stay' : 'Keep them'} home and take care of ${self === 1 ? 'yourself' : 'them'}. 
             Call ${self === 1 ? 'your' : 'their'} medical provider if you get worse.
             Sorry ${self === 1 ? 'you are' : 'your child is'} not feeling well. 
             Your symptoms may be related to COVID-19. 
              ${self === 1 ? 'Stay' : 'Keep them'} home except to get medical care.
                o Do not go to work, school, or public areas including grocery stores, pharmacies, or restaurants.
                 Consider delivery options for food and medicine.
                o Do not use public transportation or ride sharing.
                 If ${self === 1 ? 'you' : 'they'} feel worse, and you think it is an emergency, call 911 or seek medical care
                immediately.
                 Learn how to take care of yourself or someone else who is sick.
                 Take steps to help protect others from getting sick.
            `;
        },
        trigger: "T2"
    },

    {
        id: "CM8-CM6-T2",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
             ${self === 1 ? 'Stay' : 'Keep them'} home and take care of ${self === 1 ? 'yourself' : 'them'}. 
             Call ${self === 1 ? 'your' : 'their'} medical provider if you get worse.
             Sorry ${self === 1 ? 'you are' : 'your child is'} not feeling well. 
             Your symptoms may be related to COVID-19. 
              ${self === 1 ? 'Stay' : 'Keep them'} home except to get medical care.
                o Do not go to work, school, or public areas including grocery stores, pharmacies, or restaurants.
                 Consider delivery options for food and medicine.
                o Do not use public transportation or ride sharing.
                 If ${self === 1 ? 'you' : 'they'} feel worse, and you think it is an emergency, call 911 or seek medical care
                immediately.
                 Learn how to take care of yourself or someone else who is sick.
                 Take steps to help protect others from getting sick.
            `;
        },
        trigger: "CM6"
    },

    {
        id: "CM9",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            ${self === 1 ? 'Stay' : 'Keep them'} home and 
            take care of ${self === 1 ? 'yourself' : 'them'}. 
            Call ${self === 1 ? 'your' : 'their'} medical provider
            `;
        },
        trigger: "CM9B"
    },
    {
        id: "CM9B",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Sorry ${self === 1 ? 'you' : 'they'} are not feeling well. ${self === 1 ? 'Your' : 'Their'} symptom(s) may be related to COVID-19.
             Call ${self === 1 ? 'your' : 'their'} medical provider, clinician advice line, or telemedicine provider.
             ${self === 1 ? 'Stay' : 'Keep them'} home except to get medical care.
            o Do not go to work, school, or public areas including grocery stores, pharmacies, or restaurants. Consider delivery options for food and medicine.
            o Do not use public transportation or ride sharing.
             If ${self === 1 ? 'you' : 'they'} feel worse, and you think it is an emergency, call 911 or seek medical care
            immediately.
             Consider using telehealth services if available.
             Learn how to take care of yourself or someone else who is sick.
             Take steps to help protect others from getting sick.
            `;
        },
        trigger: "CM6"
    },

    {
        id: "CM9-T2",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            ${self === 1 ? 'Stay' : 'Keep them'} home and 
            take care of ${self === 1 ? 'yourself' : 'them'}. 
            Call ${self === 1 ? 'your' : 'their'} medical provider
            `;
        },
        trigger: "CM9B-T2"
    },
    {
        id: "CM9B-T2",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Sorry ${self === 1 ? 'you' : 'they'} are not feeling well. ${self === 1 ? 'Your' : 'Their'} symptom(s) may be related to COVID-19.
             Call ${self === 1 ? 'your' : 'their'} medical provider, clinician advice line, or telemedicine provider.
             ${self === 1 ? 'Stay' : 'Keep them'} home except to get medical care.
            o Do not go to work, school, or public areas including grocery stores, pharmacies, or restaurants. Consider delivery options for food and medicine.
            o Do not use public transportation or ride sharing.
             If ${self === 1 ? 'you' : 'they'} feel worse, and you think it is an emergency, call 911 or seek medical care
            immediately.
             Consider using telehealth services if available.
             Learn how to take care of yourself or someone else who is sick.
             Take steps to help protect others from getting sick.
            `;
        },
        trigger: "T2"
    },

    {
        id: "CM9-CM24-T2",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            ${self === 1 ? 'Stay' : 'Keep them'} home and 
            take care of ${self === 1 ? 'yourself' : 'them'}. 
            Call ${self === 1 ? 'your' : 'their'} medical provider
            `;
        },
        trigger: "CM9B-CM24-T2"
    },
    {
        id: "CM9B-CM24-T2",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Sorry ${self === 1 ? 'you' : 'they'} are not feeling well. ${self === 1 ? 'Your' : 'Their'} symptom(s) may be related to COVID-19.
             Call ${self === 1 ? 'your' : 'their'} medical provider, clinician advice line, or telemedicine provider.
             ${self === 1 ? 'Stay' : 'Keep them'} home except to get medical care.
            o Do not go to work, school, or public areas including grocery stores, pharmacies, or restaurants. Consider delivery options for food and medicine.
            o Do not use public transportation or ride sharing.
             If ${self === 1 ? 'you' : 'they'} feel worse, and you think it is an emergency, call 911 or seek medical care
            immediately.
             Consider using telehealth services if available.
             Learn how to take care of yourself or someone else who is sick.
             Take steps to help protect others from getting sick.
            `;
        },
        trigger: "CM24-T2"
    },

    {
        id: 'CM10',
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Sorry ${self === 1 ? 'you' : 'they'} are feeling sick. Stay home (keep them home) and monitor your (their) symptoms. 
            Call ${self === 1 ? 'your' : 'their'} medical provider if you get worse
            `;
        },
        trigger: "CM10B"
    },
    {
        id: 'CM10B',
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Watch for COVID-19 symptoms. If ${self === 1 ? 'you' : 'they'} develop any of these symptoms or 
            if ${self === 1 ? 'you' : 'they'} start to feel worse, 
            call ${self === 1 ? 'your' : 'their'} medical provider, clinician advice line, or telemedicine provider.
            `;
        },
        trigger: "CM10C"
    },
    {
        id: 'CM10C',
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Here are some steps that may help ${self === 1 ? 'your' : 'them'} feel better:
             Stay at home and rest.
             Drink plenty of water and other clear liquids to prevent fluid loss (dehydration).
             Cover your coughs and sneezes.
             Wash your hands often with soap and water.
            `;
        },
        trigger: "T0"
    },

    {
        id: "CM11",
        message: "Please check with your Ministry of Health or local health department for additional information and guidelines about COVID-19 in your location.",
        trigger: "IT2"
    },

    {
        id: "CM12",
        message: "Please consent to use the Coronavirus Self-Checker. Refresh the page to start again.",
        end: true
    },

    {
        id: "CM13",
        message: `Thanks! Your location has its own self-assessment tool. Please click here** to be directed to it.`,
        end: true
    },

    {
        id: "CM15-T2",
        message: `
        Contact the occupational health provider at your workplace.
        Tell your occupational health provider (or supervisor) that you may have been in contact with someone with suspected COVID-19. You may be asked to wear a mask over your nose and mouth to protect yourself and those around you.
         Check your temperature twice a day for 14 days.
         Watch for COVID-19 symptoms. Learn more about COVID-19 and how you can protect
        yourself and others on the CDC website.
        `,
        trigger: "T2"
    },

    {
        id: "CM16",
        message: "Monitor for symptoms.",
        trigger: "CM16B"
    },
    {
        id: "CM16B",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Watch for COVID-19 symptoms. If ${self === 1 ? 'you' : 'they'} develop symptoms, call ${self === 1 ? 'your' : 'their'} medical provider, 
            clinician advice line, or telemedicine provider.
            Learn more about COVID-19 and steps ${self === 1 ? 'you' : 'they'} can take to protect ${self === 1 ? 'yourself' : 'themselves'} and others on the CDC website.
            `;
        },
        trigger: "T0"
    },

    {
        id: "CM17-T2",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Monitor for symptoms, wear a mask.
            Watch for COVID-19 symptoms. If ${self === 1 ? 'you' : 'they'} develop symptoms, call your medical provider, clinician advice line, 
            or telemedicine provider. When around other people, ${self === 1 ? 'you' : 'they'} will be asked to wear a mask over ${self === 1 ? 'your' : 'their'}
            nose and mouth to protect ${self === 1 ? 'yourself' : 'themselves'} and those around ${self === 1 ? 'you' : 'them'}. Masks should not be used for 
            anyone who has trouble breathing, is unconscious, incapacitated, or otherwise unable to remove the mask on their own.
            `;
        },
        trigger: "T2"
    },

    {
        id: "CM17-CM26-T2",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Monitor for symptoms, wear a mask.
            Watch for COVID-19 symptoms. If ${self === 1 ? 'you' : 'they'} develop symptoms, call your medical provider, clinician advice line, 
            or telemedicine provider. When around other people, ${self === 1 ? 'you' : 'they'} will be asked to wear a mask over ${self === 1 ? 'your' : 'their'}
            nose and mouth to protect ${self === 1 ? 'yourself' : 'themselves'} and those around ${self === 1 ? 'you' : 'them'}. Masks should not be used for 
            anyone who has trouble breathing, is unconscious, incapacitated, or otherwise unable to remove the mask on their own.
            `;
        },
        trigger: "CM26-T2"
    },

    {
        id: "CM18-T0",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Monitor for symptoms, stay at home
             Stay home for 14 days.
             Take ${self === 1 ? 'your' : 'their'} temperature twice a day and watch for symptoms of COVID-19. Practice
            social distancing.
            o Stay at least 6 feet away from others and stay out of crowded places.
             If possible, stay away from people who are at higher risk for getting very sick from COVID- 19.
             If ${self === 1 ? 'you' : 'they'} develop symptoms, follow CDC guidance.
            `;
        },
        trigger: "T0"
    },

    {
        id: "CM19",
        message: `
        Contact a medical provider.
        This tool is intended for people 2 years or older.
        Please call the child’s medical provider, clinician advice line, or telemedicine provider.
        `,
        end: true
    },

    {
        id: "CM20",
        message: `Please ask your parent or guardian to help you complete these questions.`,
        end: true
    },

    {
        id: "CM21",
        message: `Please ask your parent or guardian to answer these questions with you.`,
        trigger: 'Q5'
    },

    {
        id: "CM22",
        message: `
        Ask a parent or guardian to assist you, or if taking by yourself, 
        share these results with your parent/guardian.
        `,
        trigger: 'Q5'
    },

    {
        id: "CM24-T2",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Contact an administrator or nurse at ${self === 1 ? 'your' : 'their'} school or daycare as soon as possible.
            Tell the administrator or nurse at ${self === 1 ? 'your' : 'their'} school or daycare that ${self === 1 ? 'you' : 'they'} are feeling sick.
            `;
        },
        trigger: "T2"
    },

    {
        id: "CM25-T2",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Contact a medical provider in the care center, nursing home, or homeless shelter where ${self === 1 ? 'you' : 'they'} live.
            Tell a caregiver in ${self === 1 ? 'your' : 'their'} facility that ${self === 1 ? 'you' : 'they'} may have been in close contact with someone who may have COVID-19. 
            They can help prevent infections at ${self === 1 ? 'your' : 'their'} facility or shelter.
            `;
        },
        trigger: "CM25B-T2"
    },
    {
        id: "CM25B-T2",
        message: `
        Help protect others from getting sick:
         Stay in your room as much as possible except to get medical care.
         Cover your coughs and sneezes with a tissue or the inside of your elbow.
         Clean your hands often.
         Avoid close contact with other people. Stay at least 6 feet away from other people.
         Wear a mask when around others, if possible.
         Monitor your health and notify a medical provider if you start to feel sick.
        `,
        trigger: "T2"
    },

    {
        id: "CM26-T2",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Contact an administrator or nurse at ${self === 1 ? 'your' : 'their'} school or daycare.
            Tell an administrator or nurse at ${self === 1 ? 'your' : 'their'} school or daycare that ${self === 1 ? 'you' : 'they'} may have been in contact
            with someone with suspected COVID-19.
             Wear a mask over ${self === 1 ? 'your' : 'their'} nose and mouth to protect ${self === 1 ? 'you' : 'them'} and those around ${self === 1 ? 'you' : 'them'}.
             Check ${self === 1 ? 'your' : 'their'} temperature twice a day for 14 days.
             Watch for COVID-19 symptoms. Learn more about COVID-19 and how ${self === 1 ? 'you' : 'they'} can protect
            ${self === 1 ? 'yourself' : 'themselves'} and others on the CDC website.
            `;
        },
        trigger: "T2"
    }
];

export default care;