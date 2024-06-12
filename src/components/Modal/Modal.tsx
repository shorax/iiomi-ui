import React from 'react';
import { IBaseComponentProps } from '../../types';
import useCss from './useCss';
import getNames from './getNames';
import { mergeClassNames } from '../../helpers';
import Label from '../Label/Label';
import CloseIcon from '../Icons/CloseIcon';
import Button from '../Button/Button';

export interface IModalProps extends IBaseComponentProps {
    onClose: () => void,
    children: React.ReactElement,
    onSubmit?: () => void,
    title?: string,
}

function Modal(props: IModalProps) {
	const { ID, CLASS } = useCss(getNames(props.id));

	React.useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	function handleKeyDown(e: any) {
		e.keyCode === 27 && props.onClose();
	}

	return <div
		id={ID.ROOT}
		className={mergeClassNames(CLASS.ROOT, props.className)}
	>
		<div className={CLASS.MODAL_WRAPPER}>
			<div className={CLASS.HEADER}>
				<Label id={ID.TITLE} className={CLASS.TITLE} tag={'h4'}>{props.title}</Label>
				<Button
					id={ID.CLOSE}
					className={CLASS.CLOSE}
					onClick={props.onClose}
					icon={<CloseIcon />}
					variant={'inline'}
				/>
			</div>
			<div className={CLASS.CONTENT}>
				{props.children}
			</div>
			{props.onSubmit && <div className={CLASS.FOOTER}>
				<Button id={ID.SUBMIT} className={CLASS.FOOTER_BUTTON} onClick={props.onSubmit} > Submit </Button>
				<Button id={ID.CANCEL} className={CLASS.FOOTER_BUTTON} onClick={props.onClose} > Cancel </Button>
			</div>}
		</div>
	</div>;
}

Modal.getNames = getNames;

export default Modal;