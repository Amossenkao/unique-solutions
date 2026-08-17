"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import PartnerDialog from "./PartnerDialog";

interface PartnerDialogContext {
	isOpen: boolean;
	open: () => void;
	close: () => void;
}

const Context = createContext<PartnerDialogContext | null>(null);

/**
 * Owns the partnership intake dialog for the whole site, so the
 * "Partner With Us" action behaves identically on every page.
 */
export function PartnerDialogProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);
	const triggerRef = useRef<HTMLElement | null>(null);

	const open = useCallback(() => {
		// Remember what opened the dialog so focus can return there on close.
		triggerRef.current = document.activeElement as HTMLElement | null;
		setIsOpen(true);
	}, []);

	const close = useCallback(() => {
		setIsOpen(false);
		triggerRef.current?.focus?.();
	}, []);

	return (
		<Context.Provider value={{ isOpen, open, close }}>
			{children}
			<PartnerDialog isOpen={isOpen} onClose={close} />
		</Context.Provider>
	);
}

export function usePartnerDialog() {
	const context = useContext(Context);
	if (!context) {
		throw new Error("usePartnerDialog must be used inside <PartnerDialogProvider>");
	}
	return context;
}
