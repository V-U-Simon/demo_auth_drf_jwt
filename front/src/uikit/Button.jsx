export function ButtonBase({ children, className, size = "base" }) {
  const sizeClasses = {
    small: "p-1",
    base: "p-2",
    large: "p-3",
  };

  return (
    <button className={`rounded w-full ${sizeClasses[size]} ${className}`}>
      {children}
    </button>
  );
}

export function ButtonSubmit({ children }) {
  return (
    <ButtonBase className="bg-blue-500 text-white hover:bg-blue-600">
      {children}
    </ButtonBase>
  );
}

export function ButtonLoading() {
  return (
    <ButtonBase
      className={`bg-gray-400 text-white "opacity-75 cursor-not-allowed`}
      disabled
    >
      Loading...
    </ButtonBase>
  );
}

export function ButtonLogout({ children }) {
  return (
    <ButtonBase className="bg-red-600 text-white hover:bg-red-500 w-24">
      {children}
    </ButtonBase>
  );
}
