export default function Tasks() {
  return (
    <section className="flex flex-row w-full p-4 gap-8">
      <section className="flex  basis-2/3 justify-center">
        <div className="flex flex-col w-4/5 p-4">
          <h1 className="font-bold text-2xl mb-8">
            Tasks as on: Wednesday, 1 Jan 2025
          </h1>
          <div className="flex justify-around">
            <p>Counter 1</p>
            <p>Counter 2</p>
            <p>Counter 3</p>
          </div>
        </div>
      </section>
      <section className="flex basis-1/3"></section>
    </section>
  );
}
