interface containerProps {
  children: React.ReactNode;
}

const Container: React.FC<containerProps> = ({ children }) => {
  return <div className="max-w-7xl mx-auto px-4">{children}</div>;
};

export default Container;
