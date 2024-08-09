interface containerProps {
  children: React.ReactNode;
}

const Container: React.FC<containerProps> = ({ children }) => {
  return <div className="max-w-[90rem] mx-auto px-4">{children}</div>;
};

export default Container;
