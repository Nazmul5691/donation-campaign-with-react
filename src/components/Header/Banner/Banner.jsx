const Banner = () => {
    return (
        <div className="hero h-[70vh]" style={{backgroundImage: 'url(https://i.ibb.co/n3dM1Qy/d.png)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h2 className="mb-5 text-2xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h2>
            <div className="flex">
      <input
        type="text"
        placeholder="Search here...."
        className="border rounded-l py-2 px-4 outline-none"
      />
      <button className="bg-red-500 text-white rounded-r py-2 px-4 hover:bg-blue-600">
      Search
      </button>
    </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;
