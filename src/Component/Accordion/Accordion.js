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
		<div>
			<Fragment>
				<Accordion
					open={open === 1}
					onClick={() => handleOpen(1)}
					className='w-full md:w-1/2	 m-auto mb-5'
				>
					<AccordionHeader className='p-3 border border-sky-500 rounded'>
						Requirements
					</AccordionHeader>
					<AccordionBody className='text-left mt-1 p-2 bg-sky-500 rounded'>
						{props.requirements}
					</AccordionBody>
				</Accordion>
				<Accordion
					open={open === 2}
					onClick={() => handleOpen(2)}
					className='w-full	 md:w-1/2	 m-auto mb-5'
				>
					<AccordionHeader className='p-3 border border-sky-500 rounded'>
						Challenges
					</AccordionHeader>
					<AccordionBody className='text-left mt-1 p-2 bg-sky-500 rounded'>
						{props.challenges}
					</AccordionBody>
				</Accordion>
				<Accordion
					open={open === 3}
					onClick={() => handleOpen(3)}
					className='w-full	 md:w-1/2	 m-auto mb-5'
				>
					<AccordionHeader className=' p-3 border border-sky-500 rounded'>
						Techstack
					</AccordionHeader>
					<AccordionBody className='text-left mt-1 p-2 bg-sky-500 rounded'>
						<ul class='list-disc'>
							<li>{props.techstack}</li>
						</ul>
					</AccordionBody>
				</Accordion>
			</Fragment>
		</div>
	)
}
