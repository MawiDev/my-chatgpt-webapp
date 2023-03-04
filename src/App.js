import './App.css'
import { useState } from 'react';
import TextInput from './components/TextInput';
import ShowResponse from './components/ShowResponse';
import ResponseList from './components/ResponseList';

function App() {
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');
  const [responses, setResponses] = useState([]);
  const [isSending, setIsSending] = useState(false);

  async function sendGpt(text) {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    const prompt = text;
    setIsSending(true);
  
    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: prompt,
          max_tokens: 4000,
          n: 1,
          temperature: 0.7,
        })
      });
  
      const data = await response.json();
      const gptText = data.choices[0].text.trim();
      setResponse(gptText);
      setResponses([...responses, gptText]);
    } catch (error) {
      console.error(error);
      setResponse('Error: Failed to connect to OpenAI API');
    }
  
    setIsSending(false);
  }
  

  function handleTextChange(value) {
    setText(value);
  }

  function handleSendClick() {
    sendGpt(text);
    setText('');
  }

  return (
    <div className='bg-neutral-900 h-screen'>
      <TextInput text={text} onTextChange={handleTextChange} onSendClick={handleSendClick} disabled={isSending} />
      <ShowResponse isLoading={isSending} />
      <ResponseList responses={responses} />
    </div>
  );
}

export default App;

