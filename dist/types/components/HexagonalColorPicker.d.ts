import React from "react";
interface HexagonalColorPickerState {
    color: string;
    hue: number;
    border: string | null;
    highlight: string | null;
}
export interface HexagonalColorPickerProps {
    color: string;
    hue?: number;
    border?: string;
    highlight?: string;
    onColorChange?(value: string): void;
    onColorClick?(event: any, value: string): void;
}
declare class HexagonalColorPicker extends React.Component<HexagonalColorPickerProps, HexagonalColorPickerState> {
    constructor(props: HexagonalColorPickerProps);
    componentWillReceiveProps(new_props: any): void;
    _set_color: (color: string) => void;
    _notify_color_change: (color: string) => void;
    _on_color_click: (event: any, color: string) => void;
    _get_color_paths_from_hue: () => ({
        fill: string;
        d: string;
    } | null)[];
    render(): JSX.Element;
}
export default HexagonalColorPicker;
//# sourceMappingURL=HexagonalColorPicker.d.ts.map