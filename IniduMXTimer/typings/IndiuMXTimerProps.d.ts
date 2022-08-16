/**
 * This file was generated from IndiuMXTimer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export interface IndiuMXTimerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    Time: EditableValue<string>;
    onChangeStart?: ActionValue;
    onChangeStop?: ActionValue;
    onChangeReset?: ActionValue;
    minutes: number;
}

export interface IndiuMXTimerPreviewProps {
    class: string;
    style: string;
    Time: string;
    onChangeStart: {} | null;
    onChangeStop: {} | null;
    onChangeReset: {} | null;
    minutes: number | null;
}
