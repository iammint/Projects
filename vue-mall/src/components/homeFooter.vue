<template>
  <div>
    <!--楼层-->
    <div class="floor">
      <div class="py-container">
        <div class="title clearfix">
          <h3 class="fl">{{ list.name }}</h3>
          <div class="fr">
            <ul class="nav-tabs clearfix">
              <li class="active">
                <a
                  href="#tab1"
                  data-toggle="tab"
                  v-for="nav in list.navList"
                  :key="nav"
                  >{{ nav.text }}</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-content">
          <div class="tab-pane">
            <div class="floor-1">
              <div class="blockgary">
                <ul class="jd-list">
                  <li v-for="key in list.keywords" :key="key">{{ key }}</li>
                </ul>
                <img :src="list.imgUrl" />
              </div>
              <div class="floorBanner">
                <div class="swiper-container" id="floor1Swiper">
                  <div class="swiper-wrapper">
                    <swiper>
                      <swiper-slide
                        v-for="img in list.carouselList"
                        :key="img.id"
                        ><img :src="img.imgUrl"
                      /></swiper-slide>
                    </swiper>
                  </div>
                </div>
              </div>
              <div class="split">
                <span class="floor-x-line"></span>
                <div class="floor-conver-pit">
                  <img :src="list.recommendList[0]" />
                </div>
                <div class="floor-conver-pit">
                  <img :src="list.recommendList[1]" />
                </div>
              </div>
              <div class="split center">
                <img :src="list.bigImg" />
              </div>
              <div class="split">
                <span class="floor-x-line"></span>
                <div class="floor-conver-pit">
                  <img :src="list.recommendList[2]" />
                </div>
                <div class="floor-conver-pit">
                  <img :src="list.recommendList[3]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--商标-->
    <div class="brand">
      <div class="py-container">
        <ul class="brand-list">
          <li class="brand-item">
            <img src="../../public/images/brand_21.png" />
          </li>
          <li class="brand-item">
            <img src="../../public/images/brand_03.png" />
          </li>
          <li class="brand-item">
            <img src="../../public/images/brand_05.png" />
          </li>
          <li class="brand-item">
            <img src="../../public/images/brand_07.png" />
          </li>
          <li class="brand-item">
            <img src="../../public/images/brand_09.png" />
          </li>
          <li class="brand-item">
            <img src="../../public/images/brand_11.png" />
          </li>
          <li class="brand-item">
            <img src="../../public/images/brand_13.png" />
          </li>
          <li class="brand-item">
            <img src="../../public/images/brand_15.png" />
          </li>
          <li class="brand-item">
            <img src="../../public/images/brand_17.png" />
          </li>
          <li class="brand-item">
            <img src="../../public/images/brand_19.png" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue"
export default {
  // 直接从父组件中接收prop，就不用再从仓库里拿数据
  props: ["list"],
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {},
}
</script>

<style lang="less" scoped>
.floor {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      .fl {
        float: left;
        color: rgb(109, 111, 195);
        font-size: 20px;
        line-height: 30px;
        margin: 9px 0;
        font-weight: 700;
      }

      .fr {
        float: right;

        .nav-tabs {
          margin: 10px 0 0;
          display: inline-block;

          li {
            float: left;
            line-height: 18px;

            a {
              padding-top: 1px;
              font-weight: 400;
              background-color: #fff;

              &::after {
                content: "|";
                padding: 0 10px;
              }
            }

            &:nth-child(7) {
              a {
                &::after {
                  content: "";
                }
              }
            }

            &.active {
              a {
                color: rgb(109, 111, 195);
              }
            }
          }
        }
      }
    }

    .tab-content {
      border-top: 2px solid rgb(109, 111, 195);
      border-bottom: 1px solid #e4e4e4;

      .tab-pane {
        .floor-1 {
          height: 360px;
          display: flex;

          .blockgary {
            width: 210px;
            height: 100%;
            background: #f7f7f7;

            .jd-list {
              padding: 15px 0;
              overflow: hidden;

              li {
                list-style-type: none;
                float: left;
                width: 40%;
                margin: 0 10px;
                border-bottom: 1px solid #e4e4e4;
                text-align: center;
                line-height: 26px;
              }
            }

            img {
              width: 100%;
            }
          }

          .floorBanner {
            width: 330px;
            height: 100%;
          }

          .split {
            width: 220px;
            height: 100%;
            position: relative;

            .floor-x-line {
              position: absolute;
              background: #e4e4e4;
              width: 220px;
              height: 1px;
              top: 180px;
            }

            .floor-conver-pit {
              width: 100%;
              height: 50%;

              img {
                width: 100%;
                height: 100%;
                transition: all 400ms;

                &:hover {
                  opacity: 0.8;
                }
              }
            }
          }

          .center {
            border: 1px solid #e4e4e4;
          }
        }
      }
    }
  }
}

.brand {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .brand-list {
      overflow: hidden;
      padding: 15px 0;
      background: #f7f7f7;
      line-height: 18px;

      .brand-item {
        width: 120px;
        float: left;
        height: 37px;

        img {
          border-left: 1px dotted #ccc;
          padding: 0 10px;
        }

        &:first-child {
          img {
            border-left: 0;
          }
        }
      }
    }
  }
}
</style>
