import React from 'react';
import classes from "../Game.module.css"
let root = document.documentElement;
const fontColourInput = document.getElementById('fontColour');
const bgColorInput = document.getElementById('bgColour');

fontColourInput.addEventListener('input', updateFontColour, false);
bgColorInput.addEventListener('input', updateBgColour, false);

function updateFontColour(event) {
    root.style.setProperty('--fontColour', event.target.value);
}

function updateBgColour(event) {
    root.style.setProperty('--bgColour', event.target.value);
}

const CountDown2 = (props) => {

    return  (
        <div>
            <input id="triggerAnimation" type="checkbox"/>

            <div className="timer">
                <div className="digit seconds">
                    <span>9</span>
                    <span>8</span>
                    <span>7</span>
                    <span>6</span>
                    <span>5</span>
                    <span>4</span>
                    <span>3</span>
                    <span>2</span>
                    <span>1</span>
                    <span>0</span>
                </div>
                <div className="digit milliseconds">
                    <span>9</span>
                    <span>8</span>
                    <span>7</span>
                    <span>6</span>
                    <span>5</span>
                    <span>4</span>
                    <span>3</span>
                    <span>2</span>
                    <span>1</span>
                    <span>0</span>
                </div>
            </div>

            <aside>
                <label>
                    <span>Font colour:</span>
                    <input id="fontColour" type="color" value="#000000"/>
                </label>
                <label>
                    <span>Background colour:</span>
                    <input id="bgColour" type="color" value="#ffffff"/>
                </label>
                <label htmlFor="triggerAnimation" className="toggle">
                    <span>Start</span>
                    <span>Reset</span>
                </label>
            </aside>
        </div>
    )

}

export default CountDown2