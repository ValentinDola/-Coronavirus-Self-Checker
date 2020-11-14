import React, {useState} from "react";
import {CustomBubble} from "../../index";
import FormContainer from "./FormContainer";
import {_getSymptomsPED, _ifCheckAnySymptom, _ifCheckNone} from "./helpers";

const Q17BPEDComponent = ({triggerNextStep, steps: {Q2V: {value}}}) => {
    const [gender] = useState(() => Number.parseInt(localStorage.getItem("gender")));
    const [Q16OPEDV] = useState(() => Number.parseInt(localStorage.getItem("Q16OPEDV")));
    const age = Number.parseInt(value);

    const handleClick = checked => {
        if(Q16OPEDV === 0 && _ifCheckAnySymptom(checked))
            return triggerNextStep({trigger: "CM9-T2"});
        if(Q16OPEDV === 1 && _ifCheckAnySymptom(checked))
            return triggerNextStep({trigger: "CM9-CM24-T2"});
        if(Q16OPEDV === 0 && _ifCheckNone(checked))
            return triggerNextStep({trigger: "CM9-T2"});
        if(Q16OPEDV === 1 && _ifCheckNone(checked))
            return triggerNextStep({trigger: "CM9-CM24-T2"});
    };

    const symptoms = _getSymptomsPED(gender, age);

    return <CustomBubble>
        <FormContainer fields={symptoms} onSubmit={handleClick} none={true}/>
    </CustomBubble>
};

export default Q17BPEDComponent;