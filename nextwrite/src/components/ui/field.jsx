export function FieldGroup({ children }) {
    return <div className="flex flex-col gap-4">{children}</div>;
}

export function Field({ children, orientation = "vertical" }) {
    return (
        <div className={`flex ${orientation === "horizontal" ? "flex-row gap-2" : "flex-col gap-1"}`}>
            {children}
        </div>
    );
}

export function FieldLabel({ children, htmlFor }) {
    return <label htmlFor={htmlFor} className="text-sm font-medium text-gray-700">{children}</label>;
}

export function FieldDescription({ children }) {
    return <p className="text-xs text-gray-500">{children}</p>;
}
