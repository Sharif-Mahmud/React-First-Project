

const Blog = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
              <div className="bg-white rounded shadow-md p-4">
                <img
                  className="mb-5"
                  src="https://images.prothomalo.com/prothomalo-bangla%2F2024-08-09%2Fr9p533eh%2FUntitled-3.jpg?rect=0%2C0%2C1600%2C1067&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0"
                  alt=""
                />
                <h3 className="text-lg font-bold mb-2">
                  রাষ্ট্র মেরামতের এখনই সময়: এম সাখাওয়াত হোসেন
                </h3>
                <p className="text-gray-600">
                  বাংলাদেশের ইতিহাসেই শুধু নয়, বিশ্ব ইতিহাসেও ২০২৪ সালের ৫ আগস্ট
                  গুরুত্বপূর্ণ অধ্যায় হয়ে থাকবে। আরব বসন্তেও এমন গর্জে ওঠেনি,
                  যেমন গর্জে উঠেছিলেন ঢাকা বিশ্ববিদ্যালয়ের তরুণ শিক্ষার্থীরা।
                  শেখ হাসিনার ফ্যাসিবাদী সরকারের দম্ভের কারণে একপর্যায়ে সারা
                  দেশে সাধারণ মানুষের মধ্যে এ আন্দোলন ছড়িয়ে পড়ে।
                </p>
                <a
                  href="#"
                  className="text-white hover:text-gray-900 px-5 py-1 bg-slate-500 rounded mt-3 table"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
              <div className="bg-white rounded shadow-md p-4">
                <img
                  className="mb-5"
                  src="https://images.prothomalo.com/prothomalo-bangla%2F2024-09-08%2Fspjrxzio%2FTauhid.jpeg?rect=0%2C137%2C931%2C621&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0"
                  alt=""
                />
                <h3 className="text-lg font-bold mb-2">
                  রাজনাথের বক্তব্যে অবাক হয়েছি: পররাষ্ট্র উপদেষ্টা
                </h3>
                <p className="text-gray-600">
                  পররাষ্ট্র উপদেষ্টা মো. তৌহিদ হোসেন বলেছেন, ভারতের
                  প্রতিরক্ষামন্ত্রী রাজনাথ সিংয়ের সাম্প্রতিক বক্তৃতায় তিনি যতটা
                  না উদ্বিগ্ন, তার চেয়ে অবাক হয়েছেন। আজ রোববার দুপুরে পররাষ্ট্র
                  মন্ত্রণালয়ে ভারতের প্রতিরক্ষামন্ত্রীর বক্তব্যের প্রতিক্রিয়ায় এ
                  মন্তব্য করেন তৌহিদ হোসেন।
                </p>
                <a
                  href="#"
                  className="text-white hover:text-gray-900 px-5 py-1 bg-slate-500 rounded mt-3 table"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
              <div className="bg-white rounded shadow-md p-4">
                <img
                  className="mb-5"
                  src="https://images.prothomalo.com/prothomalo-bangla%2F2024-09-07%2F1t1wk4jl%2F7.PNG?rect=37%2C0%2C929%2C619&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0"
                  alt=""
                />
                <h3 className="text-lg font-bold mb-2">
                  নতুন বাংলাদেশ গড়ার জন্য সংস্কারের সময় দিতে হবে
                </h3>
                <p className="text-gray-600">
                  ছাত্র-জনতার অভ্যুত্থানে আওয়ামী লীগ সরকারের টানা সাড়ে ১৫ বছরের
                  শাসনের অবসান হয় গত ৫ আগস্ট। ৮ আগস্ট গঠিত হয় ড. মুহাম্মদ
                  ইউনূসের নেতৃত্বে অন্তর্বর্তী সরকার। সেই সরকারের আইন, বিচার ও
                  সংসদবিষয়ক মন্ত্রণালয়, প্রবাসীকল্যাণ ও বৈদেশিক কর্মসংস্থান
                </p>
                <a
                  href="#"
                  className="text-white hover:text-gray-900 px-5 py-1 bg-slate-500 rounded mt-3 table"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog