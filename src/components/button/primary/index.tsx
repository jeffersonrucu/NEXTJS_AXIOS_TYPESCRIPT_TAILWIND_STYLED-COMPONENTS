interface Button {
  title: string
  url: string
  target: string
}

interface Link {
  button: Button
}

function ButtonPrimary(data: Link) {
  return (
    <>
      <a
        className="mr-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        href={data?.button.url}
        target={data?.button.target}
      >
        {data?.button.title}
      </a>
    </>
  )
}

export default ButtonPrimary
