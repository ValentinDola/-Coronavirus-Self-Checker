import {Button, CustomBubble} from "../../index";
import React from "react";

const QVSetComponent = ({triggerNextStep, name, trigger}) => {
    const handleClick = yes => {
        localStorage.setItem(name, `${yes}`);
        triggerNextStep({trigger});
    };
    return <CustomBubble>
        <Button style={{marginRight: '.2rem'}} primary onClick={() => handleClick(1)}>Yes</Button>
        <Button primary onClick={() => handleClick(0)}>No</Button>
    </CustomBubble>
};

export default QVSetComponent;