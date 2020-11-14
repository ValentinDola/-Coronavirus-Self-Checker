import React, {useState} from "react";
import {Button, CustomForm} from "../../index";
import {_addOrRemove, _doCheck} from "./helpers";

type IField = { id: string, value: string };

interface IFormContainerProps {
  fields: IField[],
  onSubmit: (checked: string[]) => void,
  none: boolean
}

const FormContainer = ({fields, onSubmit, none = true}: IFormContainerProps): any => {
  const [checked, setChecked] = useState<string[]>([]);
  const handleCheck = ({id}: IField) => {
    setChecked(list => none ? _doCheck(list, id) : _addOrRemove(list, id));
  };
  const handleClick = () => {
    onSubmit(checked);
  };
  return (
    <CustomForm>
      {
        fields.map(s => {
          const id = `${s.id}${+new Date()}`;
          return (
            <label key={id} htmlFor={id}>
              <input
                checked={(new Set(checked)).has(s.id)}
                onChange={() => handleCheck(s)}
                type="checkbox"
                id={id}/>
              {s.value}
            </label>
          );
        })
      }
      {checked.length > 0 && <Button onClick={handleClick}>Submit</Button>}
    </CustomForm>
  );
};

export default FormContainer;