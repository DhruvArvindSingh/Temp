import { React, useState, useCallback, useEffect, useRef } from "react";
import "./Password_generator.css";
function Password_generator() {
  const [password, set_password] = useState("Password");
  const [number, set_number] = useState(false);
  const [character, set_character] = useState(false);
  const [range, set_range] = useState(6);
  const Pass_ref = useRef(null);

  useEffect(() => {
    generate_pass();
  }, [number, character, range, set_password]);
  const Copy_pass = useCallback(() => {
    console.log("copy_pass called");
    window.navigator.clipboard.writeText(password);
  }, [password]);

  function generate_pass() {
    console.log("generate_pass called");
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz";
    if (number != false) {
      values = values + "1234567890";
    }
    if (character != false) {
      values = values + "!@#$%^&*()`";
    }
    let pass = "";
    for (let i = 0; i < range; i++) {
      pass = pass + values[Math.floor(Math.random() * values.length)];
    }
    set_password(pass);
  }

  return (
    <>
      <div className="background">
        <div className="outer_box">
          <div className="output_box">
            <div className="display" ref={Pass_ref}>
              {password}
            </div>
            <button
              className="copy_btn"
              id="copy_btn"
              onClick={() => {
                Copy_pass();
              }}
            >
              Copy
            </button>
          </div>

          <div className="input_box">
            <div className="range">
              <label htmlFor="range">Range</label>
              <input
                type="range"
                name="range"
                id="range"
                min={1}
                max={10}
                value={range}
                onChange={(e) => {
                  set_range(e.target.value);
                  console.log("range = ", range);
                }}
              />
              {range}
            </div>
            <div className="character">
              <input
                type="checkbox"
                name="character"
                defaultChecked={character}
                id="character"
                onChange={(e) => {
                  set_character((prev) => !prev);
                  // console.log("character = ", character);
                }}
              />
              <label htmlFor="character">Character</label>
            </div>
            <div className="number">
              <input
                type="checkbox"
                name="number"
                defaultChecked={number}
                id="number"
                onChange={() => {
                  set_number((prev) => !prev);
                  console.log("number = ", number);
                }}
              />
              <label htmlFor="character">Number</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Password_generator;
