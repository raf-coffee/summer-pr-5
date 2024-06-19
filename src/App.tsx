import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  text: string;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) =>
    alert(JSON.stringify(data, null, 4));

  return (
    <main className="max-w-7xl mx-auto p-4">
      <div className="max-w-[500px] mx-auto">
        <form
          className=" bg-white rounded border border-slate-400 mt-10 p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full relative">
            <label
              htmlFor="firstName"
              className="block font-medium leading-6 text-gray-900"
            >
              Введите имя:
            </label>
            <input
              id="firstName"
              placeholder="Например: Иван"
              className={`mt-2 py-2 focus-visible:outline focus-visible:outline-cyan-400 px-3 rounded border border-slate-400 w-full${
                errors.firstName ? " border-red-600" : ""
              }`}
              aria-invalid={errors.firstName ? "true" : "false"}
              {...register("firstName", {
                required: "Это обязательное поле",
                minLength: {
                  value: 2,
                  message: "Имя должна быть больше 2 символов",
                },
              })}
            />
            {errors.firstName && (
              <span
                role="alert"
                className="absolute -bottom-6 left-0 text-red-600"
              >
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="w-full mt-6 relative">
            <label
              htmlFor="lastName"
              className="block font-medium leading-6 text-gray-900"
            >
              Введите фамилию:
            </label>
            <input
              id="lastName"
              placeholder="Например: Иванов"
              className={`mt-2 py-2 focus-visible:outline focus-visible:outline-cyan-400 px-3 rounded border border-slate-400 w-full${
                errors.lastName ? " border-red-600" : ""
              }`}
              aria-invalid={errors.lastName ? "true" : "false"}
              {...register("lastName", {
                required: "Это обязательное поле",
                minLength: {
                  value: 2,
                  message: "Фамилия должна быть больше 2 символов",
                },
              })}
            />
            {errors.lastName && (
              <span
                role="alert"
                className="absolute -bottom-6 left-0 text-red-600"
              >
                {errors.lastName.message}
              </span>
            )}
          </div>
          <div className="w-full mt-6 relative">
            <label
              htmlFor="email"
              className="block font-medium leading-6 text-gray-900"
            >
              Введите почту:
            </label>
            <input
              id="email"
              placeholder="Например: email@example.com"
              className={`mt-2 py-2 focus-visible:outline focus-visible:outline-cyan-400 px-3 rounded border border-slate-400 w-full${
                errors.email ? " border-red-600" : ""
              }`}
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email", {
                required: "Это обязательное поле",
                pattern: {
                  value: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
                  message: "Введите корректный e-mail",
                },
              })}
            />
            {errors.email && (
              <span
                role="alert"
                className="absolute -bottom-6 left-0 text-red-600"
              >
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="w-full mt-6 relative">
            <label
              htmlFor="phoneNumber"
              className="block font-medium leading-6 text-gray-900"
            >
              Введите номер телефона:
            </label>
            <input
              id="phoneNumber"
              placeholder="Например: 7-111-123-45-67"
              className={`mt-2 py-2 focus-visible:outline focus-visible:outline-cyan-400 px-3 rounded border border-slate-400 w-full${
                errors.phoneNumber ? " border-red-600" : ""
              }`}
              aria-invalid={errors.phoneNumber ? "true" : "false"}
              {...register("phoneNumber", {
                required: "Это обязательное поле",
                pattern: {
                  value: /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                  message: "Введите корректный номер телефона",
                },
              })}
            />
            {errors.phoneNumber && (
              <span
                role="alert"
                className="absolute -bottom-6 left-0 text-red-600"
              >
                {errors.phoneNumber.message}
              </span>
            )}
          </div>
          <div className="w-full mt-6 relative">
            <label
              htmlFor="text"
              className="block font-medium leading-6 text-gray-900"
            >
              Поле ввода текста:
            </label>
            <textarea
              id="text"
              className={`mt-2 py-2 focus-visible:outline focus-visible:outline-cyan-400 px-3 rounded border border-slate-400 w-full${
                errors.text ? " border-red-600" : ""
              }`}
              aria-invalid={errors.text ? "true" : "false"}
              {...register("text", {
                required: "Это обязательное поле",
                minLength: {
                  value: 2,
                  message: "Текст должен быть больше 2 символов",
                },
              })}
            />
            {errors.text && (
              <span
                role="alert"
                className="absolute -bottom-6 left-0 text-red-600"
              >
                {errors.text.message}
              </span>
            )}
          </div>
          <button className="border bg-blue-600 px-6 py-4 rounded-lg mt-6 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            Отправить
          </button>
        </form>
      </div>
    </main>
  );
}
export default App;
