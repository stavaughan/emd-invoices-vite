import { useEffect } from 'react'
import { useEmailValidation, useClear } from '@/hooks';
import { EmailInputV2 } from '.';

const ContactEmailInput = ({
	cols,
	label,
	clear,
	setEmail,
	setOwner,
	setValue,
	setEntering,
	id,
	contactEmail
}) => {

	const { emailIsValid, emailValue, dispatchEmail } = useEmailValidation()

	const clearState = () => {
		const dispatch = contactEmail ? { type: 'USER_INPUT', val: contactEmail } : { type: 'CLEAR' }
		dispatchEmail(dispatch)
	}

	useClear(clear, clearState)

	useEffect(() => {
		if (emailIsValid === true) {
			!!setEntering && setEntering(true);
			!!setOwner && setOwner(prev => ({ ...prev, email: emailValue }));
			(!!setValue && !!emailValue) && setValue('email', emailValue);
			!!setEmail && setEmail(emailValue);
		}
	}, [emailIsValid, emailValue, setEntering, setOwner, setValue, setEmail])

	useEffect(() => {
		if (contactEmail && !emailValue) {
			dispatchEmail({ type: 'USER_INPUT', val: contactEmail })
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<EmailInputV2
			cols={cols}
			id={id}
			label={label || "Email"}
			dispatchEmail={dispatchEmail}
			emailIsValid={emailIsValid}
			emailValue={emailValue}
		/>
	)
}

export default ContactEmailInput
