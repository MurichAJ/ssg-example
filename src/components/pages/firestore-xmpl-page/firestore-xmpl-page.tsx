import { Component, h, Host } from "@stencil/core";
import firebase from "firebase/app";
import "firebase/firestore";

let db = firebase.firestore();
@Component({
  tag: "firestore-xmpl-page",
  shadow: true,
})
export class FirestoreXmplPage {
  data;
  id;
  async componentWillLoad() {
    await db
      .collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.data = doc.data();
          this.id = doc.id;
        });
      });
  }
  render() {
    console.log(
      "🚀 ~ file: firestore-xmpl-page.tsx ~ line 25 ~ FirestoreXmplPage ~ render ~ this.data",
      this.data
    );
    console.log(
      "🚀 ~ file: firestore-xmpl-page.tsx ~ line 21 ~ FirestoreXmplPage ~ querySnapshot.forEach ~ this.id",
      this.id
    );

    return (
      <Host>
        <p>Data from firestore:</p>
        <p>
          doc.id: {this.id}
          <ul>
            User:
            <li>name: {this.data.firstName}</li>
            <li>surname: {this.data.secondName}</li>
            <li>
              hobbies:
              <ul>
                {this.data.hobbies.map((hobby) => (
                  <li>{hobby}</li>
                ))}
              </ul>
            </li>
          </ul>
        </p>
      </Host>
    );
  }
}
