import Navbar from '../components/nav.jsx'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function LandingPage () {
    return (
        <>
            <Navbar/>
            <div className="grid grid-cols-2 gap-1 pt-[150px] pr-[100px] pb-[150px] pl-[80px] text-black bg-[#FFF5F5] sm:pr-[30px] sm:pl-[30px] lg:pr-[100px] lg:pl-[80px]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className="w-[150%] text-left mt-[70px] sm:w-[100%] sm:text-center md:text-left lg:text-left">
                    <h1 className='text-[60px] font-bold mb-[10px] text-[#40455B] w-[90%]'>Eat Fresh Food Stay Healthy.</h1>
                    <p className='w-[100%] text-[#3c3e41] font-medium mt-[25px] text-[18px] mb-7 sm:text-[16px] sm:w-[100%] md:w-[70%] lg:w-[70%]'>Continually embrace functional vortals vis-a-vis user friendly processes target maintainable</p>
                    <button className='flex justify-center items-center p-[10px] rounded-md text-[13px] text-center font-medium shadow-md text-white hover:bg-[#D38000] bg-[#D37430] animate-bounce sm:w-full md:w-[30%] lg:w-[20%]' type="button"><a href="#service">View Menu</a></button>
                    <div className="grid grid-cols-4 gap-1 pt-[60px] w-[30%]">
                        <img className='w-[60%] cursor-pointer' src="./Images/Frame 630354.png" alt="" />
                        <img className='w-[60%] cursor-pointer' src="./Images/Frame 630355.png" alt="" />
                        <img className='w-[60%] cursor-pointer' src="./Images/Frame 630357.png" alt="" />
                        <img className='w-[60%] cursor-pointer' src="./Images/download.png" alt="" />
                    </div>
                </div>
                <div className='w-[90%]'>
                    <img className='' src="./Images/i4.jpg" alt="" />
                </div>
            </div>
            <div className='fixed w-full top-[70%] left-[96%]'>
                <img className='w-[3.5%] rounded-full cursor-pointer shadow-lg' src="./Images/cart.jpg" alt="" />
            </div>
            <section id='features'>
                <div className='pt-[150px] pb-[10px] pl-[80px]'>
                    <div>
                        <h1 className='text-[45px] font-bold mb-[10px] text-[#40455B] w-[30%] leading-[55px]'>Week Top & Popular Dish</h1>
                        <img className='flex justify-center items-center w-[14%] ml-[20px]' src="./Images/Vector 1.png" alt="" />
                    </div>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{delay: 1500,disableOnInteraction: false,}}
                    pagination={{clickable: true,}}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper swiper2"
                    >
                    <SwiperSlide>
                        <div className='grid grid-cols-3 gap-5 pr-[100px] pl-[80px] pb-[100px]'>
                            <div className='flex flex-col justify-center p-[30px] items-center rounded-md shadow-md border-solid'>
                                <img className='w-[80%]' src="./Images/edit/i1.jpg" alt="" />
                                <h2 className='text-[25px] font-bold mb-[30px] text-[#40455B]'>Spaghetti</h2>
                                <p className='text-center w-[80%]'>Dynamically whiteboard sticky infrastructures before pandemic users. Proactively simplify open </p>
                            </div>
                            <div className='flex flex-col justify-center p-[30px] items-center rounded-md shadow-md border-solid'>
                                <img className='w-[80%] mb-[20px]' src="./Images/edit/i5.jpg" alt="" />
                                <h2 className='text-[25px] font-bold mb-[30px] text-[#40455B]'>Pizzal</h2>
                                <p className='text-center w-[80%]'>Dynamically whiteboard sticky infrastructures before pandemic users. Proactively simplify open </p>
                            </div>
                            <div className='flex flex-col justify-center p-[30px]  items-center rounded-md shadow-md border-solid'>
                                <img className='w-[80%]' src="./Images/edit/i4.jpg" alt="" />
                                <h2 className='text-[25px] font-bold mb-[30px] text-[#40455B]'>Burger-pack</h2>
                                <p className='text-center w-[80%]'>Dynamically whiteboard sticky infrastructures before pandemic users. Proactively simplify open </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='grid grid-cols-3 gap-5 pr-[100px] pl-[80px] pb-[100px]'>
                            <div className='flex flex-col justify-center p-[30px] items-center rounded-md shadow-md border-solid'>
                                <img className='w-[80%]' src="./Images/m5.jpg" alt="" />
                                <h2 className='text-[25px] font-bold mb-[30px] text-[#40455B]'>Spaghetti</h2>
                                <p className='text-center w-[80%]'>Dynamically whiteboard sticky infrastructures before pandemic users. Proactively simplify open </p>
                            </div>
                            <div className='flex flex-col justify-center p-[30px] items-center rounded-md shadow-md border-solid'>
                                <img className='w-[90%] mb-[20px]' src="./Images/i2.jpg" alt="" />
                                <h2 className='text-[25px] font-bold mb-[30px] text-[#40455B]'>Pizzal</h2>
                                <p className='text-center w-[80%]'>Dynamically whiteboard sticky infrastructures before pandemic users. Proactively simplify open </p>
                            </div>
                            <div className='flex flex-col justify-center p-[30px]  items-center rounded-md shadow-md border-solid'>
                                <img className='w-[60%]' src="./Images/i6.jpg" alt="" />
                                <h2 className='text-[25px] font-bold mb-[30px] text-[#40455B]'>Burger-pack</h2>
                                <p className='text-center w-[80%]'>Dynamically whiteboard sticky infrastructures before pandemic users. Proactively simplify open </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section id='about'>
                <div  className='pt-[150px] pb-[50px] pl-[80px]'>
                    <div className='grid grid-cols-2 gap-1'>
                        <img className="rounded-lg w-[90%]" src="./Images/chef.jpg" alt="" />
                        <div>
                            <h1 className='text-[45px] font-bold  text-[#40455B] w-[90%] leading-[55px]'>A Good Food Make a Great Day</h1>
                            <img className='flex justify-center items-center w-[24%] ml-[20px] mb-[30px]' src="./Images/Vector 1.png" alt="" />
                            <p className='w-[80%] mb-[30px] text-gray-600'>Professionally fashion flexible relationships and extensible informaties. Appropriately procraastinate 24/365 opportunities rather than bleeding-edge solutions. Completely coordinate end-to-end systems.</p>
                            <button className='flex justify-center items-center p-[10px] rounded-md text-[13px] text-center font-medium shadow-md text-white hover:bg-[#D38000] bg-[#D37430] animate-bounce sm:w-full md:w-[30%] lg:w-[20%]' type="button"><a href="#contact">Learn More</a></button>
                        </div>
                    </div>
                </div>
            </section>
            <section id='service'>
                <div className='grid grid-cols-2 pt-[150px] pb-[50px] pl-[80px]'>
                    <div>
                        <h1 className='text-[45px] font-bold mb-[10px] text-[#40455B] w-[70%] leading-[55px]'>Special Menu</h1>
                        <img className='flex justify-center items-center w-[14%] ml-[20px]' src="./Images/Vector 1.png" alt="" />
                    </div>
                    <div>
                        <ul className='flex justify-center items-center space-x-4'>
                            <li className='text-[19px]'><a href="">All Item</a></li>
                            <li className='text-[19px]'><a href="">Chicken</a></li>
                            <li className='text-[19px]'><a href="">Pizza</a></li>
                            <li  className='text-[19px]'><a href="">Burger</a></li>
                            <li className='text-[19px]'><a href="">Soup</a></li>
                        </ul>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-3 pr-[100px] pl-[80px] pb-[100px]'>
                    <div className='flex flex-col justify-center p-[30px] items-center rounded-md shadow-md border-solid'>
                        <img className='' src="./Images/m1.jpg" alt="" />
                        <div className='flex justify-between items-center gap-2 mt-[10px]'>
                            <div>
                                <h2 className='text-[20px] mt-[30px] font-bold mb-[30px] text-[#40455B]'>Spaghetti</h2>
                            </div>
                            <div className='flex justify-end'>
                                <img className="w-[20%] mb-[30px] mr-[10px] mt-[30px]" src="./Images/Frame 630369.png" alt="" />
                                <span className='text-[15px] font-bold mb-[30px] text-[#40455B] mt-[30px]'>9.5</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-center w-full'>
                            <button className='flex justify-center items-center p-[10px] rounded-md text-[13px] text-center font-medium shadow-md text-white hover:bg-[#D38000] bg-[#D37430] sm:w-full md:w-[30%] lg:w-[45%]' type="button"><a href="#contact">Add to cart</a></button>
                            <span className='text-[15px] font-bold text-[#40455B]'>$40.90</span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center p-[30px] items-center rounded-md shadow-md border-solid'>
                        <img className='' src="./Images/m2.jpg" alt="" />
                        <div className='flex justify-between items-center gap-2 mt-[10px]'>
                            <div>
                                <h2 className='text-[20px] mt-[30px] font-bold mb-[30px] text-[#40455B]'>Spaghetti</h2>
                            </div>
                            <div className='flex justify-end'>
                                <img className="w-[20%] mb-[30px] mr-[10px] mt-[30px]" src="./Images/Frame 630369.png" alt="" />
                                <span className='text-[15px] font-bold mb-[30px] text-[#40455B] mt-[30px]'>9.5</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-center w-full'>
                            <button className='flex justify-center items-center p-[10px] rounded-md text-[13px] text-center font-medium shadow-md text-white hover:bg-[#D38000] bg-[#D37430] sm:w-full md:w-[30%] lg:w-[45%]' type="button"><a href="#contact">Add to cart</a></button>
                            <span className='text-[15px] font-bold text-[#40455B]'>$40.90</span>
                        </div> 
                    </div>
                    <div className='flex flex-col justify-center p-[30px]  items-center rounded-md shadow-md border-solid'>
                        <img className='w-[85%]' src="./Images/edit/i6.jpg" alt="" />
                        <div className='flex justify-between items-center gap-2 mt-[20px]'>
                            <div>
                                <h2 className='text-[20px] mt-[30px] font-bold mb-[30px] text-[#40455B]'>Spaghetti</h2>
                            </div>
                            <div className='flex justify-end'>
                                <img className="w-[20%] mb-[30px] mr-[10px] mt-[30px]" src="./Images/Frame 630369.png" alt="" />
                                <span className='text-[15px] font-bold mb-[30px] text-[#40455B] mt-[30px]'>9.5</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-center w-full'>
                            <button className='flex justify-center items-center p-[10px] rounded-md text-[13px] text-center font-medium shadow-md text-white hover:bg-[#D38000] bg-[#D37430] sm:w-full md:w-[30%] lg:w-[45%]' type="button"><a href="#contact">Add to cart</a></button>
                            <span className='text-[15px] font-bold text-[#40455B]'>$40.90</span>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center p-[30px]  items-center rounded-md shadow-md border-solid'>
                        <img className='' src="./Images/m4.jpg" alt="" />
                        <div className='flex justify-between items-center gap-2 mt-[10px]'>
                            <div>
                                <h2 className='text-[20px] mt-[30px] font-bold mb-[30px] text-[#40455B]'>Spaghetti</h2>
                            </div>
                            <div className='flex justify-end'>
                                <img className="w-[20%] mb-[30px] mr-[10px] mt-[30px]" src="./Images/Frame 630369.png" alt="" />
                                <span className='text-[15px] font-bold mb-[30px] text-[#40455B] mt-[30px]'>9.5</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-center w-full'>
                            <button className='flex justify-center items-center p-[10px] rounded-md text-[13px] text-center font-medium shadow-md text-white hover:bg-[#D38000] bg-[#D37430] sm:w-full md:w-[30%] lg:w-[45%]' type="button"><a href="#contact">Add to cart</a></button>
                            <span className='text-[15px] font-bold text-[#40455B]'>$40.90</span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div  className='pt-[100px] pb-[50px] pl-[80px]'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{delay: 1500,disableOnInteraction: false,}}
                        pagination={{clickable: true,}}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        >
                        <SwiperSlide>
                            <div className='grid grid-cols-2 cursor-pointer'>
                                <div className='w-[75%]'>   
                                    <img className="" src="./Images/m4.jpg" alt="" />
                                </div>
                                <div>
                                    <h1 className='text-[40px] font-bold  text-[#40455B] w-[70%] leading-[55px]'>What Customer Say About Us?</h1>
                                    <img className='flex justify-center items-center w-[24%] ml-[20px] mb-[30px]' src="./Images/Vector 1.png" alt="" />
                                    <p className='w-[75%] mb-[30px] text-gray-600'>Assertively coordinate real time functionalities vis-a-vis extensive benefits. Rapidiously grow focused schemas rather than respurce maximizing solutions. Interactively monetize open-source service rather than</p>
                                    <img className="w-[10%] mb-[10px]" src="./Images/Frame 630368.png" alt="" />
                                    <h2 className='text-[20px] font-bold  text-[#40455B]'>Melanin</h2>
                                    <p className='text-[16px] text-gray-500'>Project manager</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='grid grid-cols-2 gap-1 cursor-pointer'>
                                <img className="w-[70%]" src="./Images/m1.jpg" alt="" />
                                <div>
                                    <h1 className='text-[40px] font-bold  text-[#40455B] w-[70%] leading-[55px]'>What Customer Say About Us?</h1>
                                    <img className='flex justify-center items-center w-[24%] ml-[20px] mb-[30px]' src="./Images/Vector 1.png" alt="" />
                                    <p className='w-[75%] mb-[30px] text-gray-600'>Assertively coordinate real time functionalities vis-a-vis extensive benefits. Rapidiously grow focused schemas rather than respurce maximizing solutions. Interactively monetize open-source service rather than</p>
                                    <img className="w-[10%] mb-[10px]" src="./Images/Frame 630368.png" alt="" />
                                    <h2 className='text-[20px] font-bold  text-[#40455B]'>Esther</h2>
                                    <p className='text-[16px] text-gray-500'>Customer</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='grid grid-cols-2 gap-1 cursor-pointer'>
                                <img className="w-[70%]" src="./Images/m2.jpg" alt="" />
                                <div>
                                    <h1 className='text-[40px] font-bold  text-[#40455B] w-[70%] leading-[55px]'>What Customer Say About Us?</h1>
                                    <img className='flex justify-center items-center w-[24%] ml-[20px] mb-[30px]' src="./Images/Vector 1.png" alt="" />
                                    <p className='w-[75%] mb-[30px] text-gray-600'>Assertively coordinate real time functionalities vis-a-vis extensive benefits. Rapidiously grow focused schemas rather than respurce maximizing solutions. Interactively monetize open-source service rather than</p>
                                    <img className="w-[10%] mb-[10px]" src="./Images/Frame 630368.png" alt="" />
                                    <h2 className='text-[20px] font-bold  text-[#40455B]'>Emeka</h2>
                                    <p className='text-[16px] text-gray-500'>Director</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section id='contact' className='pl-[80px] pt-[150px] pb-[150px]'>
                <div className='cc grid grid-cols-2 gap-4'>
                    <div>
                        <h1 className='text-[40px] text-white font-medium'>Join Our Member And Get Bonus Amount Up To 50%</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <input type="email" className="inn w-[75%] pl-[13px] pt-[12px] pb-[12px] rounded-md" placeholder='Enter Your Email Here' />
                        <button className='absolute left-[86.5%] flex justify-center items-center p-[10px] rounded-md text-[13px] text-center font-medium shadow-md  text-white hover:bg-[#D38000] bg-[#D37430] sm:w-full md:w-[30%] lg:w-[7%]' type="submit">Join Now</button>
                    </div>
                </div>
            </section>  
        </>
    )
}
export default LandingPage