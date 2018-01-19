


/* FREQUENCY LIB */
var notes = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"];
var octives = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
var o0Freq = [16.35, 17.32, 18.35, 19.45, 20.60, 21.83, 23.12, 24.50, 25.96, 27.50, 29.14, 30.87];
var o1Freq = [32.70, 34.65, 36.71, 38.89, 41.20, 43.65, 46.25, 49.00, 51.91, 55.00, 58.27, 61.74];
var o2Freq = [65.41, 69.30, 73.42, 77.78, 82.41, 87.31, 92.50, 98.00, 103.8, 110.0, 116.5, 123.5];
var o3Freq = [130.8, 138.6, 146.8, 155.6, 164.8, 174.6, 185.0, 196.0, 207.7, 220.0, 233.1, 246.9];
var o4Freq = [261.6, 277.2, 293.7, 311.1, 329.6, 349.2, 370.0, 392.0, 415.3, 440.0, 466.2, 493.9];
var o5Freq = [523.3, 554.4, 587.3, 622.3, 659.3, 698.5, 740.0, 784.0, 830.6, 880.0, 932.3, 987.8];
var o6Freq = [1047, 1109, 1175, 1245, 1319, 1397, 1480, 1568, 1661, 1760, 1865, 1976];
var o7Freq = [2093, 2217, 2349, 2489, 2637, 2794, 2960, 3136, 3322, 3520, 3729, 3951];
var o8Freq = [4186, 4435, 4699, 4978, 5274, 5588, 5920, 6272, 6645, 7040, 7459, 7902];

var context = new (window.AudioContext || window.webkitAudioContext)();

/* Oscillator #1 */
var oscillator01 = context.createOscillator();
var os1FreqDisplay = document.getElementById('os1FreqDisplay');
var os1NoteSelector = document.getElementById('os1NoteSelector');
var os1OctiveSelector = document.getElementById('os1OctiveSelector');
var os1TypeSelector = document.getElementById('os1TypeSelector');
var os1GainSelector = document.getElementById('os1GainSelector');
console.log(os1GainSelector.value)
var os1freq = eval('o' + os1OctiveSelector.value + 'Freq')[os1NoteSelector.value];
os1FreqDisplay.innerHTML = os1OctiveSelector.value + notes[os1NoteSelector.value] + ' - ' + os1freq + 'hz' + ' - ' + ( os1TypeSelector.value.charAt(0).toUpperCase() + os1TypeSelector.value.slice(1) ) + ' - ' + 'Gain: ' + os1GainSelector.value + '%'
oscillator01.type = os1TypeSelector.value;
oscillator01.frequency.value = os1freq;


var os1gainNode = context.createGain();
os1gainNode.gain.value = 0;;
oscillator01.connect(os1gainNode);
os1gainNode.connect(context.destination);
oscillator01.start();

function os1UpdateNote() {
    var os1freq = eval('o' + os1OctiveSelector.value + 'Freq')[os1NoteSelector.value];
    os1FreqDisplay.innerHTML = os1OctiveSelector.value + notes[os1NoteSelector.value] + ' - ' + os1freq + 'hz' + ' - ' + ( os1TypeSelector.value.charAt(0).toUpperCase() + os1TypeSelector.value.slice(1) ) + ' - ' + 'Gain: ' + os1GainSelector.value + '%'
    oscillator01.frequency.value = os1freq;
}  
function os1UpdateWaveform() {  
    oscillator01.type = os1TypeSelector.value;
    os1FreqDisplay.innerHTML = os1OctiveSelector.value + notes[os1NoteSelector.value] + ' - ' + os1freq + 'hz' + ' - ' + ( os1TypeSelector.value.charAt(0).toUpperCase() + os1TypeSelector.value.slice(1) ) + ' - ' + 'Gain: ' + os1GainSelector.value + '%'
}

function os1UpdateGain() {
    // OS is turning on when you adjust the gain when the channel is turned off (If/Else?)
    os1gainNode.gain.value = os1GainSelector.value;
    os1FreqDisplay.innerHTML = os1OctiveSelector.value + notes[os1NoteSelector.value] + ' - ' + os1freq + 'hz' + ' - ' + ( os1TypeSelector.value.charAt(0).toUpperCase() + os1TypeSelector.value.slice(1) ) + ' - ' + 'Gain: ' + os1GainSelector.value + '%'
}

os1NoteSelector.addEventListener('keyup', os1UpdateNote, false);
os1NoteSelector.addEventListener('click', os1UpdateNote, false);
os1OctiveSelector.addEventListener('keyup', os1UpdateNote, false);
os1OctiveSelector.addEventListener('click', os1UpdateNote, false);
os1TypeSelector.addEventListener('keyup', os1UpdateWaveform, false);
os1TypeSelector.addEventListener('click', os1UpdateWaveform, false);
os1GainSelector.addEventListener('keyup', os1UpdateGain, false);
os1GainSelector.addEventListener('click', os1UpdateGain, false);
 
function os1on() {
    os1gainNode.gain.value = os1GainSelector.value;
}
function os1Mute() {
    os1gainNode.gain.value = 0;
}

