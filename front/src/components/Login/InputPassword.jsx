// Input component for password field
export default function InputPassword({ register, errors }) {
  return (
    <div className="mb-4">
      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-600"
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        className={`mt-1 p-2 w-full border rounded-md ${
          errors.password ? "border-red-500" : "border-gray-300"
        }`}
        {...register("password", { required: "This field is required!" })}
      />
      {errors.password && (
        <div className="text-red-500 text-xs mt-1">
          {errors.password.message}
        </div>
      )}
    </div>
  );
}
