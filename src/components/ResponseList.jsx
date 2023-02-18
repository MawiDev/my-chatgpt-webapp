export default function ResponseList(props) {
    return (
      <div>
        <h1 className="p-2 text-lg font-bold">Responses:</h1>
        <ul className='list-disc mx-4 p-4'>
          {props.responses.slice(0).reverse().map((response, index) => (
            <li className='border p-4' key={index}>{response}</li>
          ))}
        </ul>
      </div>
    );
  }