interface IButton {
  text: string;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ text, className, onClick}: IButton) => (
    <button
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  );