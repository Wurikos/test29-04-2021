import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "500px",
	"height": "500px",
	"background": "#ce3333"
};
const overrides = {};

const Adad = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Adad, { ...Box,
	defaultProps,
	overrides
});
export default Adad;