import {
	TextField,
	Button,
	Card,
	CardContent,
	CardHeader,
	Collapse,
	Container,
	IconButton,
} from "@mui/material";
import { Form as form, Formik, FormikHelpers, useFormik } from "formik";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AppContext, { CompanyInfoType } from "../AppContext";
import { ExpandCard } from "./ExpandCard";

function CompanyInfo() {
	const ctx = useContext(AppContext);

	const INITIAL_FORM_STATE: CompanyInfoType = ctx.companyInfo
		? { ...ctx.companyInfo }
		: {
				name: "",
				number: 0,
		  };

	const { push } = useHistory();
	const submitHandler = (
		values: CompanyInfoType,
		formikHelpers: FormikHelpers<CompanyInfoType>
	) => {
		ctx.setCompanyInfo(values);
		push("loan-info");
	};

	const formik = useFormik({
		initialValues: INITIAL_FORM_STATE,
		onSubmit: submitHandler,
	});

	const { values, touched, errors, handleChange, handleSubmit } = formik;

	return (
		<ExpandCard title="Company information">
			<form onSubmit={handleSubmit}>
				<TextField
					fullWidth
					sx={{
						marginBottom: "50px",
					}}
					id="name"
					name="name"
					label="Name"
					value={values.name}
					onChange={handleChange}
					error={touched.name && Boolean(errors.name)}
					helperText={touched.name && errors.name}
				/>
				<TextField
					fullWidth
					id="number"
					name="number"
					label="Number"
					type="number"
					value={values.number}
					onChange={handleChange}
					error={touched.number && Boolean(errors.number)}
					helperText={touched.number && errors.number}
					sx={{
						marginBottom: "50px",
					}}
				/>
				<Button color="primary" variant="contained" fullWidth type="submit">
					Next
				</Button>
			</form>
		</ExpandCard>
	);
}

export default CompanyInfo;
