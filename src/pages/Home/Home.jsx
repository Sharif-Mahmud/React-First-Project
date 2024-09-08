

const Home = () => {
  return (
    <>
      <section
        className="h-screen bg-cover bg-center mx-auto text-center items-center"
        style={{
          backgroundImage:
            "url(https://static.vecteezy.com/system/resources/thumbnails/036/226/872/small/ai-generated-nature-landscapes-background-free-photo.jpg)",
        }}
      >
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Welcome to Our Website
          </h1>
          <p className="text-2xl text-black w-2/3 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4">Our Features</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
              <div className="bg-white rounded shadow-md p-4">
                <i className="fas fa-lock fa-2x text-gray-600"></i>
                <h3 className="text-lg font-bold mb-2">Secure</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet nulla auctor, vestibulum magna sed, convallis ex.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
              <div className="bg-white rounded shadow-md p-4">
                <i className="fas fa-rocket fa-2x text-gray-600"></i>
                <h3 className="text-lg font-bold mb-2">Fast</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet nulla auctor, vestibulum magna sed, convallis ex.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
              <div className="bg-white rounded shadow-md p-4">
                <i className="fas fa-smile fa-2x text-gray-600"></i>
                <h3 className="text-lg font-bold mb-2">Friendly</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet nulla auctor, vestibulum magna sed, convallis ex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home