import { useState } from 'react'

import './App.css'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'
import { fetchChatResponse } from './services/Api';

function App() {
  const [response,setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handelQuestionSubmit = async (question)=>{
    setLoading(true);
    setResponse(null);
    try{

      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);

    }catch(error){
      alert("Failed to get response")

    }finally{
      setLoading(false)
    }

  }

  return (
    <div className='App'>
      <header className='bg-primary text-white text-center py-4'>
        <h1>Gemini Chatbot</h1>
      </header>

    <ChatInput onSubmit={handelQuestionSubmit}/>
    <ChatResponse response={response}/>
        
      
     
    </div>
  )
}

export default App
