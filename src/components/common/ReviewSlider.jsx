import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"

// Swiper components & modules
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination, EffectCoverflow } from "swiper/modules"

// Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import "../../App.css"

// Icons
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa"

// API
import { apiConnector } from "../../services/apiconnector"
import { ratingsEndpoints } from "../../services/apis"

function ReviewSlider() {
  const [reviews, setReviews] = useState([])
  const [swiperInstance, setSwiperInstance] = useState(null)  
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(true)
  const truncateWords = 20

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiConnector(
          "GET",
          ratingsEndpoints.REVIEWS_DETAILS_API
        )
        console.log(data)
        if (data?.success) {
          setReviews(data?.data || [])
        }
      } catch (error) {
        console.error("Error fetching reviews:", error)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  useEffect(() => {
    let interval;
    if (swiperInstance && reviews.length > 0) {
      // Reset progress when slide changes
      setProgress(0)
      
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            return 0
          }
          return prev + 1
        })
      }, 100) // Update every 100ms for 10s total
    }
    
    return () => clearInterval(interval)
  }, [swiperInstance, currentSlide, reviews.length])

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex)
    setProgress(0)
  }

  if (loading) {
    return (
      <div className="text-white">
        <div className="my-12 max-w-[90%] mx-auto lg:max-w-4xl">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!loading && reviews.length === 0) {
    return (
      <div className="text-white">
        <div className="my-12 max-w-[90%] mx-auto lg:max-w-4xl">
          <div className="flex justify-center items-center h-64">
            <p className="text-richblack-300 text-lg font-medium">
              No reviews available
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="text-white relative">
      <div className="my-12 w-full max-w-6xl mx-auto px-4 relative">
        {/* Custom Navigation Buttons */}
        <div className="swiper-nav-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-richblack-700 hover:bg-richblack-600 rounded-full p-3 cursor-pointer transition-all duration-200 shadow-lg">
          <FaChevronLeft className="text-yellow-400 w-4 h-4" />
        </div>
        <div className="swiper-nav-next absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-richblack-700 hover:bg-richblack-600 rounded-full p-3 cursor-pointer transition-all duration-200 shadow-lg">
          <FaChevronRight className="text-yellow-400 w-4 h-4" />
        </div>

        <div className="relative">
          <Swiper
            onSwiper={setSwiperInstance}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={30}
            loop={reviews.length > 1}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".swiper-nav-next",
              prevEl: ".swiper-nav-prev",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet custom-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active custom-bullet-active",
            }}
            onSlideChange={handleSlideChange}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
            className="review-swiper overflow-visible"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i} className="swiper-slide-custom">
                <div className={`review-card transition-all duration-500 ${
                  i === currentSlide ? 'active-slide' : 'inactive-slide'
                }`}>
                  <div className="flex flex-col gap-6 bg-richblack-800 p-6 rounded-xl shadow-2xl border border-richblack-700 h-full min-h-[380px] w-full max-w-sm mx-auto">
                    {/* User Info */}
                    <div className="flex items-center gap-4">
                      <img
                        src={
                          review?.user?.image
                            ? review.user.image
                            : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                        }
                        alt={`${review?.user?.firstName} ${review?.user?.lastName}`}
                        className="h-12 w-12 rounded-full object-cover border-2 border-yellow-400"
                      />
                      <div className="flex flex-col">
                        <h1 className="font-bold text-richblack-5 text-lg">
                          {`${review?.user?.firstName} ${review?.user?.lastName}`}
                        </h1>
                        <h2 className="text-sm font-medium text-yellow-400">
                          {review?.course?.courseName}
                        </h2>
                      </div>
                    </div>

                    {/* Review Text */}
                    <div className="flex-grow min-h-[120px]">
                      <p className="font-medium text-richblack-25 text-base leading-relaxed">
                        {review?.review.split(" ").length > truncateWords
                          ? `${review.review
                              .split(" ")
                              .slice(0, truncateWords)
                              .join(" ")}...`
                          : review.review}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-richblack-700">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-yellow-400 text-lg">
                          {review.rating.toFixed(1)}
                        </span>
                        <ReactStars
                          count={5}
                          value={review.rating}
                          size={20}
                          edit={false}
                          activeColor="#ffd700"
                          color="#4B5563"
                          emptyIcon={<FaStar />}
                          fullIcon={<FaStar />}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress Bar */}
          <div className="mt-6 mx-auto max-w-xs">
            <div className="w-full bg-richblack-700 rounded-full h-1">
              <div 
                className="bg-yellow-400 h-1 rounded-full transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-4">
          <span className="text-richblack-400 text-sm">
            {currentSlide + 1} of {reviews.length}
          </span>
        </div>
      </div>

      {/* Add CSS via style tag */}
      <style>
        {`
          .review-swiper {
            padding: 40px 0;
            overflow: visible !important;
          }

          .swiper-slide-custom {
            transition: all 0.6s ease;
            display: flex;
            justify-content: center;
            height: auto;
          }

          .review-card {
            height: 100%;
            transform-origin: center;
            width: 100%;
            max-width: 320px;
          }

          .active-slide {
            transform: scale(1);
            opacity: 1;
            z-index: 10;
          }

          .inactive-slide {
            transform: scale(0.8);
            opacity: 0.5;
            filter: blur(1px);
            z-index: 1;
          }

          .swiper-wrapper {
            align-items: center;
          }

          .custom-bullet {
            width: 12px !important;
            height: 12px !important;
            background: #374151 !important;
            opacity: 1 !important;
            margin: 0 4px !important;
            transition: all 0.3s ease !important;
          }

          .custom-bullet-active {
            background: #ffd700 !important;
            transform: scale(1.2) !important;
          }

          .swiper-pagination {
            bottom: 10px !important;
          }

          @media (max-width: 640px) {
            .inactive-slide {
              transform: scale(0.9);
              filter: blur(0.5px);
            }
            
            .review-card {
              max-width: 280px;
            }
          }

          @media (max-width: 1024px) {
            .review-card {
              max-width: 300px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default ReviewSlider 