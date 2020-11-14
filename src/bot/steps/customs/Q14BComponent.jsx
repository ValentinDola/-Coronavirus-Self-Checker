import React from "react";
import {CustomBubble} from "../../index";
import FormContainer from "./FormContainer";
import {_containsAnyOfSub, _containsAnyOfSubOnly, _containsItem} from "./helpers";

const Q14BComponent = ({triggerNextStep, steps: {Q2V: {value}}}) => {
    const age = Number.parseInt(value);

    const primary = ['s1', 's2', 's3'];
    const secondary = ['s4', 's5', 's6', 's7'];

    const handleClick = checked => {
        if(age >= 18){
            if(checked.length === 1 && _containsAnyOfSubOnly(checked, primary)){
                return triggerNextStep({trigger: 'Q15'});
            }
            if(checked.length >= 2 && _containsAnyOfSubOnly(checked, primary)){
                return triggerNextStep({trigger: 'Q18'});
            }
            if(_containsAnyOfSubOnly(checked, secondary)){
                return triggerNextStep({trigger: 'Q21'});
            }
            if(_containsAnyOfSub(checked, secondary) && _containsItem(checked, 's9')){
                return triggerNextStep({trigger: 'Q21'});
            }
            if(_containsAnyOfSubOnly(checked, ['S9'])){
                return triggerNextStep({trigger: 'CM10'});
            }
        }else{
            if(_containsItem(checked, 's3') || checked.length >= 2){
                return triggerNextStep({trigger: 'Q15-PED'});
            }
            if(checked.length === 1 && !_containsItem(checked, 's3')){
                return triggerNextStep({trigger: 'Q18-PED'});
            }
            if(checked.length === 1 && checked[0] === 's9'){
                return triggerNextStep({trigger: 'CM10'});
            }
        }
    };

    const symptoms = age >= 18
        ? [
            {id: 's1', value: 'Fever or feeling feverish (such as chills, sweating)'},
            {id: 's2', value: 'Cough'},
            {id: 's3', value: 'Mild or moderate difficulty breathing'},
            {id: 's4', value: 'Sore throat'},
            {id: 's5', value: 'Muscle aches or body aches'},
            {id: 's6', value: 'Vomiting or diarrhea'},
            {id: 's7', value: 'New loss of taste or smell'},
            {id: 's8', value: 'Congestion or runny nose'},
            {id: 's9', value: 'Other symptoms'}
        ]
        : [
            {id: 's1', value: 'Fever or feeling feverish (such as chills, sweating)'},
            {id: 's2', value: 'Cough'},
            {id: 's3', value: 'Mild or moderate difficulty breathing (breathing slightly faster than normal, using extra\n' +
                    'muscles around the chest to help breathe)'},
            {id: 's4', value: 'Sore throat'},
            {id: 's5', value: 'Muscle aches or body aches'},
            {id: 's6', value: 'Vomiting or diarrhea'},
            {id: 's10', value: 'Stomach ache or pain in abdomen'},
            {id: 's7', value: 'New loss of taste or smell'},
            {id: 's11', value: 'Rash'},
            {id: 's12', value: 'Red eyes'},
            {id: 's8', value: 'Congestion or runny nose'},
            {id: 's9', value: 'Other symptoms'},
        ];

    return <CustomBubble>
        <FormContainer fields={symptoms} onSubmit={handleClick} none={false}/>
    </CustomBubble>
};

export default Q14BComponent;