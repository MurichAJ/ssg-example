import { Component, h, Host} from "@stencil/core"
@Component({
    tag: "firestore-xmlp-page",
    shadow: true
})

export class FirestoreXmplPage {
    render() {
        return (
            <Host>
                <p>
                    There will be data from firestore.
                </p>
            </Host>
        )
    }
}