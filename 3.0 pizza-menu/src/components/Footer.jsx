import { Order } from "./Order";

export function Footer() {
  const hour = new Date().getHours();
  const open = 12;
  const closed = 22;
  const isOpen = hour >= open && hour <= closed;

  console.log(isOpen);

  // * If the hour is less than the open time or greater than the closed time, then we're closed
  // if (hour >= open && hour <= closed) alert("We're currently open!");
  // else alert("We're currently closed!");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closed={closed} />
      ) : (
        <p>
          We&apos;re happy to welcome you between {open}:00 and {closed}:00.
        </p>
      )}
    </footer>
  );
}
