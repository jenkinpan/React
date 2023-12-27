export function Order({ closed }) {
  return (
    <div className="order">
      <p>
        We&apos;re currently open until {closed}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
