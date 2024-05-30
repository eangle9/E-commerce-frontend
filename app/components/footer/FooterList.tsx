interface FooterListProps {
  children: React.ReactNode;
}

const FooterList: React.FC<FooterListProps> = ({ children }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col gap-2 mb-6 mr-10">
      {children}
    </div>
  );
};

export default FooterList;
