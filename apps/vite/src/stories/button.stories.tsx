import { Button } from "@/components/Button";
import type { Meta, StoryObj } from "@storybook/react";

import type { ButtonProps } from "@/components/Button";

type ButtonP = ButtonProps["variant"];

const meta: Meta<typeof Button> = {
	component: Button,
	tags: ["autodocs", "components", "button"],
	argTypes: {
		variant: {
			options: [
				"default",
				"destructive",
				"outline",
				"secondary",
				"ghost",
				"link",
			] satisfies ButtonP[],
			control: { type: "radio" },
			description: "The variant of the button",
			type: { name: "string" },
		},
		asChild: {
			control: { type: "boolean" },
			description: "Render as a child component",
			type: { name: "boolean" },
		},

		children: {
			control: { type: "text" },
			description: "The content of the button",
			type: { name: "string" },
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
	args: {
		variant: "default",
		children: "Primary",
	},
};

export const Destructive: Story = {
	args: {
		variant: "destructive",
		children: "Destructive",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Outline",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Secondary",
	},
};
