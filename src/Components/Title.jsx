const Title = ({ heading, title }) => {
  return (
    <div className="py-10">
      <h2 className="text-blue-700 text-4xl font-semibold text-center mb-1">
        {heading}
      </h2>
      <p className="text-gray-800 text-lg text-center">{title} </p>
    </div>
  );
};
export default Title;
