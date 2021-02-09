import { Component, h, Host } from "@stencil/core"

@Component({
    tag: "example-page",
    shadow: true
})

export class ExamplePage {
    peoples;
    async componentWillLoad() {
        const ret = await fetch("https://swapi.dev/api/people/");
        await ret.json().then((data) => {
            this.peoples = data["results"];    
        });
        console.log(this.peoples);
    }
    render(){
        return(
            <Host>
                <p>Some data that was fetched.</p>
                <ol>
                    {this.peoples.map((unit) => {
                        return <li>{unit.name}</li>
                    })}
                    {/* {this.peoples.map((unit) => {
                        return <ul>{Object.keys(unit).forEach((key) => {
                            return <li>{`${key} ${unit[key]}`}</li>
                        })}</ul>    
                    })} */}
                </ol>
            </Host>
        )
    }
}