export default function ShowResponse(props) {
    return (
      <div>
        <h1 className="p-2 text-lg font-bold">
          Response:
        </h1>
        {props.isLoading ? (
          <p className='border m-2 p-4'>Waiting for OpenAI...</p>
        ) : (
          <p className='border m-2 p-4'>{props.response}</p>
        )}
      </div>
    );
  }