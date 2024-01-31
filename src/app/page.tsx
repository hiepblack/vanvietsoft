import Slide from "@/components/Slide";
import SlideProduct from "@/components/SlideProduct";
import { dataSlide1, dataSlide2 } from "@/data";

import reactlogo from "../../public/React_logo_wordmark 1.png";
import angularlogo from "../../public/angular-logo-icon-png-svg 1.png";
import nextlogo from "../../public/image 3.png";
import nodelogo from "../../public/image 4.png";
import Connect from "@/components/Connect";
import SliderHome from "@/components/SliderHome";

const HowToStart = () => {
  return (
    <div className="w-full min-h-[590px] bg-gradient-to-r from-[#F90] to-[#F2CB00]">
      <div className="container mx-auto md:flex md:flex-col items-center justify-center">
        <h3 className="text-white font-semibold text-[22px] p-6 text-center mt-8">
          Quy trình thực hiện
        </h3>
        <h4 className="md:text-[46px] text-[36px] font-semibold md:text-[#16205F] text-white md:p-4 text-center">
          Dễ dàng hoàn thành
        </h4>
        <p className="text-center text-[#16205F] text-[18px] md:w-1/4 font-normal">
          Chúng tôi không ngừng tìm kiếm các giải pháp mới, nhanh chóng và hiệu
          quả để đáp ứng các yêu cầu của các dự án
        </p>
        <div className="grid md:grid-cols-4 container grid-cols-1 gap-8 my-4">
          <div className="flex justify-center items-center flex-col">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="138"
                height="139"
                viewBox="0 0 138 139"
                fill="none"
              >
                <path
                  d="M86.8259 0.367584C79.6803 1.33831 73.6132 3.92691 67.8158 8.45696C54.9537 18.5148 49.7496 35.7182 54.8728 51.3037C57.003 57.8831 61.2095 64.2467 66.3328 68.6419C71.4561 73.0641 77.6849 76.165 83.9676 77.4593C90.0077 78.7267 101.629 78.7267 107.022 77.4593L108.748 77.0549L114.195 82.4748C119.426 87.652 119.696 87.8677 120.693 87.8677C121.799 87.8677 122.689 87.3014 123.201 86.3307C123.39 85.9532 123.498 83.1219 123.498 77.756V69.7744L126.14 67.1589C129.969 63.3838 132.854 59.2313 134.769 54.8361C141.834 38.4686 137.034 19.3507 123.093 8.45696C117.215 3.84602 111.202 1.33831 103.841 0.340622C100.254 -0.117775 90.3582 -0.117775 86.8259 0.367584ZM105.324 5.97622C115.813 8.21428 124.388 14.7936 129.187 24.2582C130.239 26.3884 131.695 30.8106 132.153 33.3992C132.612 35.88 132.612 42.5941 132.153 44.994C130.643 53.1103 126.707 59.7436 119.992 65.541L118.24 67.051L118.159 72.9023L118.078 78.7806L114.33 75.0595L110.582 71.3653L109.422 71.5002C108.775 71.5541 107.049 71.9046 105.566 72.2552C103.139 72.8214 102.196 72.8754 95.859 72.8754C86.4214 72.9023 83.0508 72.2552 77.2265 69.3969C67.6541 64.7051 61.1017 56.1843 58.8906 45.5333C58.2973 42.702 58.2164 36.3383 58.7557 33.3992C60.6433 22.8561 67.4653 13.742 77.0917 8.86143C79.4376 7.70196 83.8058 6.2998 86.2866 5.92229C87.3921 5.76051 88.6055 5.57175 88.983 5.51782C90.6818 5.22121 103.49 5.59872 105.324 5.97622Z"
                  fill="#fff"
                />
                <path
                  d="M93.1629 19.3238C90.844 20.0249 89.8732 20.5912 88.2554 22.236C86.26 24.2314 85.1275 26.6852 84.9926 29.3007C84.8848 31.1613 84.9117 31.3231 85.6398 32.0781C86.6105 33.1027 88.0666 33.1567 89.1991 32.1859C89.8193 31.6466 90.035 31.1882 90.2777 29.7322C90.6282 27.548 91.5181 26.1189 93.109 25.2021C95.5628 23.746 98.4749 24.0966 100.389 26.065C103.652 29.4356 102.385 34.3701 97.7739 36.0688C94.0797 37.444 93.5674 38.4148 93.5674 44.1313C93.5674 46.612 93.6752 48.4726 93.864 48.877C94.0527 49.2545 94.592 49.7399 95.1044 49.9826C95.9403 50.387 96.1829 50.387 97.0458 50.0635C98.6098 49.4702 98.9603 48.4456 98.9603 44.5088C98.9603 42.055 99.0412 41.2191 99.3108 41.2191C100.201 41.2191 103.005 39.5473 104.245 38.2799C109.854 32.5634 108.155 23.3416 100.902 19.9979C98.394 18.8385 95.6167 18.5958 93.1629 19.3238Z"
                  fill="#fff"
                />
                <path
                  d="M95.5358 55.6988C94.592 55.8875 93.5674 57.2897 93.5674 58.3952C93.5674 60.4715 96.3447 61.7388 97.8548 60.3367C99.931 58.3952 98.3401 55.1865 95.5358 55.6988Z"
                  fill="#fff"
                />
                <path
                  d="M14.9655 47.3131C13.9408 47.5288 11.9454 48.2838 10.5433 48.931C8.44004 49.9556 7.60414 50.5488 5.66269 52.4903C3.64034 54.4857 3.12802 55.2137 2.0764 57.3979C-0.0538039 61.82 0.000125253 61.1459 0.000125253 86.5196C0.000125253 111.893 -0.0538039 111.219 2.0764 115.641C3.12802 117.825 3.64034 118.554 5.66269 120.549C7.60414 122.49 8.44004 123.084 10.5433 124.081C14.4531 125.996 15.7744 126.158 26.0749 126.158H34.9193L40.0425 131.308C46.8107 138.13 47.4039 138.534 49.1566 137.725C50.5048 137.105 50.6936 136.323 50.6936 131.038V126.158H64.7151C80.786 126.158 81.2714 126.104 85.4779 124.081C87.635 123.057 88.417 122.49 90.3585 120.522C92.3269 118.581 92.8931 117.799 93.9178 115.641C95.9132 111.516 96.021 110.491 95.9401 98.1683L95.8592 87.5443L94.9425 86.7353C94.1874 86.0612 93.8908 85.9534 93.0549 86.0882C92.4347 86.1691 91.8146 86.5466 91.3562 87.0589L90.6012 87.8678V98.3301C90.6012 109.817 90.5472 110.41 88.9563 113.538C87.9317 115.587 85.5318 118.041 83.5904 119.012C80.2467 120.711 81.4332 120.603 63.4478 120.765L46.9185 120.899L46.1905 121.654C45.4624 122.356 45.4355 122.544 45.3006 125.51L45.1658 128.611L41.6604 125.079C39.7459 123.111 37.9123 121.358 37.6157 121.142C37.1843 120.846 35.2159 120.765 27.2344 120.765C19.3607 120.765 17.0687 120.684 15.8283 120.36C10.8399 119.066 7.09181 115.318 5.79751 110.329C5.20429 108.037 5.20429 65.0019 5.79751 62.7099C7.09181 57.7214 10.8399 53.9733 15.8283 52.679C17.0957 52.3555 19.927 52.2746 32.1419 52.2746H46.9185L47.7814 51.4926C48.5094 50.8455 48.6712 50.5219 48.6712 49.5781C48.6712 48.6344 48.5094 48.3108 47.7814 47.6636L46.9185 46.8817L31.8723 46.9086C19.7382 46.9086 16.5025 46.9895 14.9655 47.3131Z"
                  fill="#fff"
                />
                <path
                  d="M16.3137 68.6962C14.5879 69.4242 14.1295 71.6623 15.4508 72.9566L16.1788 73.7116L36.8067 73.7925L57.4077 73.8464L58.2975 73.0645C59.0256 72.4173 59.1874 72.0937 59.1874 71.15C59.1874 70.2062 59.0256 69.8826 58.2975 69.2355L57.4347 68.4535L37.1303 68.4805C25.9939 68.4805 16.6103 68.5883 16.3137 68.6962Z"
                  fill="#fff"
                />
                <path
                  d="M16.3137 83.7963C14.5879 84.5243 14.1295 86.7624 15.4508 88.0567L16.1788 88.8117L45.5702 88.8926L74.9347 88.9465L75.8245 88.1646C76.5526 87.5174 76.7143 87.1938 76.7143 86.2501C76.7143 85.3063 76.5526 84.9827 75.8245 84.3356L74.9616 83.5536L45.8938 83.5806C29.9308 83.5806 16.6103 83.6884 16.3137 83.7963Z"
                  fill="#fff"
                />
                <path
                  d="M16.3137 98.8967C14.5879 99.6248 14.1295 101.863 15.4508 103.157L16.1788 103.912L40.1234 103.966C58.8368 104.02 64.1758 103.966 64.7151 103.696C65.0926 103.508 65.6049 102.914 65.8746 102.348C66.3599 101.377 66.3599 101.324 65.8746 100.353C65.6049 99.7866 65.0926 99.1933 64.7151 99.0046C64.2028 98.7349 58.729 98.654 40.447 98.681C27.477 98.681 16.6103 98.7889 16.3137 98.8967Z"
                  fill="#fff"
                />
                <path
                  d="M73.2092 98.8961C71.4834 99.6242 71.025 101.862 72.3463 103.157C73.9642 104.801 76.7146 103.669 76.7146 101.35C76.7146 99.5702 74.7731 98.222 73.2092 98.8961Z"
                  fill="#fff"
                />
              </svg>
            </span>
            <p className="text-[28px] text-[#16205F] font-semibold flex gap-2 items-center">
              <span className="text-[46px]">01</span>
              <span>Đặt câu hỏi</span>
            </p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117"
                height="117"
                viewBox="0 0 117 117"
                fill="none"
              >
                <path
                  d="M22.1565 0.357178C18.6747 0.990227 15.5825 2.62154 12.8799 5.32417C10.7129 7.51548 9.42249 9.56071 8.42422 12.4825L7.79117 14.3573L7.71813 53.9714L7.66943 93.6099H9.61727H11.5651V55.067C11.5651 28.7712 11.6382 16.0616 11.8329 15.0633C12.2469 12.6772 13.7321 9.95028 15.5825 8.09983C17.433 6.22504 20.2817 4.69112 22.6191 4.2772C24.5669 3.91198 43.3879 3.91198 45.3114 4.2772C50.9358 5.27547 55.6106 10.3642 56.268 16.1833L56.4384 17.6442H58.3862H60.3341L60.1393 15.8912C59.7497 11.8494 58.0697 8.39201 55.0262 5.34851C52.8106 3.13285 50.7897 1.84241 47.9653 0.917183L46.0175 0.259789L34.6957 0.21109C28.4626 0.186745 22.8382 0.259789 22.1565 0.357178Z"
                  fill="#fff"
                />
                <path
                  d="M106.084 0.430374C105.232 0.917336 97.2701 12.9939 97.2701 13.8217C97.2701 14.2113 97.5136 14.747 97.8788 15.0878C98.4388 15.6722 98.5849 15.6965 101.774 15.6965H105.061L105.013 58.9629L104.94 102.254L104.38 103.763C103.187 106.953 100.654 109.947 98.0249 111.335C94.8596 112.991 95.1518 112.967 82.6613 112.967C72.2647 112.967 71.2421 112.918 70.0004 112.504C64.8386 110.751 61.1864 106.539 60.456 101.426L60.1638 99.4535H58.2403H56.2925L56.4873 101.207C56.8768 105.248 58.5568 108.706 61.6003 111.749C63.816 113.965 65.8369 115.231 68.6612 116.205L70.6091 116.862H82.6613H94.7136L96.6614 116.205C99.4858 115.231 101.507 113.965 103.722 111.749C105.938 109.534 107.204 107.513 108.178 104.688L108.835 102.74L108.908 59.2063L108.957 15.6965H112.268C115.434 15.6965 115.58 15.6722 116.14 15.0878C117.235 14.0165 117.041 13.5783 112.609 6.95563C108.738 1.13647 107.91 0.138199 107.009 0.138199C106.814 0.138199 106.401 0.259941 106.084 0.430374ZM109.152 8.75738L111.148 11.8009H107.009H102.87L104.867 8.75738C105.987 7.10172 106.936 5.73823 107.009 5.73823C107.082 5.73823 108.032 7.10172 109.152 8.75738Z"
                  fill="#fff"
                />
                <path
                  d="M56.3657 23.488V25.4358H58.3136H60.2614V23.488V21.5401H58.3136H56.3657V23.488Z"
                  fill="#fff"
                />
                <path
                  d="M51.1306 29.9404C50.5463 30.5004 50.5219 30.6709 50.5219 33.5439V36.5631L49.4019 37.0014L48.3062 37.4153L46.1636 35.3213C43.0471 32.2778 43.461 32.1318 37.6905 37.9266C31.8957 43.697 32.0418 43.2831 35.0853 46.3997L37.1792 48.5423L36.741 49.6379L36.2784 50.7579H33.2836C30.4348 50.7579 30.2644 50.7823 29.7044 51.3666L29.0957 51.951V58.5493V65.1476L29.7044 65.7319C30.2644 66.3163 30.4348 66.3406 33.2836 66.3406H36.2784L36.741 67.4606L37.1792 68.5563L35.0853 70.6989C32.0418 73.8155 31.8957 73.4016 37.6905 79.172C43.461 84.9668 43.0471 84.8207 46.1636 81.7772L48.3062 79.6833L49.4019 80.0972L50.5219 80.5355V83.5546C50.5219 86.4277 50.5463 86.5981 51.1306 87.1581L51.715 87.7668H58.3133H64.9116L65.4959 87.1581C66.0803 86.5981 66.1046 86.4277 66.1046 83.579V80.5842L67.2246 80.1216L68.3203 79.6833L70.4629 81.7772C73.5794 84.8207 73.1655 84.9668 78.936 79.172C84.7308 73.4016 84.5847 73.8155 81.5412 70.6989L79.4473 68.5563L79.8612 67.4606L80.2995 66.3406H83.3186C86.1917 66.3406 86.3621 66.3163 86.9221 65.7319L87.5308 65.1476V58.5493V51.951L86.9221 51.3666C86.3621 50.7823 86.1917 50.7579 83.3186 50.7579H80.2995L79.8612 49.6379L79.4473 48.5423L81.5412 46.3997C84.5847 43.2831 84.7308 43.697 78.936 37.9266C73.1655 32.1318 73.5794 32.2778 70.4629 35.3213L68.3203 37.4153L67.2246 36.977L66.1046 36.5144V33.5196C66.1046 30.6709 66.0803 30.5004 65.4959 29.9404L64.9116 29.3317H58.3133H51.715L51.1306 29.9404ZM62.2089 35.8813C62.2089 38.9492 62.4768 39.5092 64.2055 40.0205C64.7898 40.1909 65.9585 40.6535 66.8107 41.0431C67.6629 41.4327 68.6368 41.7492 68.9777 41.7492C69.3916 41.7492 70.1464 41.1892 71.5585 39.8014L73.5551 37.8779L76.282 40.6049L78.9847 43.3318L77.0612 45.304C74.8212 47.5684 74.7725 47.7631 75.8194 50.0519C76.209 50.904 76.6716 52.0727 76.8421 52.6571C77.3534 54.3858 77.9134 54.6536 80.9812 54.6536H83.6351V58.5493V62.445H80.9812C77.9134 62.445 77.3534 62.7128 76.8421 64.4415C76.6716 65.0259 76.209 66.1946 75.8194 67.0467C75.4299 67.8989 75.1133 68.8728 75.1133 69.2137C75.1133 69.6276 75.6733 70.3824 77.0612 71.7946L78.9847 73.7911L76.2577 76.5181L73.5307 79.2207L71.5585 77.2972C69.2942 75.0572 69.0994 75.0085 66.8107 76.0555C65.9585 76.445 64.7898 76.9077 64.2055 77.0781C62.4768 77.5894 62.2089 78.1494 62.2089 81.2172V83.8712H58.3133H54.4176V81.2172C54.4176 78.1494 54.1498 77.5894 52.421 77.0781C51.8367 76.9077 50.668 76.445 49.8158 76.0555C47.5271 75.0085 47.3323 75.0572 45.068 77.2972L43.0958 79.2207L40.3688 76.5181L37.6418 73.7911L39.5653 71.7946C40.9532 70.3824 41.5132 69.6276 41.5132 69.2137C41.5132 68.8728 41.1966 67.8989 40.8071 67.0467C40.4175 66.1946 39.9549 65.0259 39.7845 64.4415C39.2732 62.7128 38.7131 62.445 35.6453 62.445H32.9914V58.5493V54.6536H35.6453C38.7131 54.6536 39.2732 54.3858 39.7845 52.6571C39.9549 52.0727 40.4175 50.904 40.8071 50.0519C41.854 47.7631 41.8053 47.5684 39.5653 45.304L37.6418 43.3318L40.3445 40.6049L43.0714 37.8779L45.068 39.8014C46.4801 41.1892 47.2349 41.7492 47.6488 41.7492C47.9897 41.7492 48.9636 41.4327 49.8158 41.0431C50.668 40.6535 51.8367 40.1909 52.421 40.0205C54.1498 39.5092 54.4176 38.9492 54.4176 35.8813V33.2274H58.3133H62.2089V35.8813Z"
                  fill="#fff"
                />
                <path
                  d="M54.929 43.3314C52.2507 43.9157 49.4263 45.4983 47.3568 47.5923C41.2698 53.6792 41.2211 63.3941 47.235 69.3837C50.2055 72.3298 53.4681 73.8393 57.4368 74.0585C64.5464 74.448 71.0717 69.9193 73.2386 63.0532C73.9934 60.6428 73.9934 56.4549 73.2386 54.0445C70.7795 46.3018 62.8177 41.627 54.929 43.3314ZM61.1134 47.227C65.3012 48.3227 68.5395 51.5853 69.6351 55.7975C71.2178 61.8602 67.3464 68.2393 61.1134 69.8706C55.0264 71.4532 48.6229 67.5819 46.9915 61.3488C44.8246 53.0218 52.7864 45.0601 61.1134 47.227Z"
                  fill="#fff"
                />
                <path
                  d="M56.3657 93.61V95.5579H58.3136H60.2614V93.61V91.6622H58.3136H56.3657V93.61Z"
                  fill="#fff"
                />
                <path
                  d="M7.32874 97.7492C5.79481 98.1387 3.6035 99.4535 2.53219 100.598C1.99653 101.182 1.19305 102.4 0.779135 103.3C0.0730439 104.786 0 105.151 0 107.269C0 109.461 0.0486959 109.68 0.900874 111.433C1.99653 113.648 3.40871 115.012 5.67307 116.083C7.1583 116.789 7.52352 116.862 9.61744 116.862C11.7114 116.862 12.0766 116.789 13.5618 116.083C15.8262 115.012 17.2384 113.648 18.334 111.433C19.1862 109.68 19.2349 109.461 19.2349 107.245C19.2349 105.029 19.1862 104.81 18.334 103.057C16.6784 99.7457 13.7566 97.7735 10.1531 97.6031C9.13048 97.5544 7.86439 97.6274 7.32874 97.7492ZM11.4192 101.694C13.5131 102.327 15.461 105.005 15.461 107.245C15.461 110.264 12.6366 113.088 9.61744 113.088C8.08352 113.088 6.84178 112.528 5.60003 111.262C3.11654 108.803 3.11654 105.687 5.60003 103.227C7.30439 101.499 9.13048 101.036 11.4192 101.694Z"
                  fill="#fff"
                />
              </svg>
            </span>
            <p className="text-[28px] text-[#16205F] font-semibold flex gap-2 items-center">
              <span className="text-[46px]">02</span>
              <span>Tìm giải pháp</span>
            </p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="125"
                height="124"
                viewBox="0 0 125 124"
                fill="none"
              >
                <path
                  d="M61.2594 0.446214C59.1355 1.61805 60.0388 4.98706 62.4557 4.98706C63.7007 4.98706 64.897 3.79082 64.897 2.57016C64.897 0.739172 62.8707 -0.457073 61.2594 0.446214Z"
                  fill="#fff"
                />
                <path
                  d="M31.5242 7.30646C30.5233 7.72149 29.8397 9.0398 30.0839 10.0163C30.2792 10.7975 46.9289 27.6914 48.1008 28.3262C49.0773 28.8389 49.8829 28.7412 50.713 28.0332C51.7139 27.2032 51.9336 26.0069 51.2745 24.9572C50.4932 23.7121 34.112 7.47735 33.3308 7.20881C32.4763 6.89144 32.4763 6.89144 31.5242 7.30646Z"
                  fill="#fff"
                />
                <path
                  d="M91.3853 7.33042C90.5553 7.74544 75.0041 23.1257 73.9055 24.6149C72.9534 25.9088 72.9778 26.7877 74.0276 27.8375C74.9309 28.7407 75.7365 28.8872 76.8107 28.3257C77.9825 27.691 94.6323 10.7971 94.8276 10.0159C95.0717 9.01493 94.3881 7.72103 93.3384 7.28159C92.313 6.86657 92.2886 6.86657 91.3853 7.33042Z"
                  fill="#fff"
                />
                <path
                  d="M61.5766 10.0891C61.2836 10.2111 60.8198 10.6262 60.5268 10.9924C60.0386 11.6271 60.0142 11.8468 60.0142 19.1952C60.0142 27.3736 60.063 27.7886 61.3569 28.3745C62.1625 28.7407 62.7484 28.7407 63.5541 28.3745C64.848 27.7886 64.8968 27.3736 64.8968 19.1708V11.5783L64.2376 10.8459C63.5052 10.0647 62.4067 9.74729 61.5766 10.0891Z"
                  fill="#fff"
                />
                <path
                  d="M24.4687 24.542C23.6143 24.9814 0.348544 53.9599 0.104412 54.912C-0.0420669 55.4735 -0.0420669 55.9617 0.153238 56.3523C0.299717 56.6697 3.2293 59.3552 6.67155 62.3092L12.9213 67.68L18.2922 74.9063C21.2218 78.8857 23.6387 82.2059 23.6387 82.3035C23.6387 82.3768 23.3213 82.9627 22.9063 83.573C20.7579 86.942 21.1485 91.2143 23.8828 94.1927C25.0058 95.4134 27.4716 96.7805 28.5701 96.7805C29.2537 96.7805 29.2537 96.7805 29.2537 98.3674C29.2537 99.3683 29.449 100.443 29.7664 101.346C30.7917 104.129 34.3072 106.79 36.9194 106.79C37.8227 106.79 38.0424 107.083 38.0424 108.279C38.0424 108.67 38.2378 109.451 38.4575 110.012C39.8002 113.455 42.7298 115.554 46.4406 115.701L47.9298 115.75L48.1007 116.653C48.6133 119.07 50.4932 121.413 52.8856 122.585C54.1063 123.196 54.5457 123.269 56.5964 123.269C58.6716 123.269 59.0622 123.196 60.234 122.585C60.942 122.195 62.065 121.389 62.6997 120.803C63.3345 120.217 63.9204 119.729 63.9936 119.729C64.0913 119.729 64.6528 120.095 65.2631 120.559C68.7298 123.22 73.4903 122.976 76.5908 119.973C77.8115 118.777 78.7636 116.921 79.1054 115.09L79.3495 113.699L80.5946 113.552C84.1833 113.113 87.2105 110.11 87.8941 106.302L88.1382 104.91L89.3833 104.764C92.9965 104.324 95.9993 101.346 96.6828 97.4885C96.9026 96.1458 96.9758 96.0481 97.5861 96.0481C99.7589 96.0481 102.688 94.3392 104.031 92.3129C105.765 89.7007 106.057 86.6491 104.812 83.9148L104.227 82.6453L108.181 74.3693L112.161 66.0932L118.337 60.7711C121.731 57.8415 124.611 55.1805 124.734 54.8631C124.856 54.5458 124.953 54.0087 124.953 53.6913C124.953 53.0077 103.836 25.3721 102.786 24.6885C102.371 24.4199 101.858 24.2979 101.346 24.3711C100.906 24.4199 97.6105 26.373 93.6556 28.8876L86.6979 33.3063H77.7382H68.7542L61.9918 35.2594C58.2565 36.3336 54.9852 37.2124 54.741 37.2124C54.4969 37.188 51.2011 36.358 47.4415 35.3082L40.6058 33.4284L33.5748 28.9608C26.5683 24.4932 25.5429 24.0049 24.4687 24.542ZM30.7673 32.9645C33.2331 34.527 35.3814 35.9429 35.5523 36.1138C35.8209 36.358 34.0143 38.7016 25.2744 49.3214C19.464 56.4256 14.557 62.2359 14.4105 62.2359C13.8978 62.2359 5.8415 55.1805 6.01239 54.8876C6.45183 54.1796 25.9824 30.1326 26.1288 30.1326C26.2265 30.1326 28.326 31.4021 30.7673 32.9645ZM110.061 41.7533C114.968 48.1495 118.972 53.4472 118.972 53.5448C118.972 53.7401 110.769 60.8688 110.55 60.8932C110.476 60.8932 106.082 55.4002 100.809 48.6622C92.7523 38.4087 91.2631 36.3824 91.5317 36.1138C91.9467 35.7232 100.833 30.1326 101.028 30.1326C101.102 30.157 105.154 35.3814 110.061 41.7533ZM96.7805 51.5185C102.542 58.8425 107.229 64.8969 107.205 64.9946C107.132 65.2876 100.76 78.5927 100.638 78.6904C100.565 78.7636 94.2415 72.5383 86.5514 64.8725C72.88 51.2256 72.5626 50.9326 71.4885 50.7861C70.8781 50.7129 67.5335 50.4688 64.0425 50.2491C58.3786 49.8584 57.6218 49.8584 56.9871 50.2002C56.4744 50.4688 55.4002 52.1289 52.6415 57.0115C50.6396 60.5514 48.8087 63.6519 48.5889 63.9204C47.0021 65.6782 43.926 65.3364 42.6809 63.2857C42.095 62.3092 42.0462 60.6735 42.5833 59.5993C42.803 59.1599 44.9514 55.327 47.3683 51.0547L51.7626 43.3157L53.0321 42.9495C53.7157 42.7542 57.6218 41.6068 61.7232 40.4106L69.1692 38.2378L77.7382 38.2134L86.3073 38.189L96.7805 51.5185ZM43.2913 39.2631C44.5119 39.5805 45.9523 39.9711 46.5382 40.142C47.0997 40.2885 47.5636 40.4838 47.5636 40.6059C47.5636 40.7035 45.5861 44.2922 43.1448 48.589C37.6763 58.2077 37.6274 58.3542 37.3589 60.0143C36.773 63.7251 38.604 67.3383 41.9974 69.1204C43.1692 69.7308 43.511 69.804 45.8547 69.804C48.1983 69.804 48.5401 69.7308 49.7119 69.1204C51.8359 67.9974 52.6659 66.9232 56.2058 60.6735L59.5748 54.7655L60.4537 54.8876C60.9664 54.9608 63.4077 55.1561 65.9223 55.3026L70.4631 55.5955L85.3551 70.512C98.6115 83.7683 100.296 85.5505 100.54 86.4538C101.346 89.5542 98.172 92.1909 95.3401 90.7749C94.9007 90.5552 90.7749 86.5514 86.1364 81.8641L77.7138 73.3195L76.6641 73.3439C75.004 73.3439 73.881 74.8087 74.2716 76.42C74.3936 76.835 77.6894 80.3261 82.9382 85.6481C92.1664 94.9251 92.2396 95.0228 91.7514 97.0979C91.2387 99.3683 88.6265 100.589 86.5514 99.5636C86.1119 99.3683 83.1824 96.5608 80.0331 93.3383L74.296 87.4791L73.173 87.5035C71.6105 87.5035 70.7561 88.3336 70.7561 89.896V90.9946L76.7129 97.0002C81.6688 101.981 82.7185 103.177 82.9382 103.982C83.6706 106.79 81.327 109.182 78.3974 108.621C77.6406 108.474 76.8349 107.815 73.8077 104.812C70.3899 101.419 70.0969 101.175 69.218 101.175C67.4359 101.175 66.2641 102.713 66.85 104.251C66.9964 104.642 68.6321 106.497 70.5119 108.377C74.2716 112.185 74.6378 112.82 74.1495 114.773C73.4659 117.434 70.219 118.362 67.9974 116.531L67.0941 115.798L67.5335 115.017C67.8509 114.431 67.9486 113.65 67.9486 111.795C67.9486 109.597 67.8753 109.231 67.265 108.011C66.1176 105.765 64.2622 104.202 61.9429 103.519L60.942 103.226L60.8932 101.15C60.8443 98.758 60.1608 97.0002 58.6716 95.3402C57.5486 94.1195 55.2049 92.9232 53.4716 92.7035C52.2997 92.5815 52.2021 92.5082 52.2021 91.8979C52.2021 90.9458 51.5185 88.773 50.8838 87.7721C50.1025 86.5514 48.4425 85.111 47.0997 84.5007C46.2453 84.1101 45.4885 83.988 43.8284 83.9636H41.7044L41.4359 82.9871C40.8011 80.5702 38.604 78.1777 36.187 77.2744C34.9908 76.8106 34.4049 76.7373 32.6716 76.8106C30.6453 76.9082 29.4002 77.3477 27.7401 78.5195C27.3739 78.788 27.2518 78.7392 26.9589 78.3486C26.7636 78.0801 24.664 75.2725 22.3204 72.1232C19.9523 68.9739 18.0481 66.2397 18.0969 66.0688C18.1946 65.4829 40.5326 38.4575 40.8256 38.5552C40.972 38.604 42.095 38.9214 43.2913 39.2631ZM35.1373 82.2059C36.6509 83.2068 37.2124 85.1355 36.48 86.8444C35.9429 88.1139 32.2321 91.5561 31.0603 91.8735C29.1805 92.3862 27.3983 91.434 26.6903 89.5786C25.9824 87.7721 26.2997 86.9909 28.5946 84.6228C29.6932 83.4754 30.9382 82.3524 31.3288 82.1082C32.3786 81.4491 34.0875 81.4979 35.1373 82.2059ZM45.2687 89.1148C46.7824 89.8472 47.5392 91.4585 47.1974 93.2894C47.0509 94.0463 46.4406 94.8275 43.5842 97.7082C41.68 99.6369 39.8246 101.37 39.4584 101.566C38.5063 102.054 36.8462 102.005 35.8941 101.419C34.3072 100.443 33.6481 98.1721 34.4781 96.5852C34.9664 95.6575 41.4603 89.2857 42.1927 88.9927C43.1204 88.6265 44.341 88.6754 45.2687 89.1148ZM53.7401 97.8547C55.4734 98.5627 56.4256 100.589 55.9129 102.347C55.4979 103.665 48.7842 110.305 47.5148 110.647C45.4152 111.209 43.218 109.768 42.9983 107.693C42.9251 107.083 42.9495 106.277 43.0471 105.887C43.2425 105.057 49.7852 98.343 50.8594 97.8547C51.8115 97.4397 52.7636 97.4397 53.7401 97.8547ZM61.3326 108.572C63.0171 109.524 63.6518 111.697 62.7974 113.504C62.5777 113.967 61.5035 115.212 60.3805 116.287C58.8913 117.727 58.1101 118.289 57.4753 118.386C56.1082 118.655 54.8875 118.313 54.0087 117.434C53.2763 116.702 52.6171 115.139 52.8124 114.529C52.8612 114.358 52.9589 113.919 53.0565 113.528C53.1542 113.089 53.9598 112.014 55.0828 110.867C57.8171 108.035 59.404 107.449 61.3326 108.572Z"
                  fill="#fff"
                />
              </svg>
            </span>
            <p className="text-[28px] text-[#16205F] font-semibold flex gap-2 items-center">
              <span className="text-[46px]">03</span>
              <span>Hợp tác</span>
            </p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="109"
                height="132"
                viewBox="0 0 109 132"
                fill="none"
              >
                <path
                  d="M48.5859 0.419037C45.5656 0.751785 41.0094 1.82684 37.9123 2.92747C34.8151 4.02813 30.9244 5.87106 30.2333 6.56216C29.5166 7.27886 29.619 8.66106 30.4381 9.30098C30.8221 9.60813 31.2572 9.8385 31.4364 9.8385C31.6155 9.8385 33.0489 9.22419 34.6615 8.4563C51.6575 0.419037 71.1875 3.43941 84.6 16.212C99.5227 30.3924 102.901 52.738 92.842 70.5531C83.9089 86.3716 66.2474 95.2536 48.3812 92.8987C38.7825 91.6445 30.4893 87.6258 23.2967 80.766C16.3601 74.111 11.932 65.7921 10.1658 56.0399C9.5259 52.482 9.5259 44.7519 10.1658 41.194C11.9064 31.5954 16.2321 23.379 23.1176 16.6215C24.551 15.2137 25.8308 13.8571 25.9588 13.6012C26.5219 12.5773 25.498 11.1183 24.2438 11.1183C23.6039 11.1183 23.0408 11.4511 21.6586 12.6285C17.6399 16.1352 13.7237 21.3569 10.9593 26.8601C5.89122 37.0218 4.50901 47.3884 6.76149 58.5228C8.29727 66.2017 12.5207 74.6997 17.6143 80.4077L19.0221 81.9946L16.2065 86.9091C14.6708 89.6224 13.3909 92.0284 13.3909 92.31C13.3909 93.0523 14.5428 94.0505 15.3875 94.0505C16.3857 94.0505 16.7441 93.6922 17.9983 91.4909C18.6126 90.4414 19.7132 88.4961 20.4811 87.1907L21.8633 84.8358L23.7063 86.3204C28.0833 89.9039 33.3817 92.7963 38.7825 94.5881C40.6511 95.2024 42.238 95.7399 42.2892 95.7655C42.4172 95.8423 26.0867 124.229 25.9076 124.254C25.8308 124.254 24.8069 121.234 23.6551 117.522C22.4777 113.837 21.3514 110.611 21.1466 110.355C20.5323 109.69 19.5853 109.792 12.5719 111.328C9.03957 112.096 6.09599 112.685 6.0192 112.633C5.968 112.557 7.47819 109.767 9.39792 106.414C13.1094 99.9377 13.2374 99.5793 12.0599 98.5811C11.4456 98.0692 10.345 98.018 9.75626 98.4787C9.32113 98.8115 0.746348 113.555 0.208825 114.912C0.0296504 115.321 -0.0471387 115.859 0.0296504 116.063C0.234421 116.703 1.15589 117.599 1.61662 117.599C1.84699 117.599 5.71204 116.78 10.1914 115.807C14.6708 114.809 18.3822 114.067 18.459 114.118C18.5102 114.195 19.7132 117.855 21.0954 122.258C22.8872 127.915 23.8087 130.397 24.167 130.705C24.9605 131.37 25.882 131.268 26.6499 130.449C27.0338 130.065 31.6155 122.283 36.8116 113.171L46.2823 96.6102L48.074 96.8149C50.4289 97.0453 57.8262 97.0453 60.1043 96.7893L61.896 96.5846L67.6552 106.644C70.8292 112.173 73.6192 116.882 73.8751 117.138C74.5662 117.855 75.9484 117.753 76.5883 116.934C76.8955 116.55 77.1259 116.063 77.1259 115.833C77.1259 115.603 74.5918 110.995 71.4947 105.594C68.3975 100.194 65.8891 95.7399 65.9147 95.7143C65.9659 95.6887 66.7337 95.4583 67.6552 95.2024C73.4912 93.513 80.095 90.0063 84.8304 86.0901C85.7007 85.3478 86.4685 84.8358 86.5197 84.9894C86.5709 85.1174 90.1544 91.3885 94.5058 98.9138C98.8572 106.439 102.389 112.633 102.364 112.659C102.364 112.659 99.2411 112.019 95.4529 111.174C91.6646 110.355 88.3627 109.664 88.1323 109.664C87.0061 109.664 86.8525 110.048 83.4738 120.722L82.3731 124.254L81.4772 123.026C80.479 121.695 79.5575 121.387 78.5593 122.053C77.3818 122.821 77.4842 123.563 79.1992 126.66C81.5028 130.781 81.6052 130.909 82.6803 130.909C84.3696 130.909 84.0881 131.549 88.4907 117.574L89.6681 113.862L97.5518 115.603C101.878 116.55 105.794 117.369 106.28 117.394C107.33 117.446 108.097 116.652 108.097 115.526C108.097 115.04 105.103 109.613 98.8316 98.7347C93.7635 89.9039 89.5401 82.4554 89.4633 82.1994C89.3865 81.9435 89.7193 81.3547 90.3336 80.6636C93.0212 77.7456 95.5552 73.9318 97.6285 69.606C105.819 52.6868 103.413 32.5169 91.4598 17.9014C89.3097 15.2649 84.728 10.9903 81.9636 9.01942C79.1224 6.97171 74.1567 4.38647 70.6756 3.08105C63.9949 0.598221 55.7273 -0.40004 48.5859 0.419037Z"
                  fill="#fff"
                />
                <path
                  d="M48.4579 13.8062C33.6376 16.3146 21.9145 27.9354 19.4316 42.6533C18.8685 45.8784 18.8685 51.3561 19.4316 54.5812C21.6073 67.4306 30.694 77.9763 43.1594 82.1485C46.6661 83.3259 49.9169 83.8123 54.2171 83.8123C62.7662 83.8123 70.2404 81.099 76.793 75.5702C80.7861 72.2171 85.5726 65.7924 85.5726 63.7703C85.5726 62.9256 84.5487 62.0553 83.5761 62.0553C82.6802 62.0553 82.8594 61.8506 79.9158 66.3555C76.3067 71.8843 70.2916 76.3893 63.6621 78.565C57.8517 80.4591 50.352 80.4591 44.516 78.565C39.8831 77.0548 35.6853 74.4696 32.1274 70.9629C25.4212 64.3334 22.2728 55.861 22.8871 46.1344C23.6038 35.4095 30.3357 25.4269 40.2159 20.4868C47.4596 16.8521 56.2392 16.2378 63.9181 18.8231C74.7965 22.4578 82.8082 31.7236 84.9327 43.114C85.3934 45.5969 85.4702 51.1257 85.0607 53.4806C84.7023 55.6307 84.7279 55.989 85.3166 56.6289C86.0589 57.4224 87.4155 57.3968 88.081 56.5521C88.7721 55.6818 89.1817 52.6615 89.1817 48.5405C89.1817 44.829 88.9257 42.8069 88.0042 39.4026C84.4975 26.1436 73.2607 16.0075 59.5923 13.8062C56.8279 13.3454 51.1199 13.3454 48.4579 13.8062Z"
                  fill="#fff"
                />
                <path
                  d="M53.1167 26.1434C52.9375 26.2201 51.4273 28.9846 49.7636 32.3377L46.7176 38.3784L40.3697 39.2743C34.4058 40.119 33.945 40.2213 33.3051 40.8613C32.0253 42.0899 32.1789 42.3202 37.4261 47.5419L42.2894 52.354L41.1376 58.9323C39.9858 65.4338 39.9858 65.4849 40.4721 66.1249C41.4192 67.4047 42.0847 67.2255 48.2022 64.0004C51.2994 62.3622 53.9358 61.0312 54.115 61.0312C54.2685 61.0312 56.905 62.3622 59.9765 64.0004C66.0685 67.2255 66.7596 67.4047 67.7066 66.1249C68.193 65.4849 68.193 65.4338 67.0411 58.9323L65.8893 52.3796L70.7526 47.5419C74.0801 44.2144 75.5903 42.5506 75.5903 42.1667C75.5903 41.8595 75.3343 41.2964 75.0016 40.9125C74.4385 40.2725 74.1057 40.1958 67.937 39.2999L61.4355 38.3784L58.5175 32.4912C56.905 29.2405 55.3948 26.4505 55.1644 26.2713C54.7549 25.9642 53.731 25.8874 53.1167 26.1434ZM56.393 36.8938C57.5961 39.3767 58.7991 41.5268 59.0806 41.7059C59.4902 41.9619 68.1674 43.3697 69.3192 43.3697C69.4728 43.3697 67.8858 45.0079 65.7869 47.03C62.3314 50.3831 62.0242 50.7414 62.0242 51.5605C62.0242 52.0725 62.3826 54.4785 62.7921 56.9102C63.2273 59.3418 63.5344 61.3895 63.5088 61.4151C63.4576 61.4663 61.4867 60.4425 59.0806 59.1626C56.7002 57.8828 54.4477 56.859 54.0894 56.859C53.731 56.859 51.5041 57.9084 49.0981 59.1882C46.7176 60.4681 44.7211 61.4663 44.6699 61.4151C44.6443 61.3895 44.9515 59.3418 45.3866 56.9102C45.7961 54.4785 46.1545 52.0725 46.1545 51.5605C46.1545 50.7414 45.8729 50.3831 42.3918 47.03C40.2929 45.0079 38.7315 43.3697 38.8595 43.3697C40.037 43.3697 48.6885 41.9619 49.0981 41.7059C49.3796 41.5268 50.6082 39.3511 51.7857 36.8938C52.9887 34.411 54.0126 32.3889 54.0894 32.3889C54.1661 32.3889 55.19 34.411 56.393 36.8938Z"
                  fill="#fff"
                />
              </svg>
            </span>
            <p className="text-[28px] text-[#16205F] font-semibold flex gap-2 items-center">
              <span className="text-[46px]">04</span>
              <span>Hoàn thành</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Product = () => {
  return (
    <div className="w-full md:py-4 ">
      <h3 className="text-[#16205F] text-[22px] font-semibold my-2">
        Sản phẩm nổi bật
      </h3>
      <h4 className="text-[#16205F] md:text-[46px] text-[36px] font-semibold md:w-1/2">
        Chúng tôi mang đến nhiều sản phẩm chất lượng
      </h4>
      <p className="text-[#16205F] text-[18px] font-normal md:w-[486px] my-4">
        Các sản phẩm của chúng tôi nhận được đánh giá cáo từ khách hàng cũng như
        đội ngũ chuyên môn
      </p>
      <div className="mt-10">
        <SlideProduct content={dataSlide2} />
      </div>
    </div>
  );
};
const Specialized = () => {
  return (
    <div className="container mx-auto flex justify-center items-center py-8 flex-col">
      <div className="flex flex-col items-center justify-center my-4">
        <h3 className="text-[#16205F] text-[22px] font-semibold ">Đặc biệt</h3>
        <h2 className="text-[#16205F] md:text-[46px] font-semibold text-[36px]">
          Công nghệ nổi bật
        </h2>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-8 my-4 items-center w-full">
        <div className="flex justify-center p-2">
          <img src={reactlogo.src} alt="" className="w-[150px]" />
        </div>
        <div className="flex justify-center p-2">
          <img src={angularlogo.src} alt="" className="w-[150px]" />
        </div>
        <div className="flex justify-center p-2">
          <img src={nextlogo.src} alt="" className="w-[150px]" />
        </div>
        <div className="flex justify-center p-2">
          <img src={nodelogo.src} alt="" className="w-[150px]" />
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
        <SliderHome />
      </div>
      <div className="container mx-auto my-8 p-2">
        <Slide content={dataSlide1} />
      </div>
      <div>
        <HowToStart />
      </div>
      <div className="container mx-auto md:p-12 px-2 py-4">
        <Product />
      </div>
      <div className="bg-[#F9F9F9]">
        <Specialized />
      </div>
      <div className="container mx-auto md:p-12 px-2 py-4" id="connect">
        <Connect />
      </div>
    </main>
  );
}
