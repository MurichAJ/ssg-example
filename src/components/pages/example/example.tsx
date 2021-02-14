import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "example-page",
  shadow: true,
})
export class ExamplePage {
  peoples;
  async componentWillLoad() {
    const ret = await fetch("https://swapi.dev/api/people/");
    await ret.json().then((data) => {
      this.peoples = data["results"];
    });
    // console.log(this.peoples);
  }
  render() {
    return (
      <Host>
        <p>
          Some data that was fetched from{" "}
          <a href="https://swapi.dev/api/people/"> swapi.dev</a>:
        </p>
        {/* {this.peoples.map((unit) => {
                        return <li>{unit.name}</li>
                    })} */}
        {this.peoples.map((unit) => (
          <ul>
            <li>name: {unit.name}</li>
            <li>{`gender: ${unit.gender}`}</li>
            <li>{"height: " + unit.height}</li>
            <li>
              {"mass: "}
              {unit.mass}
            </li>
          </ul>
        ))}
      </Host>
    );
  }
}
