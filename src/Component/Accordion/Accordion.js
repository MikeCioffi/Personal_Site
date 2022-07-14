import { Fragment, useState } from "react"
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react"

export default function Accordions(props) {
	const [open, setOpen] = useState(0)

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value)
	}

	return (
		<Fragment>
			<Accordion open={open === 1} onClick={() => handleOpen(1)}>
				<AccordionHeader>Requirements</AccordionHeader>
				<AccordionBody>{props.requirements}</AccordionBody>
			</Accordion>
			<Accordion open={open === 2} onClick={() => handleOpen(2)}>
				<AccordionHeader>Challenges</AccordionHeader>
				<AccordionBody>{props.challenges}</AccordionBody>
			</Accordion>
			<Accordion open={open === 3} onClick={() => handleOpen(3)}>
				<AccordionHeader>Techstack</AccordionHeader>
				<AccordionBody>{props.techstack}</AccordionBody>
			</Accordion>
		</Fragment>
	)
}
