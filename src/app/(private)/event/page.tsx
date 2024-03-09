/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { IoArrowRedo, IoChevronBack, IoChevronForward } from 'react-icons/io5';

export interface IEventProps {
}

export default function Event(props: IEventProps) {
    return (
        <div>
            {/* <!-- main contents --> */}
            <main>

                <div className="2xl:max-w-[1220px] max-w-[1065px] mx-auto">

                    <div className="page-heading">

                        <h1 className="page-title"> Events </h1>

                        <nav className="nav__underline">

                            <ul data-uk-tab className="group" data-uk-switcher="connect: #tabs ; animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium">

                                <li> <a href="#"> Suggestions  </a> </li>
                                <li> <a href="#"> Popular </a> </li>
                                <li> <a href="#"> My events </a> </li>

                            </ul>

                        </nav>

                    </div>

                    {/* <!-- event feautred --> */}
                    <div className="relative" tabIndex={-1} data-uk-slider="finite:true">

                        <div className="uk-slider-container pb-1">

                            <ul className="uk-slider-items grid-small">

                                <li className="lg:w-1/4 sm:w-1/3 w-1/2">
                                    <div className="card">
                                        <a href="timeline-event.html">
                                            <div className="card-media h-32">
                                                <img src="images/events/img-3.jpg" alt="" />
                                                <div className="card-overly"></div>
                                            </div>
                                        </a>
                                        <div className="card-body">
                                            <p className="text-xs font-medium text-blue-600 mb-1"> Next week </p>
                                            <a href="timeline-event.html"><h4 className="card-title text-sm"> About Safety and Flight  </h4> </a>
                                            <a href="#"> <p className="card-text text-black mt-2"> Dubai </p> </a>
                                            <div className="card-list-info text-xs mt-1">
                                                <div> 26 Intersted</div>
                                                <div className="md:block hidden">·</div>
                                                <div> 8 Going</div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button type="button" className="button bg-primary text-white flex-1">Intersted</button>
                                                <button type="button" className="button bg-secondery !w-auto"> <IoArrowRedo className="text-lg" /> </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="lg:w-1/4 sm:w-1/3 w-1/2">
                                    <div className="card">
                                        <a href="timeline-event.html">
                                            <div className="card-media h-32">
                                                <img src="images/events/img-2.jpg" alt="" />
                                                <div className="card-overly"></div>
                                            </div>
                                        </a>
                                        <div className="card-body">
                                            <p className="text-xs font-semibold text-teal-600 mb-1">Opening</p>
                                            <a href="timeline-event.html"><h4 className="card-title text-sm"> Wedding trend Ideas  </h4> </a>
                                            <a href="#"> <p className="card-text text-black mt-2"> Turkey </p></a>
                                            <div className="card-list-info text-xs mt-1">
                                                <div> 20 Intersted</div>
                                                <div className="md:block hidden">·</div>
                                                <div> 16 Going</div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button type="button" className="button bg-primary text-white flex-1">Intersted</button>
                                                <button type="button" className="button bg-secondery !w-auto"> <IoArrowRedo className="text-lg" /> </button>
                                            </div>

                                        </div>
                                    </div>
                                </li>
                                <li className="lg:w-1/4 sm:w-1/3 w-1/2">
                                    <div className="card">
                                        <a href="timeline-event.html">
                                            <div className="card-media h-32">
                                                <img src="images/events/img-1.jpg" alt="" />
                                                <div className="card-overly"></div>
                                            </div>
                                        </a>
                                        <div className="card-body">
                                            <p className="text-xs font-medium text-red-600 mb-1"> WED JUL 10,2024 AT 10PM </p>
                                            <a href="timeline-event.html"><h4 className="card-title text-sm"> The global creative  </h4> </a>
                                            <a href="#"> <p className="card-text text-black mt-2"> Japan </p> </a>
                                            <div className="card-list-info text-xs mt-1">
                                                <div> 15 Intersted</div>
                                                <div className="md:block hidden">·</div>
                                                <div> 2 Going</div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button type="button" className="button bg-primary text-white flex-1">Intersted</button>
                                                <button type="button" className="button bg-secondery !w-auto"> <IoArrowRedo className="text-lg" /> </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="lg:w-1/4 sm:w-1/3 w-1/2">
                                    <div className="card">
                                        <a href="timeline-event.html">
                                            <div className="card-media h-32">
                                                <img src="images/events/img-4.jpg" alt="" />
                                                <div className="card-overly"></div>
                                            </div>
                                        </a>
                                        <div className="card-body">
                                            <p className="text-xs font-semibold text-teal-600 mb-1">Opening</p>
                                            <a href="timeline-event.html"><h4 className="card-title text-sm"> Perspective is everything  </h4> </a>
                                            <a href="#"> <p className="card-text text-black mt-2"> London </p></a>
                                            <div className="card-list-info text-xs mt-1">
                                                <div> 20 Intersted</div>
                                                <div className="md:block hidden">·</div>
                                                <div> 16 Going</div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button type="button" className="button bg-primary text-white flex-1">Intersted</button>
                                                <button type="button" className="button bg-secondery !w-auto"> <IoArrowRedo className="text-lg" /> </button>
                                            </div>

                                        </div>
                                    </div>
                                </li>
                                <li className="lg:w-1/4 sm:w-1/3 w-1/2">
                                    <div className="card">
                                        <a href="timeline-event.html">
                                            <div className="card-media h-32">
                                                <img src="images/events/img-3.jpg" alt="" />
                                                <div className="card-overly"></div>
                                            </div>
                                        </a>
                                        <div className="card-body">
                                            <p className="text-xs font-medium text-blue-600 mb-1"> Next week </p>
                                            <a href="timeline-event.html"><h4 className="card-title text-sm"> About Safety and Flight  </h4> </a>
                                            <a href="#"> <p className="card-text text-black mt-2"> Dubai </p> </a>
                                            <div className="card-list-info text-xs mt-1">
                                                <div> 26 Intersted</div>
                                                <div className="md:block hidden">·</div>
                                                <div> 8 Going</div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button type="button" className="button bg-primary text-white flex-1">Intersted</button>
                                                <button type="button" className="button bg-secondery !w-auto"> <IoArrowRedo className="text-lg" /> </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>

                        </div>

                        {/* <!-- slide nav icons --> */}
                        <a className="nav-prev !top-20" href="#" data-uk-slider-item="previous"> <IoChevronBack className="text-2xl" />  </a>
                        <a className="nav-next !top-20" href="#" data-uk-slider-item="next"> <IoChevronForward className="text-2xl" /></a>

                    </div>

                    <div className="sm:my-6 my-3 flex items-center justify-between md:mt-10">
                        <div>
                            <h2 className="text-xl font-semibold"> Lists You May Like </h2>
                            <p className="font-normal text-sm text-gray-500 leading-6"> Find a group by browsing top categories. </p>
                        </div>
                        <a href="#" className="text-blue-500 sm:block hidden text-sm"> See all </a>
                    </div>

                    {/* <!-- listing  slider --> */}
                    <div className="relative mt-4" tabIndex={-1} data-uk-slider="finite:true">

                        <div className="uk-slider-container pb-1">

                            <ul className="uk-slider-items grid-small">

                                <li className="md:w-1/5 sm:w-1/3 w-1/2">
                                    <a href="#">
                                        <div className="relative rounded-lg overflow-hidden">
                                            <img src="images/events/listing-1.jpg" alt="" className="h-36 w-full object-cover" />
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10">
                                                <div className="text-white p-5">
                                                    <div className="text-sm font-light"> Miami  </div>
                                                    <div className="text-lg leading-3 mt-1.5"> Hotels </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="md:w-1/5 sm:w-1/3 w-1/2">
                                    <a href="#">
                                        <div className="relative rounded-lg overflow-hidden">
                                            <img src="images/events/listing-2.jpg" alt="" className="h-36 w-full object-cover" />
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10">
                                                <div className="text-white p-5">
                                                    <div className="text-sm font-light">  Florida  </div>
                                                    <div className="text-lg leading-3 mt-1.5"> Hotels </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="md:w-1/5 sm:w-1/3 w-1/2">
                                    <a href="#">
                                        <div className="relative rounded-lg overflow-hidden">
                                            <img src="images/events/listing-3.jpg" alt="" className="h-36 w-full object-cover" />
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10">
                                                <div className="text-white p-5">
                                                    <div className="text-sm font-light">   London  </div>
                                                    <div className="text-lg leading-3 mt-1.5"> Hotels </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="md:w-1/5 sm:w-1/3 w-1/2">
                                    <a href="#">
                                        <div className="relative rounded-lg overflow-hidden">
                                            <img src="images/events/listing-4.jpg" alt="" className="h-36 w-full object-cover" />
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10">
                                                <div className="text-white p-5">
                                                    <div className="text-sm font-light">   Dubai  </div>
                                                    <div className="text-lg leading-3 mt-1.5"> Hotels </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="md:w-1/5 sm:w-1/3 w-1/2">
                                    <a href="#">
                                        <div className="relative rounded-lg overflow-hidden">
                                            <img src="images/events/listing-5.jpg" alt="" className="h-36 w-full object-cover" />
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10">
                                                <div className="text-white p-5">
                                                    <div className="text-sm font-light"> Turkey </div>
                                                    <div className="text-lg leading-3 mt-1.5"> Resturent </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="md:w-1/5 sm:w-1/3 w-1/2">
                                    <a href="#">
                                        <div className="relative rounded-lg overflow-hidden">
                                            <img src="images/events/listing-1.jpg" alt="" className="h-36 w-full object-cover" />
                                            <div className="w-full bottom-0 absolute left-0 bg-gradient-to-t from-black/60 pt-10">
                                                <div className="text-white p-5">
                                                    <div className="text-sm font-light"> Miami  </div>
                                                    <div className="text-lg leading-3 mt-1.5"> Hotels </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                        </div>

                        {/* <!-- slide nav icons --> */}
                        <a className="nav-prev" href="#" data-uk-slider-item="previous"> <IoChevronBack className="text-2xl" /> </a>
                        <a className="nav-next" href="#" data-uk-slider-item="next"> <IoChevronForward className="text-2xl" /></a>

                    </div>

                    <div className="flex items-center justify-between text-black dark:text-white py-3 mt-6">
                        <h3 className="text-xl font-semibold"> Upcomming Events </h3>
                        <a href="#" className="text-sm text-blue-500">See all</a>
                    </div>

                    {/* <!-- event grid --> */}
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2.5 mt-4">

                        <div className="card">
                            <a href="timeline-event.html">
                                <div className="card-media h-32">
                                    <img src="images/events/img-1.jpg" alt="" />
                                    <div className="card-overly"></div>
                                </div>
                            </a>
                            <div className="card-body">
                                <p className="text-xs font-medium text-black dark:text-red-600 mb-1"> WED JUL 10,2024 AT 10PM </p>
                                <a href="timeline-event.html"><h4 className="card-title text-sm"> The global creative  </h4> </a>
                                <a href="#"> <p className="card-text text-black mt-2"> Japan </p> </a>
                                <div className="card-list-info text-xs mt-1">
                                    <div> 15 Intersted</div>
                                    <div className="md:block hidden">·</div>
                                    <div> 2 Going</div>
                                </div>
                                <div className="flex gap-2">
                                    <button type="button" className="button bg-primary text-white flex-1">Intersted</button>
                                    <button type="button" className="button bg-secondery !w-auto"> <IoArrowRedo className="text-lg" /> </button>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <a href="timeline-event.html">
                                <div className="card-media h-32">
                                    <img src="images/events/img-2.jpg" alt="" />
                                    <div className="card-overly"></div>
                                </div>
                            </a>
                            <div className="card-body">
                                <p className="text-xs font-semibold text-teal-600 mb-1">Opening</p>
                                <a href="timeline-event.html"><h4 className="card-title text-sm"> Wedding trend Ideas  </h4> </a>
                                <a href="#"> <p className="card-text text-black mt-2"> Turkey </p></a>
                                <div className="card-list-info text-xs mt-1">
                                    <div> 20 Intersted</div>
                                    <div className="md:block hidden">·</div>
                                    <div> 16 Going</div>
                                </div>
                                <div className="flex gap-2">
                                    <button type="button" className="button bg-primary text-white flex-1">Intersted</button>
                                    <button type="button" className="button bg-secondery !w-auto"> <IoArrowRedo className="text-lg" /> </button>
                                </div>

                            </div>
                        </div>

                        <div className="card">
                            <a href="timeline-event.html">
                                <div className="card-media h-32">
                                    <img src="images/events/img-3.jpg" alt="" />
                                    <div className="card-overly"></div>
                                </div>
                            </a>
                            <div className="card-body">
                                <p className="text-xs font-medium text-black dark:text-red-600 mb-1"> WED JUL 10,2024 AT 10PM </p>
                                <a href="timeline-event.html"><h4 className="card-title text-sm"> About Safety and Flight  </h4> </a>
                                <a href="#"> <p className="card-text text-black mt-2"> Dubai </p> </a>
                                <div className="card-list-info text-xs mt-1">
                                    <div> 26 Intersted</div>
                                    <div className="md:block hidden">·</div>
                                    <div> 8 Going</div>
                                </div>
                                <div className="flex gap-2">
                                    <button type="button" className="button bg-primary text-white flex-1">Intersted</button>
                                    <button type="button" className="button bg-secondery !w-auto"> <IoArrowRedo className="text-lg" /> </button>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <a href="timeline-event.html">
                                <div className="card-media h-32">
                                    <img src="images/events/img-4.jpg" alt="" />
                                    <div className="card-overly"></div>
                                </div>
                            </a>
                            <div className="card-body">
                                <p className="text-xs font-semibold text-teal-600 mb-1">Opening</p>
                                <a href="timeline-event.html"><h4 className="card-title text-sm"> Perspective is everything  </h4> </a>
                                <a href="#"> <p className="card-text text-black mt-2"> London </p></a>
                                <div className="card-list-info text-xs mt-1">
                                    <div> 20 Intersted</div>
                                    <div className="md:block hidden">·</div>
                                    <div> 16 Going</div>
                                </div>
                                <div className="flex gap-2">
                                    <button type="button" className="button bg-primary text-white flex-1">Intersted</button>
                                    <button type="button" className="button bg-secondery !w-auto"> <IoArrowRedo className="text-lg" /> </button>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </main>
        </div>
    );
}
