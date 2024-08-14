export default function Heading({ children, size }) {
    return (
      <header className={`${size} gradient-text font-bold`}>
        {children}
      </header>
    );
  }

