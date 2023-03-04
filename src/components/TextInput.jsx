export default function TextInput(props) {
    function handleTextChange(event) {
      props.onTextChange(event.target.value);
    }
  
    function handleKeyDown(event) {
      if (event.key === 'Enter') {
        props.onSendClick();
      }
    }
  
    return (
      <div>
        <h1 className="mx-8 py-4 text-lg text-neutral-400 font-mono underline underline-offset-8">
          Insert some text:
        </h1>
        <input
          className='border mx-8 my-4 p-2 bg-neutral-300'
          type="text"
          value={props.text}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          disabled={props.disabled}
        />
        <button onClick={props.onSendClick} className='border-2 border-neutral-400 rounded-md bg-neutral-500 text-lg font-mono font-bold text-neutral-900 p-2' disabled={props.disabled}>send</button>
      </div>
    );
  }
  