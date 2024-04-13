import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

export type OnClick = () => void;

export type ArrowButtonProps = {
	onClick?: OnClick;
	isOpen: boolean;
};

export const ArrowButton = ({ onClick, isOpen }: ArrowButtonProps) => {
	return (
		<div
			onClick={onClick}
			role='button'
			aria-label='форма параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, {
				[styles.container_open]: isOpen,
			})}>
			<img
				src={arrow}
				alt='Иконка меню слайдбара, черная стрелка'
				className={clsx(styles.arrow, {
					[styles.arrow_open]: isOpen,
				})}
			/>
		</div>
	);
};
