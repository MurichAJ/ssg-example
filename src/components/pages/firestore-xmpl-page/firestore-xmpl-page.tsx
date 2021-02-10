import { Component, h, Host} from "@stencil/core"
// import firebase from "firebase/app";
// import 'firebase/firestore';

// let db = firebase.firestore();

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