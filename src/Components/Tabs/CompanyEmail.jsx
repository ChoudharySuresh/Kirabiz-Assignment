const CompanyEmail = () => {
  return (
    <div>
      <div className="border-[1px] flex justify-between items-start w-[40%] gap-3 px-3 py-3">
        <div className="flex flex-col gap-4">
          <h1>Email</h1>
          <p>Source</p>
          <p>Link</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <button className="border-[1px] px-2 py-2">Unlock</button>
          <h1 className="mt-8">Date</h1>
        </div>
      </div>
    </div>
  );
};

export default CompanyEmail;
