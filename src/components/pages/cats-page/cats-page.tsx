import { Component, h, Host } from "@stencil/core"
@Component({
    tag: "cats-page",
    shadow: true
})

export class CatsPage {
    render(){
        return(
            <Host>
                <p>
                    Cats Photos. Many photos.
                    {/* Some comment */}
                </p>
                <img src="/assets/images/Unknown.jpg" />
                <img src="/assets/images/Unknown1.jpg" />
                <img src="/assets/images/Unknown2.jpg" />
                <img src="/assets/images/Unknown3.jpg" />
                <test-cmp></test-cmp>
            </Host>
        )
    }
}