import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from "react";
import { hsl_to_hex } from "../utils/functions";

class HexagonalColorHue extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "_set_hue", hue => {
      this._notify_hue_change(hue);
    });

    _defineProperty(this, "_notify_hue_change", hue => {
      if (this.props.onHueChange) {
        this.props.onHueChange(hue);
      } else {
        this.setState({
          hue
        });
      }
    });

    _defineProperty(this, "_get_color_paths_from_hue", () => {
      let color_paths = [{
        d: "M18 15l-9 5-9-5V5l9-5 9 5z"
      }, {
        d: "M27 30l-9 5-9-5V20l9-5 9 5z"
      }, {
        d: "M36 15l-9 5-9-5V5l9-5 9 5z"
      }, {
        d: "M45 30l-9 5-9-5V20l9-5 9 5z"
      }, {
        d: "M54 15l-9 5-9-5V5l9-5 9 5z"
      }, {
        d: "M63 30l-9 5-9-5V20l9-5 9 5z"
      }, {
        d: "M72 15l-9 5-9-5V5l9-5 9 5z"
      }, {
        d: "M81 30l-9 5-9-5V20l9-5 9 5z"
      }, {
        d: "M90 15l-9 5-9-5V5l9-5 9 5z"
      }, {
        d: "M99 30l-9 5-9-5V20l9-5 9 5z"
      }, {
        d: "M108 15l-9 5-9-5V5l9-5 9 5z"
      }, {
        d: "M117 30l-9 5-9-5V20l9-5 9 5z"
      }, {
        d: "M126 15l-9 5-9-5V5l9-5 9 5z"
      }, {
        d: "M135 30l-9 5-9-5V20l9-5 9 5z"
      }, {
        d: "M144 15l-9 5-9-5V5l9-5 9 5z"
      }, {
        d: "M153 30l-9 5-9-5V20l9-5 9 5z"
      }, {
        d: "M162 15l-9 5-9-5V5l9-5 9 5z"
      }, {
        d: "M171 30l-9 5-9-5V20l9-5 9 5z"
      }, {
        d: "M180 15l-9 5-9-5V5l9-5 9 5z"
      }, {
        d: "M189 30l-9 5-9-5V20l9-5 9 5z"
      }, {
        d: "M198 15l-9 5-9-5V5l9-5 9 5z"
      }, {
        d: "M207 30l-9 5-9-5V20l9-5 9 5z"
      }, {
        d: "M216 15l-9 5-9-5V5l9-5 9 5z"
      }, {
        d: "M225 30l-9 5-9-5V20l9-5 9 5z"
      }, {
        d: "M234 15l-9 5-9-5V5l9-5 9 5z"
      }];
      return color_paths.map((color_path, index, array) => {
        if (index === 0) {
          return {
            d: color_path.d,
            fill: "#000000",
            hue: 0
          };
        }

        const hue = 360 * index / (array.length - 1);
        return {
          d: color_path.d,
          fill: hsl_to_hex(hue / 3.6, 100, 50),
          hue: hue
        };
      });
    });

    this.state = {
      hue: props.hue || 0,
      border: props.border || null,
      highlight: props.highlight || null
    };
  }

  componentWillReceiveProps(new_props) {
    this.setState({
      hue: new_props.hue || 0,
      border: new_props.border || null,
      highlight: new_props.highlight || null
    });
  }

  render() {
    const {
      border,
      hue,
      highlight
    } = this.state;

    const all_color_paths = this._get_color_paths_from_hue();

    let border_props = {};

    if (border !== null) {
      border_props = {
        vectorEffect: "non-scaling-stroke",
        strokeWidth: "1",
        stroke: border,
        strokeLinejoin: "miter",
        strokeLinecap: "square",
        strokeMiterlimit: "2"
      };
    }

    return /*#__PURE__*/React.createElement("svg", _extends({
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        isolation: "isolate",
        pointerEvents: "none",
        height: "100%",
        width: "100%"
      },
      viewBox: "0 0 234 35",
      width: 234,
      height: 35
    }, this.props), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
      id: "prefix__a"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0 0h234v35H0z"
    }))), /*#__PURE__*/React.createElement("g", {
      clipPath: "url(#prefix__a)"
    }, all_color_paths.map((element, index) => {
      const element_border_props = element.hue === hue && highlight ? { ...border_props,
        stroke: highlight
      } : border_props;
      return /*#__PURE__*/React.createElement("path", _extends({}, element_border_props, {
        key: "all_color_paths_".concat(index),
        style: {
          pointerEvents: "auto",
          cursor: "pointer"
        },
        onClick: () => {
          this._set_hue(element.hue);
        },
        fill: element.fill,
        d: element.d
      }));
    })));
  }

}

export default HexagonalColorHue;