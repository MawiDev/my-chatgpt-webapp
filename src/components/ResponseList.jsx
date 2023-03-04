export default function ResponseList(props) {
    return (
      <div>
        <ul className='mx-4 p-4 list-none flex flex-col gap-6'>
          {props.responses.slice().reverse().map((response, index) => (
            <li className='border-2 border-neutral-400 rounded-md text-lg font-mono bg-neutral-500 text-neutral-900 p-4' key={index}>{response}</li>
          ))}
        </ul>
      </div>
    );
  }