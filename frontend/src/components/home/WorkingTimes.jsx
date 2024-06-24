export default function WorkingTimes(){

    return <>
      <div className="block relative md:p-6 xl:p-20">
        <div className="block md:flex">
        <div className="md:min-w-[50%] p-5  min-w-[100%] xl:min-w-[39%]  flex-item order-1 md:order-2">
             
                <div className="bg-white p-7 text-center rounded-xl shadow-lg"> 
                    <h3 className="py-4 text-3xl font-bold font-open-sans leading-relaxed text-primary" >Opening Hours</h3>
                    <div className="flex justify-between">
                        <div className="p-5" >
                            <span className="font-medium">Morning Session</span>
                        </div>
                        <div className="p-5">
                            <span className="font-medium">8:00 AM - 12:00 PM</span>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <div className="p-5" >
                            <span className="font-medium">Lunch Break</span>
                        </div>
                        <div className="p-5">
                            <span className="font-medium">12:00 PM - 2:00 PM</span>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <div className="p-5" >
                            <span className="font-medium">Afternoon Session</span>
                        </div>
                        <div className="p-5">
                            <span className="font-medium">2:00 PM - 6:00 PM</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="p-5" >
                            <span className="font-medium">Office Hours</span>
                        </div>
                        <div className="p-5">
                            <span className="font-medium"> 8:30 AM - 4:30 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-w-[100%] md:min-w-[50%] md:text-start text-center xl:min-w-[61%]  p-2 xl:p-5 lg:p-9 ">
                <h1 className="md:text-5xl text-[24px]  pt-5 font-bold text-primary leading-tight pb-2">About Our School</h1>
               <span className="relative">
              <span className="absolute rounded-md top-[8px] md:ml-0 ml-[-36px] w-[70px] h-[6px] left-0 right-0 bottom-0 bg-secondary"></span>
               </span>
               
                <p className="pt-7 md:mt-5 md:max-w-[80%] p-8 md:p-2 ">
                At MY SCHOOL, we are committed to providing a nurturing and inclusive educational environment. Our mission is to empower students to achieve their full potential through a balanced curriculum that combines academic rigor with creative and extracurricular opportunities. Our dedicated educators support each student's unique journey, fostering critical thinking and instilling values of respect, integrity, and community. We believe in the power of education to build a brighter future and are proud to partner with families and the community to create an enriching and supportive learning experience. 
                  <br />
                  <br />
                </p>
                <span>
                <a href="#" className="flex py-3 mb-10 px-5 justify-evenly hover:bg-blue-300 m-auto md:mx-0  bg-primary max-w-[170px] font-bold leading-normal uppercase text-[13px] border-none mt-[40px] rounded-lg">
                    <span className="text-white">
                    READ MORE
                    </span>
                    <span className="ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                    </span>
                </a>
                </span>
            </div>
           
        </div>
    </div>
    </>
}