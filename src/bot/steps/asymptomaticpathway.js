const questions = [
    {
        id: 'Q25',
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            In the two weeks before ${self === 1 ? 'you' : 'they'} felt sick, 
            did ${self === 1 ? 'you' : 'they'} care for or have close 
            contact (within 6 feet of an infected person for at least 15 minutes) with someone with 
            symptoms of COVID-19, tested for COVID-19, or diagnosed with COVID-19?
            `;
        },
        trigger: "Q25O"
    },
    {
        id: 'Q25O',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: ({steps: {Q2V: value}}) => {
                    const age = Number.parseInt(value);
                    if(age >= 18) return "Q26";
                    return "Q26-PED"
                }
            },
            {
                value: 0,
                label: "No",
                trigger: "CM1-CM16-T0"
            },
            {
                value: 2,
                label: "I don't know",
                trigger: ({steps: {Q2V: value}}) => {
                    const age = Number.parseInt(value);
                    if(age >= 18) return "Q26";
                    return "Q26-PED"
                }
            }
        ]
    },

    {
        id: "Q26",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`Do ${self === 1 ? 'you' : 'they'} live in a long-term care facility, nursing home, or homeless shelter?`;
        },
        trigger: "Q26O"
    },
    {
        id: 'Q26O',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'CM25-T2'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q27"
            }
        ]
    },
    {
        id: "Q26-PED",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`Do ${self === 1 ? 'you' : 'they'} live in a group home or other setting with others 
            (pediatric skilled nursing facility, behavioral health center, juvenile detention center, or homeless shelter)?
            `;
        },
        trigger: "Q26O-PED"
    },
    {
        id: 'Q26O-PED',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'CM25-T2'
            },
            {
                value: 0,
                label: "No",
                trigger: "Q27-PED"
            }
        ]
    },

    {
        id: "Q27",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`
            In the last two weeks, have ${self === 1 ? 'you' : 'they'}  worked or volunteered in a healthcare facility or as a first responder? 
            Healthcare facilities include a hospital, medical or dental clinic, long-term care facility, or nursing home.
            `;
        },
        trigger: "Q27O"
    },
    {
        id: 'Q27O',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'Q28'
            },
            {
                value: 0,
                label: "No",
                trigger: "CM18-T0"
            }
        ]
    },
    {
        id: "Q27-PED",
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return`
            In the last two weeks, have ${self === 1 ? 'you' : 'they'} attended or spent time in a group setting 
            (for example school, dormitory, daycare)?
            `;
        },
        trigger: "Q27O-PED"
    },
    {
        id: "Q27O-PED",
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: 'CM17-CM26-T2'
            },
            {
                value: 0,
                label: "No",
                trigger: "CM18-T0"
            }
        ]
    },

    {
        id: 'Q28',
        message: () => {
            const self = Number.parseInt(localStorage.getItem('self'));
            return `
            Did ${self === 1 ? 'you' : 'they'} wear personal protective equipment (N95 or surgical mask, gown, eye protection) 
            while working or volunteering at the healthcare facility?
            `;
        },
        trigger: "Q28O"
    },
    {
        id: 'Q28O',
        options: [
            {
                value: 1,
                label: "Yes",
                trigger: "CM17-T2"
            },
            {
                value: 0,
                label: "No",
                trigger: "CM15-T2"
            }
        ]
    },
];

export default questions;