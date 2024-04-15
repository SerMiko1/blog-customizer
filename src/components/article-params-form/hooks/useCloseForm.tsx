import { useEffect } from 'react';

type UseCloseForm = {
	isOpen: boolean;
	onClose?: () => void;
	rootRef: React.RefObject<HTMLElement>;
};

export const useClose = ({ isOpen, onClose, rootRef }: UseCloseForm) => {
	useEffect(() => {
		if (!isOpen) return;

		// По Esc
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				isOpen && onClose?.();
			}
		};

		// По клику за пределами модалки
		const handleClick = (event: MouseEvent) => {
			const { target } = event;
			if (target instanceof Node && !rootRef.current?.contains(target)) {
				isOpen && onClose?.();
			}
		};

		window.addEventListener('keydown', handleEsc);
		window.addEventListener('mousedown', handleClick);

		return () => {
			window.removeEventListener('keydown', handleEsc);
			window.removeEventListener('mousedown', handleClick);
		};
	}, [isOpen, onClose]);
};
