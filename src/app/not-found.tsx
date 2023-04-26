export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full animate-fade-up">
      <h2 className="font-serif text-2xl font-bold text-neutral-200">
        Not Found
      </h2>
      <p className="text-neutral-400">Could not find requested resource</p>
    </div>
  );
}
