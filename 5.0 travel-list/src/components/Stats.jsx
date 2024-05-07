import PropTypes from "prop-types";

Stats.propTypes = {
  items: PropTypes.array.isRequired,
};

function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Add some items in your list🚀!</em>
      </footer>
    );
  }

  const totalItems = items.length;
  const totalPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((totalPacked / totalItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? `🎉You have everything packed! Ready to go✈️!`
          : `👜You have ${totalItems} ${totalItems === 1 ? "item" : "items"} on your
        list, and you already packed ${totalPacked} (${percentPacked}%)`}
      </em>
    </footer>
  );
}

export default Stats;
