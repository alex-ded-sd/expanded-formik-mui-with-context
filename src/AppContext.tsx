import { createContext, ReactNode, useEffect, useState } from "react";

export type CompanyInfoType = {
	name: string;
	number: number;
};

export type LoanInfoType = {
	principalAmount: number;
};

type AppContextType = {
	companyInfo?: CompanyInfoType;
	loanInfo?: LoanInfoType;
	setCompanyInfo: (info: CompanyInfoType) => void;
	setLoanInfo: (info: LoanInfoType) => void;
};

const AppContext = createContext<AppContextType>({
	setCompanyInfo: (info: CompanyInfoType) => {},
	setLoanInfo: (info: LoanInfoType) => {},
});

interface Props {
	children: ReactNode;
}

export const AppContextProvider = ({ children }: Props) => {
	const setCompanyInfo = (info: CompanyInfoType) => {
		setAppContext((prev) => {
			return {
				...appContext,
				companyInfo: { ...info },
			};
		});
	};

	const setLoanInfo = (info: LoanInfoType) => {
		setAppContext((prev) => {
			return {
				...appContext,
				loanInfo: { ...info },
			};
		});
	};

	const [appContext, setAppContext] = useState<{
		companyInfo?: CompanyInfoType;
		loanInfo?: LoanInfoType;
	}>();

	useEffect(
		() => console.log("Context changed. New Value: ", appContext),
		[appContext]
	);
	return (
		<AppContext.Provider
			value={{
				...appContext,
				setCompanyInfo,
				setLoanInfo,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
