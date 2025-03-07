import * as Tabs from "@radix-ui/react-tabs";

export default function TabHome() {
  return (
    <Tabs.Content value="tab-home">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Hi, I'm</h1>
        <h1 className="text-6xl font-extrabold text-primary">Testing</h1>
        <h2 className="text-2xl font-semibold text-muted-foreground">
          Frontend Developer
        </h2>
        <p className="max-w-lg text-lg text-muted-foreground">
          Crafting seamless and engaging user experiences through modern
          frontend technologies. I specialize in transforming ideas into
          beautifully designed, high-performance web applications.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-lg font-medium">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-primary">12+</span>
            <span className="text-muted-foreground">Years of Experience</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-primary">46+</span>
            <span className="text-muted-foreground">Projects Completed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-primary">20+</span>
            <span className="text-muted-foreground">Worldwide Clients</span>
          </div>
        </div>
      </div>
    </Tabs.Content>
  );
}
