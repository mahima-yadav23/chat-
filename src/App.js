import  { ChatEngine } from 'react-chat-engine';

import ChatFeed  from './components/ChatFeed';

import './App.css'; 



const App = () => {
    return(
      <ChatEngine 
         height="100vh"
         projectID="37b14523-1549-4429-839b-4c4fff9cb254"
         userName="javascriptmastery"
         userSecret="123123"
         renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
         />
    );
} 

export default App;