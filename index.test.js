import { addition, subtraction, multiplication, division, resetState } from "./index.js";

import path from "path";
import fs from "fs";
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

test("check integer addition", () => {
    let sum = addition(81, 19);
    expect(sum).toBe(100);
})

test("check decimal point addition", () => {
    let sum = addition(8.1, 1.9);
    expect(sum).toBe(10);
})


test("check integer subtraction", () => {
    let r = subtraction(50, 45);
    expect(r).toBe(5);
})

test("check decimal point subtraction", () => {

    let r = subtraction(100.1, 0.1);
    expect(r).toBe(100);
})

test("check integer multiplication", () => {
    let r = multiplication(50, 2);
    expect(r).toBe(100);
})

test("check decimal point multiplication", () => {
    let r = multiplication(0.5, 20);
    expect(r).toBe(10);
})

test("check integer division", () => {
    let r = division(1000, 10);
    expect(r).toBe(100);
})

test("check decimal point division", () => {
    let r = division(2, 0.5);
    expect(r).toBe(4);
})

test("cancel button clears equation memory", () => {
    let memory = resetState();
    expect(memory.eqn).toBe('');


})

test("cancel button clears term memory", () => {
    let memory = resetState();

    expect(memory.term).toBe('');

})


test("cancel button clears term memory", () => {
    let memory = resetState();

    expect(memory.term).toBe('');

})


test("decimal point button is present", () => {

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });
    let st = html.toString();
    // console.log(st);
    expect(st.indexOf("decimal")).not.toBe(!-1);

})


test("equals button is present", () => {

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });
    let st = html.toString();
    //console.log(st);
    expect(st.indexOf("equals")).not.toBe(!-1);

}) 