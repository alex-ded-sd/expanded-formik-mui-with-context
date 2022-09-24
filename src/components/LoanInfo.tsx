import { TextField, Button } from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AppContext, { LoanInfoType } from "../AppContext";
import { ExpandCard } from "./ExpandCard";

export default function LoanInfo() {
	const submitHandler = (
		values: LoanInfoType,
		formikHelpers: FormikHelpers<LoanInfoType>
	) => {};

	const ctx = useContext(AppContext);

	const INITIAL_FORM_STATE: LoanInfoType = ctx.loanInfo
		? { ...ctx.loanInfo }
		: {
				principalAmount: 0,
		  };
	const formik = useFormik({
		initialValues: INITIAL_FORM_STATE,
		onSubmit: submitHandler,
	});
	const { values, touched, errors, handleChange, handleSubmit } = formik;
	const { push } = useHistory();
	const cancelClickHandler = () => {
		ctx.setLoanInfo(values);
		push("company-info");
	};

	return (
		<ExpandCard title="Loan information">
			<form onSubmit={handleSubmit}>
				<TextField
					fullWidth
					sx={{
						marginBottom: "50px",
					}}
					id="principalAmount"
					name="principalAmount"
					label="Principal amount"
					value={values.principalAmount}
					onChange={handleChange}
					error={touched.principalAmount && Boolean(errors.principalAmount)}
					helperText={touched.principalAmount && errors.principalAmount}
				/>
				<Button
					color="primary"
					variant="contained"
					fullWidth
					type="submit"
					sx={{ marginBottom: "20px" }}
				>
					Save
				</Button>
				<Button
					color="error"
					variant="contained"
					fullWidth
					onClick={cancelClickHandler}
				>
					Cancel
				</Button>
			</form>
		</ExpandCard>
	);
}
