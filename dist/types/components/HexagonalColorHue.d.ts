import React from "react";
interface HexagonalColorHueState {
    hue: number;
    border: string | null;
    highlight: any;
}
export interface HexagonalColorHueProps {
    hue?: number;
    border?: any;
    highlight?: any;
    onHueChange?(hue: number): void;
}
declare class HexagonalColorHue extends React.Component<HexagonalColorHueProps, HexagonalColorHueState> {
    constructor(props: HexagonalColorHueProps);
    componentWillReceiveProps(new_props: HexagonalColorHueProps): void;
    _set_hue: (hue: number) => void;
    _notify_hue_change: (hue: number) => void;
    _get_color_paths_from_hue: () => {
        d: string;
        fill: string;
        hue: number;
    }[];
    render(): JSX.Element;
}
export default HexagonalColorHue;
//# sourceMappingURL=HexagonalColorHue.d.ts.map