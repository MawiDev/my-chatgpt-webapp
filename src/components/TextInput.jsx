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
        <h1 className="p-2 text-lg font-bold">
          Insert some text:
        </h1>
        <input
          className='border m-2 p-2'
          type="text"
          value={props.text}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          disabled={props.disabled}
        />
        <button onClick={props.onSendClick} className='border p-2' disabled={props.disabled}>send</button>
      </div>
    );
  }
  