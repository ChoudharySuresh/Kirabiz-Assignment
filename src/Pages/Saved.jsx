import { PlusIcon } from "@heroicons/react/24/outline";

const Saved = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl">Saved Contacts</h1>
        <button className="px-4 py-2 bg-gray-200 text-black rounded-md flex items-center gap-2">
          <PlusIcon class="h-6 w-6" />
          Add
        </button>
      </div>
      <hr className="my-2" />
    </div>
  );
};

export default Saved;
