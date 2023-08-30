// Input component for username field

export default function InputUsername({ register, errors }) {
  return (
    <div className="mb-4">
      <label
        htmlFor="username"
        className="block text-sm font-medium text-gray-600"
      >
        Username
      </label>
      <input
        type="text"
        id="username"
        className={`mt-1 p-2 w-full border rounded-md ${
          errors.username ? "border-red-500" : "border-gray-300"
        }`}
        {...register("username", { required: "This field is required!" })}
      />
      {errors.username && (
        <div className="text-red-500 text-xs mt-1">
          {errors.username.message}
        </div>
      )}
    </div>
  );
}
