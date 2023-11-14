const PageFooter = ({ length }) => {
  return (
    <footer>
      <p>
        {length}
        {length === 1 ? "list" : "lists"}
      </p>
    </footer>
  );
};
export default PageFooter;
