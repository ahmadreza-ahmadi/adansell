import { useFormikContext } from 'formik';

import AppButton from '../AppButton';

type Props = {
	title: string;
};

function SubmitButton({ title }: Props) {
	const { handleSubmit } = useFormikContext();

	return <AppButton title={title} onPress={handleSubmit as any} />;
}

export default SubmitButton;
