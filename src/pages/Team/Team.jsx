

function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <img
                src="https://ypid.or.id/wp-content/uploads/2017/12/team-member-2.jpg"
                alt="Team Member 1"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <h3 className="text-lg font-bold mb-2">John Doe</h3>
              <p className="text-gray-600">Software Engineer</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nulla auctor, vestibulum magna sed, convallis ex.
              </p>
              <ul className="flex justify-center mb-4">
                <li className="mr-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfq3dneguiF8RGj4tlXJ7jIlBy8IgUcE03dT8hdyeufGA5rH98fiNEJVTjCwdhb3aHfk&usqp=CAU"
                alt="Team Member 1"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <h3 className="text-lg font-bold mb-2">John Doe</h3>
              <p className="text-gray-600">Software Engineer</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nulla auctor, vestibulum magna sed, convallis ex.
              </p>
              <ul className="flex justify-center mb-4">
                <li className="mr-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynBryvKzWaR8tUKSYDGuCmuY8adeV_NVyy5UFqNDdKnj8H24gozWr75-q0I6pqSTFYvg&usqp=CAU"
                alt="Team Member 1"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <h3 className="text-lg font-bold mb-2">John Doe</h3>
              <p className="text-gray-600">Software Engineer</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nulla auctor, vestibulum magna sed, convallis ex.
              </p>
              <ul className="flex justify-center mb-4">
                <li className="mr-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                </li>
                <li className="mr-4">
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            {/* Add more team members here */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
