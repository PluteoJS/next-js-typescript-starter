import React, {FC} from "react";

import {ComponentIdType} from "@/customTypes/CommonTypes";

type Props = {
	id?: ComponentIdType;
	label: string;
};

const ExampleComponent: FC<Props> = ({id, label}: Props) => {
	return (
		<div id={id}>
			<text>Example Component {label}</text>
		</div>
	);
};

export default ExampleComponent;
