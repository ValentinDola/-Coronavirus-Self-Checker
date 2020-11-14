import React, {useState} from "react";
import {CustomBubble} from "../../index";
import FormContainer from "./FormContainer";
import {_getSymptoms, _ifCheckAnySymptom, _ifCheckNone} from "./helpers";

const Q13BComponent = ({triggerNextStep, steps: {Q2V: {value}}}) => {
    const [gender] = useState(() => Number.parseInt(localStorage.getItem("gender")));
    const age = Number.parseInt(value);

    const handleClick = checked => {
        if(_ifCheckNone(checked) && age >= 65)
            return triggerNextStep({trigger: "CM9-T2"});
        if(_ifCheckNone(checked) && age < 65)
            return triggerNextStep({trigger: "CM8-T2"});
        if(_ifCheckAnySymptom(checked))
            return triggerNextStep({trigger: "CM9-T2"});
    };

    const symptoms = _getSymptoms(gender, age);

    return <CustomBubble>
        <FormContainer fields={symptoms} onSubmit={handleClick} none={true}/>
    </CustomBubble>
};

export default Q13BComponent;