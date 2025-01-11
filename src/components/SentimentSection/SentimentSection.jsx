import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsInfoCircle } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./SentimentSection.css";

const SentimentSection = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="sentiment-section">
      <h2 className="section-title">Sentiment</h2>

      <div className="key-events-section">
        <div className="key-events-header">
          <h3 className="key-events-title">Key Events</h3>
          <BsInfoCircle className="info-icon" />
        </div>

        <div className="swiper-wrapper">
          <button className="swiper-button prev-button" onClick={handlePrev}>
            <IoIosArrowBack />
          </button>

          <Swiper
            spaceBetween={-392}
            slidesPerView={2}
            className="swiper-container"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <div className="event-card blue-card">
                <div className="card-header">
                  <div className="icon-container blue-icon">📄</div>
                  <h4 className="card-title">
                    Lorem ipsum dolor sit amet consectetur. Dui vel quis
                    dignissim mattis enim tincidunt.
                  </h4>
                </div>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                  faucibus metus quis. Amet sapien quam viverra adipiscing
                  condimentum. Ac consectetur et pretium in a bibendum in. Sed
                  vitae sit nisi viverra natoque lacinia libero enim.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="event-card green-card">
                <div className="card-header">
                  <div className="icon-container green-icon">📈</div>
                  <h4 className="card-title">
                    Lorem ipsum dolor sit amet consectetur. Dui vel quis
                    dignissim mattis enim tincidunt.
                  </h4>
                </div>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                  faucibus metus quis. Amet sapien quam viverra adipiscing
                  condimentum. Ac consectetur et pretium in a bibendum in. Sed
                  vitae sit nisi viverra natoque lacinia libero enim.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="event-card yellow-card">
                <div className="card-header">
                  <div className="icon-container yellow-icon">📊</div>
                  <h4 className="card-title">
                    Lorem ipsum dolor sit amet consectetur. Dui vel quis
                    dignissim mattis enim tincidunt.
                  </h4>
                </div>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                  faucibus metus quis. Amet sapien quam viverra adipiscing
                  condimentum. Ac consectetur et pretium in a bibendum in. Sed
                  vitae sit nisi viverra natoque lacinia libero enim.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <button className="swiper-button next-button" onClick={handleNext}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div className="analyst-estimates-section">
        <div className="analyst-header">
          <h3 className="analyst-title">Analyst Estimates</h3>
          <BsInfoCircle className="info-icon" />
        </div>

        <div className="analyst-section">
          <div className="buy-circle">76%</div>

          <div className="analyst-estimates">
            <div className="estimate-item">
              <span className="label">Buy</span>
              <div className="progress-bar">
                <div
                  className="progress buy-progress"
                  style={{ width: "76%" }}
                ></div>
              </div>
              <div>76%</div>
            </div>

            <div className="estimate-item">
              <span className="label">Hold</span>
              <div className="progress-bar">
                <div
                  className="progress hold-progress"
                  style={{ width: "8%" }}
                ></div>
              </div>

              <div>8%</div>
            </div>

            <div className="estimate-item">
              <span className="label">Sell</span>
              <div className="progress-bar">
                <div
                  className="progress sell-progress"
                  style={{ width: "16%" }}
                ></div>
              </div>
              <div>16%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentSection;
