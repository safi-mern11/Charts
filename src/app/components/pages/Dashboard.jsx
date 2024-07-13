import Image from "next/image";

const Dashboard = () => {
  return (
    <>
      <main className="w-full h-full ">
        {/* Header */}
        <header className="max-w-[1600px] w-full py-[11px] pl-[42px] pr-[66px] flex items-center justify-between mx-auto">
          <Image src="/Logo.svg" width={109} height={30} />
          <input
            type="text"
            className="max-w-[56.8%] w-full h-[40px]  "
            placeholder="Type to search"
          />
          <div className="max-w-[8.8%] w-full flex items-center justify-between">
            <Image src="/mail.svg" width={25} height={25} />
            <Image src="/bell.svg" width={25} height={25} />
            <Image src="/avatar.svg" width={36} height={36} />
          </div>
        </header>
      </main>
    </>
  );
};

export default Dashboard;
