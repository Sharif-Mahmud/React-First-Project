

const Gallery = () => {
  return (
    <>
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Image Gallery</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative group">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbsoO355bNEEiG8FkFj0uvCxRCrAqxw92JjQ&s"
                alt="Gallery Image 1"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-bold">Image 1</span>
              </div>
            </div>

            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Gallery Image 2"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-bold">Image 2</span>
              </div>
            </div>

            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg?cs=srgb&dl=pexels-atlasworld-1674049.jpg&fm=jpg"
                alt="Gallery Image 3"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-bold">Image 3</span>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb8_ZOHNdBUXI8N0EU7cZkfLRdjdwLzDmQ3w&s"
                alt="Gallery Image 3"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-bold">Image 3</span>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm8PErKVWA0tzhjo2HdOkFSK0CgNjP3mc1hA&s"
                alt="Gallery Image 3"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-bold">Image 3</span>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6UZ-mGCnOnhmAHjOZ9o4XO4T8jMLtTsCBA&s"
                alt="Gallery Image 3"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white font-bold">Image 3</span>
              </div>
            </div>

            {/* Add more images as needed */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery