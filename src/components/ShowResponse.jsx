export default function ShowResponse(props) {
    return (
      <div>
        <h1 className="mx-8 my-4 text-lg text-neutral-400 font-mono underline underline-offset-8">
          Response:
        </h1>
        {props.isLoading ? (
          <p className='mx-8 flex justify-center items-center border-2 rounded-md text-lg font-light font-sans bg-neutral-500 text-neutral-200 p-4'>Waiting for OpenAI...</p>
        ) : null }
      </div>
    );
  }