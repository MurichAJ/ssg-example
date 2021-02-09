import { Component, h, Host } from "@stencil/core"

@Component({
    tag: "example-page",
    shadow: true
})

export class ExamplePage {
    render(){
        return(
            <Host>
                <p>Some data that was fetched.</p>
            </Host>
        )
    }
}