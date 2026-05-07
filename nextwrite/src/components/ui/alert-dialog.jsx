"use client";

import * as React from "react";

const AlertDialogContext = React.createContext({ open: false, setOpen: () => {} });

export function AlertDialog({ children }) {
    const [open, setOpen] = React.useState(false);
    return (
        <AlertDialogContext.Provider value={{ open, setOpen }}>
            {children}
        </AlertDialogContext.Provider>
    );
}

export function AlertDialogTrigger({ children, asChild }) {
    const { setOpen } = React.useContext(AlertDialogContext);
    return <div onClick={() => setOpen(true)}>{children}</div>;
}

export function AlertDialogContent({ children }) {
    const { open, setOpen } = React.useContext(AlertDialogContext);
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setOpen(false)}>
            <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export function AlertDialogHeader({ children }) {
    return <div className="mb-4">{children}</div>;
}

export function AlertDialogTitle({ children }) {
    return <h2 className="text-xl font-bold">{children}</h2>;
}

export function AlertDialogDescription({ children }) {
    return <p className="text-sm text-gray-600 mt-2">{children}</p>;
}

export function AlertDialogFooter({ children }) {
    return <div className="flex gap-2 justify-end mt-4">{children}</div>;
}

export function AlertDialogCancel({ children }) {
    const { setOpen } = React.useContext(AlertDialogContext);
    return (
        <button className="px-4 py-2 border rounded hover:bg-gray-100" onClick={() => setOpen(false)}>
            {children}
        </button>
    );
}

export function AlertDialogAction({ children, onClick }) {
    const { setOpen } = React.useContext(AlertDialogContext);
    return (
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => { onClick?.(); setOpen(false); }}>
            {children}
        </button>
    );
}
