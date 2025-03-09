export default function TabHome() {
  return (
    <>
      <div className="flex flex-col items-start space-y-6">
        <h1 className="text-4xl font-extrabold">
          Developing Solutions,
          <br /> Creating Opportunities
        </h1>

        <p>
          More than just code. <br />
          Smart solutions that drive growth, enhance experiences, and build
          connections.
        </p>

        <h1 className="text-6xl font-extrabold">Testing</h1>
        <h2 className="text-2xl font-semibold ">Frontend Developer</h2>
        <p className="max-w-lg text-lg ">
          Crafting seamless and engaging user experiences through modern
          frontend technologies. I specialize in transforming ideas into
          beautifully designed, high-performance web applications.
        </p>
        <div className="flex flex-wrap justify-start gap-6 text-lg font-medium">
          <div className="flex flex-col items-start">
            <span className="text-4xl font-bold ">12+</span>
            <span className="">Years of Experience</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-4xl font-bold ">46+</span>
            <span className="">Projects Completed</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-4xl font-bold ">20+</span>
            <span className="">Worldwide Clients</span>
          </div>
        </div>
      </div>
    </>
  );
}