function osOnOff1() {
    if (document.getElementById('os1ONOFF1').value == 'off') {
        document.getElementById('os1ONOFF1').setAttribute('value', 'on')
        document.getElementById('os1ONOFF1').setAttribute('class', 'os1ONOFF button-on')
        document.getElementById('os1ONOFF1').innerHTML = 'ON'
        os1on()
    }
    else {
        document.getElementById('os1ONOFF1').setAttribute('value', 'off')
        document.getElementById('os1ONOFF1').setAttribute('class', 'os1ONOFF button-off')
        document.getElementById('os1ONOFF1').innerHTML = 'OFF'
        os1Mute()
        
    }
}

document.getElementById('os1ONOFF1').addEventListener('click', osOnOff1, false);

/* Oscillator #2 */
var oscillator02 = context.createOscillator();
var os2FreqDisplay = document.getElementById('os2FreqDisplay');
var os2NoteSelector = document.getElementById('os2NoteSelector');
var os2OctiveSelector = document.getElementById('os2OctiveSelector');
var os2TypeSelector = document.getElementById('os2TypeSelector');
var os2GainSelector = document.getElementById('os2GainSelector');
console.log(os2GainSelector.value)
var os2freq = eval('o' + os2OctiveSelector.value + 'Freq')[os2NoteSelector.value];
os2FreqDisplay.innerHTML = os2OctiveSelector.value + notes[os2NoteSelector.value] + ' - ' + os2freq + 'hz' + ' - ' + ( os2TypeSelector.value.charAt(0).toUpperCase() + os2TypeSelector.value.slice(1) ) + ' - ' + 'Gain: ' + os2GainSelector.value + '%'
oscillator02.type = os2TypeSelector.value;
oscillator02.frequency.value = os2freq;


var os2gainNode = context.createGain();
os2gainNode.gain.value = 0;
oscillator02.connect(os2gainNode);
os2gainNode.connect(context.destination);
oscillator02.start();

function os2UpdateNote() {
    var os2freq = eval('o' + os2OctiveSelector.value + 'Freq')[os2NoteSelector.value];
    os2FreqDisplay.innerHTML = os2OctiveSelector.value + notes[os2NoteSelector.value] + ' - ' + os2freq + 'hz' + ' - ' + ( os2TypeSelector.value.charAt(0).toUpperCase() + os2TypeSelector.value.slice(1) ) + ' - ' + 'Gain: ' + os2GainSelector.value + '%'
    oscillator02.frequency.value = os2freq;
}  
function os2UpdateWaveform() {  
    oscillator02.type = os2TypeSelector.value;
    os2FreqDisplay.innerHTML = os2OctiveSelector.value + notes[os2NoteSelector.value] + ' - ' + os2freq + 'hz' + ' - ' + ( os2TypeSelector.value.charAt(0).toUpperCase() + os2TypeSelector.value.slice(1) ) + ' - ' + 'Gain: ' + os2GainSelector.value + '%'
}

function os2UpdateGain() {
    // OS is turning on when you adjust the gain when the channel is turned off (If/Else?)
    os2gainNode.gain.value = os2GainSelector.value;
    os2FreqDisplay.innerHTML = os2OctiveSelector.value + notes[os2NoteSelector.value] + ' - ' + os2freq + 'hz' + ' - ' + ( os2TypeSelector.value.charAt(0).toUpperCase() + os2TypeSelector.value.slice(1) ) + ' - ' + 'Gain: ' + os2GainSelector.value + '%'
}

os2NoteSelector.addEventListener('keyup', os2UpdateNote, false);
os2NoteSelector.addEventListener('click', os2UpdateNote, false);
os2OctiveSelector.addEventListener('keyup', os2UpdateNote, false);
os2OctiveSelector.addEventListener('click', os2UpdateNote, false);
os2TypeSelector.addEventListener('keyup', os2UpdateWaveform, false);
os2TypeSelector.addEventListener('click', os2UpdateWaveform, false);
os2GainSelector.addEventListener('keyup', os2UpdateGain, false);
os2GainSelector.addEventListener('click', os2UpdateGain, false);
 
function os2on() {
    os2gainNode.gain.value = os2GainSelector.value;
}
function os2Mute() {
    os2gainNode.gain.value = 0;
}

function osOnOff2() {
    if (document.getElementById('os2ONOFF2').value == 'off') {
        document.getElementById('os2ONOFF2').setAttribute('value', 'on')
        document.getElementById('os2ONOFF2').setAttribute('class', 'os2ONOFF button-on')
        document.getElementById('os2ONOFF2').innerHTML = 'ON'
        os2on()
    }
    else {
        document.getElementById('os2ONOFF2').setAttribute('value', 'off')
        document.getElementById('os2ONOFF2').setAttribute('class', 'os2ONOFF button-off')
        document.getElementById('os2ONOFF2').innerHTML = 'OFF'
        os2Mute()
        
    }
}

document.getElementById('os2ONOFF2').addEventListener('click', osOnOff2, false); 
