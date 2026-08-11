function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#080808]">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-white/10 border-t-[#d4a84f]" />

        <p className="mt-5 text-sm tracking-widest text-gray-500">LOADING</p>
      </div>
    </div>
  );
}

export default Loading;
