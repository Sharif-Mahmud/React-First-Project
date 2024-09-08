

const About = () => {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a passionate team dedicated to delivering the best
              technology solutions to help businesses grow. With years of
              experience in the IT industry, we aim to offer cutting-edge
              services tailored to meet the unique needs of each client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:bg-gray-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiPICw0MvHj_wo8CMy5anGtsvBzqAJSQtDFw&s"
                alt="Team Member 1"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-sm text-gray-600">CEO & Founder</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:bg-gray-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8R8QqmvD2GHfMgcUODxvVme8Cm6unpEDQ8w&s"
                alt="Team Member 2"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-sm text-gray-600">CTO</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:bg-gray-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZPWjCbYxbPzblGR8vOiL6bk3kmSVaoAzoQ&s"
                alt="Team Member 3"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Emily Brown
              </h3>
              <p className="text-sm text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About