import { Formik, FormikConfig, FormikValues } from 'formik';
import { ReactNode } from 'react';

type Props<Values extends FormikValues> = {
	children?: ReactNode;
} & FormikConfig<Values>;

function AppForm<Values extends FormikValues>({ children, ...restProps }: Props<Values>) {
	return <Formik {...restProps}>{() => <>{children}</>}</Formik>;
}

export default AppForm;
