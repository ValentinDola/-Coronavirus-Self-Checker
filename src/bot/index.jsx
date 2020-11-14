import React from "react";
import ChatBot from 'react-simple-chatbot';
import bot from '../robot.svg';
import user from '../user.svg';
import styled, {ThemeProvider} from 'styled-components';
import getSteps from "./steps";

import './index.css';

export const Button = styled.button`
  background: ${({primary}) => primary ? "#007CFF" : "white"};
  color: ${({primary}) => primary ? "white" : "#007CFF"};

  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #007CFF;
  border-radius: 5px;
`;

export const CustomBubble = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const CustomForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: .8rem;
    color: #007CFF;
`;

const theme = {
  fontFamily: 'Menlo',
  botBubbleColor: '#007CFF',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#007CFF',
  headerBgColor: '#007CFF',
  headerFontColor: '#fff',
};

const Chat = () => {
  React.useEffect(() => {
    window.localStorage.setItem('disagree', '0');
  }, []);

  return (
    <div className="Container">
      <ThemeProvider theme={theme}>
        <ChatBot
          hideHeader={true}
          botAvatar={bot}
          userAvatar={user}
          style={{width: '100%', background: 'white', boxShadow: 'none', height: '100%'}}
          steps={getSteps()} />
      </ThemeProvider>
    </div>
  );
};

export default Chat;