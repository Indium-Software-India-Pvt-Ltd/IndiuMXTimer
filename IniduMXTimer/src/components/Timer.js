"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_timer_hook_1 = require("react-timer-hook");
require("../ui/IndiuMXTimer.css");
var classnames_1 = require("classnames");
var Timer = function (props) {
    var stopwatchOffset = new Date();
    props = props.props;
    var minutesInput = props.minutes * 60;
    stopwatchOffset.setSeconds(stopwatchOffset.getSeconds() + minutesInput);
    var className = (0, classnames_1["default"])("form-control indium-timer-container", props["class"]);
    var _a = (0, react_1.useState)('false'), showStop = _a[0], setShowStop = _a[1];
    var _b = (0, react_timer_hook_1.useStopwatch)({ autoStart: false, offsetTimestamp: stopwatchOffset }), seconds = _b.seconds, minutes = _b.minutes, hours = _b.hours, start = _b.start, pause = _b.pause, reset = _b.reset;
    var pauses = function () {
        pause();
        setShowStop('false');
        onChangeValueSetup();
        onChangeCommon('stop');
    };
    var resets = function () {
        reset();
        setShowStop('true');
        onChangeValueSetup();
        onChangeCommon('reset');
    };
    var starts = function () {
        start();
        setShowStop('true');
        onChangeValueSetup();
        onChangeCommon('start');
    };
    var onChangeCommon = function (clickEvent) {
        if (clickEvent == 'start') {
            if (props.onChangeStart && props.onChangeStart.canExecute) {
                props.onChangeStart.execute();
            }
        }
        else if (clickEvent == 'stop') {
            if (props.onChangeStop && props.onChangeStop.canExecute) {
                props.onChangeStop.execute();
            }
        }
        else if (clickEvent == 'reset') {
            if (props.onChangeReset && props.onChangeReset.canExecute) {
                props.onChangeReset.execute();
            }
        }
    };
    var onChangeValueSetup = function () {
        props.Time.setValue(hours + ':' + minutes + ':' + seconds);
    };
    return (<div className={className}>
            <span style={props.style ? props.style : { fontSize: '100px' }}>{hours}:{minutes}:{seconds}</span>
            <div>
                {showStop == 'false' ? <button style={props.style} onClick={function () { return starts(); }}>Start</button> :
            <button style={props.style} onClick={function () { return pauses(); }}>Stop</button>}
                <button style={props.style ? props.style : { marginLeft: '20px' }} onClick={function () { return resets(); }}>Reset</button>
            </div>
        </div>);
};
exports["default"] = Timer;
