import React, { useRef, useState } from "react";
import Button from "../Button";
import Header from "../Header";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import SwiperCore from "swiper";
import { useAuth0 } from "@auth0/auth0-react";

SwiperCore.use([Autoplay, Pagination, Navigation]);
const Home2 = () => {
    const [active, stActive] = useState()
    const { loginWithRedirect, logout } = useAuth0();

    return (
        <>
            <div className="px-5 py-5">
                <Header />
                <div className="px-5 py-5 h-auto max-w-[345px] m-auto mt-28 rounded-3xl shadow-3xl bg-pink-200 bg-opacity-25 border-2 border-pink-300 mb-5  overflow-hidden">
                    <Swiper centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                            "type": "fraction"
                        }}
                        navigation={true}
                        className="mySwiper"
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide>
                            <p className="text-black font-Raleway text-base w-[345px]">
                                " वक्रतुयण्ड महाकाय , सूर्यकोटी समप्रभ । <br />
                                निर्विघ्नम कुरु मे देव , सर्वकार्येषु सर्वदा "
                            </p>
                        </SwiperSlide>

                        <SwiperSlide>
                            <p className="text-black font-Raleway text-base w-[345px]">
                                " गजानानं भूतगणादि सेवित , कपित्य जम्मूफलचार भक्षणम । <br />
                                उमासुतं शोक विनाशकारकम , नामामि विध्नेश्वर पादपंकजम "
                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className="text-black font-Raleway text-base w-[345px]">
                                " लम्बोदराय वै तुथ्य सर्वोदरगताय च ।<br />
                                अमायिने मायाया आधाराय नमो नमः "
                            </p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p className="text-black font-Raleway text-base w-[345px]">
                                " विघ्नेश्वराय वरदाय सुरप्रियाय ।<br />
                                लम्बोदराय सकलाय जगद्धितायं "
                            </p>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* <Link to="user-form" onClick={() => loginWithRedirect()}> */}
                <div className="pt-20">
                    <Button type="submit"
                        name="Login"
                        onClick={() => loginWithRedirect()} />
                </div>
                {/* </Link> */}
            </div >
        </>

    );
};

export default Home2;
