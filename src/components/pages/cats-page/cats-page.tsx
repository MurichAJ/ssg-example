import { Component, h, Host } from "@stencil/core"
import firebase from "firebase/app";
import 'firebase/firestore';

let db = firebase.firestore();
@Component({
    tag: "cats-page",
    shadow: true
})

export class CatsPage {
    componentWillLoad() {
        console.log("hah");
        
        db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            })
        })
    }
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
            </Host>
        )
    }
}