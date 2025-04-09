import { capitatalize, reverse } from "./stringTools.js";
import * as cowsay from "cowsay"

let output = cowsay.say({ text: 'Hello from javascript!' });

console.log(output);

console.log(capitatalize("bonjour"));
console.log(reverse("bonjour"));