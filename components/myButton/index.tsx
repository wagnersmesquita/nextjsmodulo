type Props = {
    label: string;
    onClick: () => void;
}

export const MyButton = ({ label, onClick }: Props) => {
    return (
        <button onClick={onClick} className="btn btn-primary">{label}</button>
    );
}