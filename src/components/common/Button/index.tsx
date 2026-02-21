import * as S from './style.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: 'bold' | 'light';
  children: React.ReactNode;
}

export default function Button({ kind = 'bold', disabled, children, ...props }: ButtonProps) {
  return (
    <button 
      className={S.buttonStyle({ 
        color: kind, 
        disabled: disabled 
      })}
      disabled={disabled}
      {...props}
    >
      {kind == 'bold' && (
        <>
          <div className={S.smallSquare} />
          <div className={S.bigSquare} />
        </>
      )}
      {children}
    </button>
  );
}