export default function Component({ service }) {

  const copyToClipboard = () => {
    // console.log(service.widget?.fields);

    const copyValue = service.widget?.fields?.copyValue;

    const input = document.createElement("textarea");
    input.value = copyValue;
    document.body.appendChild(input);
    input.select();
    if (document.execCommand("copy")) {
      document.execCommand("copy");
    }
    document.body.removeChild(input);

    alert("Copy Success");
  };

  if (!service.widget?.fields || !Object.hasOwn(service.widget?.fields, "copyValue")) {
    return <div className="relative flex flex-row w-full service-container">
      <div label="buttoncopy.copyValue"
           className="font-regular block w-full rounded-lg bg-red-500 p-1 text-base leading-5 text-white opacity-100">
        check fields string!
      </div>
    </div>;
  }

  return <div className="flex flex-row w-full service-container">
    <button
      type="button"
      onClick={copyToClipboard}
      onKeyDown={copyToClipboard}
      className="middle none center rounded-lg bg-pink-500 py-1 px-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      label="buttoncopy.copyValue"
    >
      COPY
    </button>
  </div>;
}
