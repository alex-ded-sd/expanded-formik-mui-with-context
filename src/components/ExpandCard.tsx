import {
	Card,
	CardHeader,
	IconButton,
	Collapse,
	CardContent,
	Container,
} from "@mui/material";
import { ReactNode, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface Props {
	children: ReactNode;
	title: string;
}

export function ExpandCard({ children, title }: Props) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Card sx={{ minWidth: 600 }}>
				<CardHeader
					title={title}
					action={
						<IconButton
							onClick={() => setOpen(!open)}
							aria-label="expand"
							size="small"
						>
							{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
						</IconButton>
					}
				></CardHeader>
				<div>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<CardContent>
							<Container>{children}</Container>
						</CardContent>
					</Collapse>
				</div>
			</Card>
		</>
	);
}
