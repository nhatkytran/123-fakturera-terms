/** Burger icon component. */
export default function BurgerIcon({ className, ...props }) {
  return (
    <svg
      width={36}
      height={36}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
    </svg>
  );
}
