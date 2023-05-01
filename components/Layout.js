import Logo from "./logo";
import Link from 'next/link'
function Layout(props) {
  return (
    <div className="w-[100%] h-[100vh] flex  absolute flex-col ">
      {/* navbar */}
      <header class="header sticky top-0 bg-[#0C132C]  flex items-center  px-4 py-02">
        <div class="w-[10%] justify-center items-center flex pt-2 ">
          <svg
            width={80}
            viewBox="0 0 393 247"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_16_2)">
              <g clipPath="url(#clip1_16_2)">
                <g clipPath="url(#clip2_16_2)">
                  <g clipPath="url(#clip3_16_2)">
                    <g clipPath="url(#clip4_16_2)">
                      <g clipPath="url(#clip5_16_2)">
                        <g clipPath="url(#clip6_16_2)">
                          <g clipPath="url(#clip7_16_2)">
                            <g clipPath="url(#clip8_16_2)">
                              <g clipPath="url(#clip9_16_2)">
                                <path
                                  d="M57.6118 150.987C45.6672 150.987 39.6949 144.382 39.6949 131.171C39.6949 124.599 41.3169 119.58 44.5609 116.115C47.8142 112.64 52.4739 110.903 58.54 110.903C62.9841 110.903 66.9687 111.781 70.494 113.537L67.4 121.696C65.7499 121.025 64.217 120.477 62.8012 120.053C61.3761 119.628 59.9557 119.415 58.54 119.415C53.0927 119.415 50.3691 123.31 50.3691 131.1C50.3691 138.664 53.0927 142.446 58.54 142.446C60.5558 142.446 62.4215 142.172 64.1373 141.624C65.853 141.086 67.5688 140.241 69.2845 139.089V148.111C67.5875 149.197 65.8764 149.948 64.1513 150.363C62.4262 150.779 60.2464 150.987 57.6118 150.987ZM86.5123 130.888C86.5123 134.722 87.1358 137.616 88.3827 139.571C89.6391 141.535 91.6736 142.517 94.4863 142.517C97.2803 142.517 99.2867 141.539 100.505 139.585C101.734 137.64 102.348 134.741 102.348 130.888C102.348 127.064 101.729 124.193 100.491 122.276C99.2538 120.369 97.2287 119.415 94.416 119.415C91.622 119.415 89.6063 120.364 88.3687 122.262C87.1311 124.17 86.5123 127.045 86.5123 130.888ZM113.064 130.888C113.064 137.186 111.414 142.111 108.114 145.661C104.823 149.211 100.234 150.987 94.3457 150.987C90.661 150.987 87.4124 150.175 84.5997 148.551C81.7776 146.926 79.6118 144.589 78.1023 141.539C76.5928 138.499 75.8381 134.948 75.8381 130.888C75.8381 124.571 77.4742 119.661 80.7463 116.157C84.0184 112.654 88.6218 110.903 94.5566 110.903C98.2413 110.903 101.49 111.71 104.303 113.325C107.115 114.939 109.281 117.258 110.8 120.279C112.309 123.301 113.064 126.837 113.064 130.888ZM121.263 101.639C121.263 98.2023 123.162 96.4837 126.959 96.4837C130.756 96.4837 132.655 98.2023 132.655 101.639C132.655 103.273 132.181 104.548 131.234 105.464C130.287 106.37 128.862 106.823 126.959 106.823C123.162 106.823 121.263 105.095 121.263 101.639ZM132.177 111.639V150.293H121.713V111.639H132.177ZM178.6 125.081V150.293H168.123V127.715C168.123 124.92 167.631 122.829 166.646 121.441C165.662 120.043 164.096 119.344 161.949 119.344C159.014 119.344 156.895 120.331 155.592 122.305C154.289 124.269 153.637 127.536 153.637 132.106V150.293H143.16V111.639H151.162L152.569 116.582H153.159C154.322 114.713 155.93 113.301 157.983 112.347C160.027 111.384 162.357 110.903 164.973 110.903C169.435 110.903 172.82 112.121 175.126 114.557C177.442 116.984 178.6 120.492 178.6 125.081ZM210.806 110.903C212.221 110.903 213.398 111.007 214.336 111.214L213.548 121.101C212.704 120.874 211.673 120.761 210.454 120.761C207.116 120.761 204.515 121.625 202.649 123.353C200.783 125.081 199.85 127.503 199.85 130.619V150.293H189.373V111.639H197.305L198.852 118.126H199.372C200.563 115.964 202.171 114.222 204.196 112.9C206.221 111.568 208.424 110.903 210.806 110.903ZM252.996 150.293H245.683L243.658 145.038H243.377C241.614 147.276 239.8 148.824 237.934 149.684C236.068 150.552 233.635 150.987 230.635 150.987C226.95 150.987 224.053 149.924 221.944 147.8C219.825 145.685 218.766 142.668 218.766 138.749C218.766 134.641 220.191 131.615 223.041 129.67C225.891 127.715 230.185 126.634 235.923 126.426L242.589 126.228V124.528C242.589 120.61 240.597 118.65 236.612 118.65C233.546 118.65 229.941 119.585 225.797 121.455L222.338 114.33C226.754 111.998 231.652 110.832 237.034 110.832C242.181 110.832 246.128 111.965 248.876 114.231C251.623 116.488 252.996 119.92 252.996 124.528V150.293ZM242.589 135.562V132.375L238.539 132.517C235.492 132.611 233.227 133.164 231.746 134.174C230.255 135.194 229.51 136.738 229.51 138.806C229.51 141.78 231.202 143.267 234.587 143.267C237.015 143.267 238.956 142.564 240.409 141.157C241.862 139.759 242.589 137.894 242.589 135.562ZM263.319 101.639C263.319 98.2023 265.222 96.4837 269.029 96.4837C272.826 96.4837 274.724 98.2023 274.724 101.639C274.724 103.273 274.251 104.548 273.304 105.464C272.347 106.37 270.922 106.823 269.029 106.823C265.222 106.823 263.319 105.095 263.319 101.639ZM274.246 111.639V150.293H263.769V111.639H274.246ZM312.007 138.806C312.007 142.772 310.638 145.793 307.9 147.871C305.172 149.948 301.084 150.987 295.637 150.987C292.843 150.987 290.461 150.798 288.492 150.42C286.524 150.033 284.681 149.471 282.965 148.735V140.024C284.906 140.949 287.095 141.719 289.533 142.333C291.971 142.956 294.118 143.267 295.974 143.267C299.771 143.267 301.67 142.163 301.67 139.953C301.67 139.122 301.421 138.447 300.925 137.928C300.418 137.408 299.546 136.823 298.309 136.171C297.071 135.51 295.421 134.741 293.358 133.862C290.405 132.616 288.239 131.464 286.861 130.406C285.473 129.349 284.466 128.135 283.837 126.766C283.209 125.388 282.895 123.697 282.895 121.696C282.895 118.258 284.217 115.6 286.861 113.721C289.505 111.842 293.251 110.903 298.098 110.903C302.72 110.903 307.22 111.918 311.599 113.948L308.434 121.554C306.512 120.723 304.717 120.043 303.048 119.514C301.379 118.986 299.673 118.721 297.929 118.721C294.844 118.721 293.302 119.562 293.302 121.242C293.302 122.187 293.799 123.008 294.793 123.707C295.787 124.396 297.966 125.421 301.332 126.78C304.333 127.999 306.531 129.141 307.928 130.208C309.316 131.266 310.342 132.484 311.008 133.862C311.674 135.251 312.007 136.898 312.007 138.806ZM336.069 118.41C333.847 118.41 332.108 119.118 330.852 120.534C329.595 121.951 328.873 123.962 328.686 126.568H343.382C343.335 123.962 342.66 121.951 341.357 120.534C340.054 119.118 338.291 118.41 336.069 118.41ZM337.546 150.987C331.367 150.987 326.539 149.268 323.061 145.831C319.582 142.394 317.843 137.531 317.843 131.242C317.843 124.764 319.451 119.755 322.667 116.214C325.883 112.673 330.327 110.903 335.999 110.903C341.427 110.903 345.651 112.461 348.67 115.577C351.698 118.683 353.213 122.98 353.213 128.466V133.593H328.447C328.559 136.587 329.441 138.924 331.091 140.605C332.741 142.295 335.052 143.14 338.024 143.14C340.34 143.14 342.529 142.894 344.592 142.403C346.645 141.922 348.797 141.152 351.047 140.095V148.253C349.209 149.178 347.25 149.863 345.168 150.307C343.087 150.76 340.546 150.987 337.546 150.987Z"
                                  fill="white"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <mask
                    id="mask0_16_2"
                    style={{
                      maskType: "luminance",
                    }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={635}
                    height={400}
                  >
                    <path
                      d="M634.719 0.370728H0.470154V399.609H634.719V0.370728Z"
                      fill="white"
                    />
                    <path
                      d="M368.918 83.6168H23.9882V163.854H368.918V83.6168Z"
                      fill="black"
                    />
                  </mask>
                  <g mask="url(#mask0_16_2)">
                    <g clipPath="url(#clip10_16_2)">
                      <path
                        d="M134.268 21.7271C173.921 26.2436 190.818 53.5599 195.562 67.842C198.638 77.1009 199.793 82.5902 199.793 94.6951C199.793 97.0605 199.92 100.706 196.763 101.111C194.55 101.397 193.288 99.6372 193.104 97.6887C192.273 88.9278 189.772 78.6701 181.582 69.1709C175.106 61.6607 160.103 46.5825 133.713 48.8436C126.041 49.5037 119.19 43.4354 118.969 35.6299C118.733 27.3322 126.112 20.7977 134.268 21.7271Z"
                        fill="url(#paint0_angular_16_2)"
                      />
                      <path
                        d="M258.641 225.738C218.987 221.219 202.093 193.905 197.347 179.62C194.271 170.361 193.115 164.872 193.115 152.767C193.115 150.402 192.989 146.757 196.145 146.351C198.359 146.065 199.621 147.825 199.805 149.774C200.635 158.534 203.136 168.792 211.326 178.291C217.803 185.802 232.806 200.88 259.195 198.619C266.868 197.959 273.718 204.027 273.94 211.832C274.175 220.133 266.796 226.667 258.641 225.738Z"
                        fill="url(#paint1_angular_16_2)"
                      />
                      <path
                        d="M95.1724 186.366C99.6569 146.43 126.779 129.411 140.96 124.634C150.153 121.537 155.604 120.373 167.626 120.373C169.974 120.373 173.593 120.242 173.996 123.424C174.278 125.654 172.533 126.924 170.598 127.11C161.899 127.944 151.714 130.465 142.285 138.714C134.828 145.24 119.857 160.35 122.102 186.925C122.758 194.652 116.732 201.551 108.982 201.774C100.738 202.009 94.2496 194.58 95.1724 186.366Z"
                        fill="url(#paint2_angular_16_2)"
                      />
                      <path
                        d="M297.736 61.1019C293.252 101.038 266.129 118.056 251.948 122.834C242.755 125.931 237.305 127.095 225.283 127.095C222.934 127.095 219.315 127.226 218.913 124.044C218.631 121.814 220.376 120.543 222.311 120.358C231.009 119.524 241.194 117.003 250.623 108.754C258.08 102.228 273.051 87.1182 270.806 60.5431C270.151 52.8158 276.176 45.9165 283.926 45.6936C292.171 45.4591 298.659 52.8882 297.736 61.1019Z"
                        fill="url(#paint3_angular_16_2)"
                      />
                      <path
                        d="M91.9583 66.7102C128.541 50.6534 156.733 65.8011 167.936 75.7809C175.197 82.2488 178.92 86.4237 184.931 96.9073C186.107 98.9571 188.027 102.046 185.492 103.989C183.718 105.35 181.749 104.464 180.625 102.868C175.557 95.6971 168.295 88.0769 156.489 83.9773C147.149 80.7346 126.67 75.2308 104.943 90.4799C98.6247 94.9125 89.6816 93.1059 85.6139 86.4584C81.2875 79.3854 84.4353 70.0108 91.9583 66.7102Z"
                        fill="url(#paint4_angular_16_2)"
                      />
                      <path
                        d="M300.95 180.755C264.367 196.812 236.175 181.664 224.972 171.685C217.711 165.217 213.988 161.042 207.977 150.558C206.801 148.509 204.881 145.419 207.414 143.477C209.19 142.116 211.157 143.002 212.283 144.597C217.351 151.769 224.613 159.389 236.419 163.488C245.759 166.731 266.238 172.235 287.965 156.989C294.283 152.553 303.227 154.36 307.294 161.007C311.621 168.08 308.473 177.455 300.95 180.755Z"
                        fill="url(#paint5_angular_16_2)"
                      />
                      <path
                        d="M139.833 228.978C123.89 192.134 138.931 163.74 148.84 152.458C155.264 145.147 159.407 141.395 169.819 135.341C171.854 134.157 174.921 132.226 176.847 134.777C178.199 136.563 177.319 138.546 175.735 139.678C168.614 144.785 161.048 152.096 156.978 163.986C153.758 173.39 148.293 194.016 163.434 215.9C167.835 222.264 166.044 231.274 159.441 235.371C152.421 239.722 143.113 236.555 139.833 228.978Z"
                        fill="url(#paint6_angular_16_2)"
                      />
                      <path
                        d="M253.072 18.4905C269.015 55.335 253.975 83.7283 244.066 95.0109C237.644 102.324 233.501 106.074 223.089 112.13C221.054 113.312 217.987 115.246 216.058 112.695C214.707 110.906 215.589 108.922 217.173 107.79C224.294 102.686 231.86 95.3757 235.931 83.4822C239.15 74.0757 244.615 53.4531 229.474 31.5653C225.07 25.2016 226.864 16.1946 233.464 12.0979C240.487 7.74639 249.795 10.9138 253.072 18.4905Z"
                        fill="url(#paint7_angular_16_2)"
                      />
                      <path
                        d="M77.6453 126.971C101.356 94.6431 133.29 93.5632 147.948 96.5655C157.449 98.5111 162.744 100.248 173.156 106.302C175.192 107.483 178.388 109.194 177.158 112.153C176.298 114.226 174.154 114.449 172.386 113.636C164.437 109.979 154.365 107.035 142.107 109.429C132.408 111.322 111.94 116.87 100.694 141.019C97.423 148.039 88.7818 150.978 81.9573 147.269C74.6987 143.323 72.7727 133.618 77.6453 126.971Z"
                        fill="url(#paint8_angular_16_2)"
                      />
                      <path
                        d="M315.26 120.497C291.55 152.822 259.612 153.902 244.96 150.9C235.459 148.954 230.164 147.217 219.752 141.163C217.717 139.982 214.52 138.271 215.748 135.312C216.61 133.239 218.754 133.016 220.519 133.83C228.471 137.489 238.541 140.431 250.801 138.037C260.498 136.143 280.965 130.599 292.214 106.45C295.485 99.426 304.126 96.4874 310.948 100.196C318.207 104.142 320.136 113.847 315.26 120.497Z"
                        fill="url(#paint9_angular_16_2)"
                      />
                      <path
                        d="M199.669 243.39C167.571 219.511 166.499 187.348 169.48 172.588C171.414 163.019 173.136 157.686 179.15 147.197C180.326 145.147 182.025 141.931 184.957 143.167C187.015 144.035 187.236 146.192 186.429 147.973C182.798 155.978 179.874 166.123 182.252 178.468C184.132 188.237 189.64 208.848 213.617 220.177C220.588 223.471 223.506 232.174 219.824 239.048C215.903 246.358 206.27 248.301 199.669 243.39Z"
                        fill="url(#paint10_angular_16_2)"
                      />
                      <path
                        d="M193.239 4.08087C225.337 27.9577 226.407 60.1206 223.426 74.8832C221.494 84.4519 219.772 89.7849 213.761 100.274C212.585 102.321 210.886 105.541 207.951 104.304C205.893 103.436 205.675 101.276 206.482 99.4954C210.113 91.4902 213.037 81.3483 210.659 69.0002C208.776 59.2346 203.271 38.6236 179.294 27.2918C172.32 23.9999 169.405 15.294 173.087 8.42369C177.003 1.11039 186.636 -0.829402 193.239 4.08087Z"
                        fill="url(#paint11_angular_16_2)"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <defs>
              <radialGradient
                id="paint0_angular_16_2"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(159.379 61.3902) rotate(90) scale(39.7514 40.4152)"
              >
                <stop offset={0.45625} stopColor="#071F9D" />
                <stop offset={0.836458} stopColor="#FF00A8" />
              </radialGradient>
              <radialGradient
                id="paint1_angular_16_2"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(233.53 186.074) rotate(90) scale(39.7528 40.4152)"
              >
                <stop offset={0.45625} stopColor="#071F9D" />
                <stop offset={0.836458} stopColor="#FF00A8" />
              </radialGradient>
              <radialGradient
                id="paint2_angular_16_2"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(134.555 161.076) rotate(90) scale(40.7039 39.4706)"
              >
                <stop offset={0.45625} stopColor="#071F9D" />
                <stop offset={0.836458} stopColor="#FF00A8" />
              </radialGradient>
              <radialGradient
                id="paint3_angular_16_2"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(258.353 86.3921) rotate(90) scale(40.7039 39.4706)"
              >
                <stop offset={0.45625} stopColor="#071F9D" />
                <stop offset={0.836458} stopColor="#FF00A8" />
              </radialGradient>
              <radialGradient
                id="paint4_angular_16_2"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(135.196 82.1734) rotate(90) scale(22.4849 51.5436)"
              >
                <stop offset={0.45625} stopColor="#071F9D" />
                <stop offset={0.836458} stopColor="#FF00A8" />
              </radialGradient>
              <radialGradient
                id="paint5_angular_16_2"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(257.711 165.292) rotate(90) scale(22.4849 51.544)"
              >
                <stop offset={0.45625} stopColor="#071F9D" />
                <stop offset={0.836458} stopColor="#FF00A8" />
              </radialGradient>
              <radialGradient
                id="paint6_angular_16_2"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(155.187 185.432) rotate(90) scale(51.9111 22.3254)"
              >
                <stop offset={0.45625} stopColor="#071F9D" />
                <stop offset={0.836458} stopColor="#FF00A8" />
              </radialGradient>
              <radialGradient
                id="paint7_angular_16_2"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(237.719 62.0382) rotate(90) scale(51.9121 22.325)"
              >
                <stop offset={0.45625} stopColor="#071F9D" />
                <stop offset={0.836458} stopColor="#FF00A8" />
              </radialGradient>
              <radialGradient
                id="paint8_angular_16_2"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(126.193 122.174) rotate(90) scale(26.7084 51.2386)"
              >
                <stop offset={0.45625} stopColor="#071F9D" />
                <stop offset={0.836458} stopColor="#FF00A8" />
              </radialGradient>
              <radialGradient
                id="paint9_angular_16_2"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(266.713 125.292) rotate(90) scale(26.7084 51.2387)"
              >
                <stop offset={0.45625} stopColor="#071F9D" />
                <stop offset={0.836458} stopColor="#FF00A8" />
              </radialGradient>
              <radialGradient
                id="paint10_angular_16_2"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(194.906 194.497) rotate(90) scale(51.6049 26.519)"
              >
                <stop offset={0.45625} stopColor="#071F9D" />
                <stop offset={0.836458} stopColor="#FF00A8" />
              </radialGradient>
              <radialGradient
                id="paint11_angular_16_2"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(198.002 52.9739) rotate(90) scale(51.6052 26.5165)"
              >
                <stop offset={0.45625} stopColor="#071F9D" />
                <stop offset={0.836458} stopColor="#FF00A8" />
              </radialGradient>
              <clipPath id="clip0_16_2">
                <rect
                  width={392.906}
                  height={246.529}
                  fill="white"
                  transform="translate(0 0.470581)"
                />
              </clipPath>
              <clipPath id="clip1_16_2">
                <rect
                  width={391.966}
                  height={246.729}
                  fill="white"
                  transform="translate(0.470154 0.370728)"
                />
              </clipPath>
              <clipPath id="clip2_16_2">
                <rect
                  width={391.966}
                  height={246.729}
                  fill="white"
                  transform="translate(0.470154 0.370728)"
                />
              </clipPath>
              <clipPath id="clip3_16_2">
                <rect
                  width={313.573}
                  height={54.503}
                  fill="white"
                  transform="translate(39.6669 96.4837)"
                />
              </clipPath>
              <clipPath id="clip4_16_2">
                <rect
                  width={313.573}
                  height={54.503}
                  fill="white"
                  transform="translate(39.6669 96.4837)"
                />
              </clipPath>
              <clipPath id="clip5_16_2">
                <rect
                  width={313.573}
                  height={54.503}
                  fill="white"
                  transform="translate(39.6669 96.4837)"
                />
              </clipPath>
              <clipPath id="clip6_16_2">
                <rect
                  width={313.573}
                  height={54.503}
                  fill="white"
                  transform="translate(39.6669 96.4837)"
                />
              </clipPath>
              <clipPath id="clip7_16_2">
                <rect
                  width={313.573}
                  height={54.503}
                  fill="white"
                  transform="translate(39.6669 96.4837)"
                />
              </clipPath>
              <clipPath id="clip8_16_2">
                <rect
                  width={313.573}
                  height={54.503}
                  fill="white"
                  transform="translate(39.6669 96.4837)"
                />
              </clipPath>
              <clipPath id="clip9_16_2">
                <rect
                  width={313.573}
                  height={54.503}
                  fill="white"
                  transform="translate(39.6669 96.4837)"
                />
              </clipPath>
              <clipPath id="clip10_16_2">
                <rect
                  width={242.998}
                  height={244.733}
                  fill="white"
                  transform="translate(74.9544 1.36877)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <nav class="nav flex-grow gap-2 font-semibold text-lg">
          <div class="p-3 ">
            <div className="bg-[#1F263D] flex items-start w-[45%] h-8 rounded-[100px] ">
              <div className=" flex items-center ml-2 w-fit  h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <input
                className=" bg-transparent text-sm placeholder:text-gray-500 w-[90%] outline-none p-2 h-full"
                placeholder="Search Campains , inventors ...."
              />
            </div>
          </div>
        </nav>

        <div class="w-3/12 flex items-center gap-4 justify-end">
          <div
            className="w-40 flex h-10 p-1 gap-2 rounded-[30px]"
            style={{
              background:
                "radial-gradient(circle at top left , #9C60B4 12.81%, #186ED0 100%) ",
            }}
          >
            <div className="w-8 h-8 flex items-center justify-center text-white rounded-full logoglass">
              <svg
                fill="none"
                className="w-4 h-4 back"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m7.5 0c.14839 0 .28911.0659115.38411.179908l4.99999 6.000002c.1383.16594.1544.40192.0399.58509l-5 8c-.09137.1462-.25161.235-.424.235-.1724 0-.33263-.0888-.424-.235l-5-8c-.11448-.18317-.09839-.41915.03989-.58509l5-6.000002c.095-.1139965.23572-.179908.38411-.179908zm-4.25904 6.74213 4.25904-1.70361 4.259 1.70361-4.259 6.81447zm7.60964-1.44042-3.3506-1.34023-3.35057 1.34023 3.35057-4.02069z"
                  fill="#000"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex flex-grow rounded-r-full  items-center justify-end  pr-2 text-white font-bold">
              1234 ETH
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-cover bg-[url(https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60)] rounded-full"></div>
            <div className="w- flex flex-col">
              <div className="text-[12px] font-semibold">Aditya Ranjan</div>
              <div className="text-[#59607A] text-[10px]">Inventor</div>
            </div>
          </div>
        </div>
      </header>
      {/* snavbar */}
      <div className=" flex-grow   flex ">
        {/* sidemenu */}
        
          <div className="w-[230px] flex-shrink-0 flex flex-col gap-0 items-center  pt-6 bg-[#0C132C]">
            <div
              className="h-10 flex gap-4 rounded-full items-center p-1 w-[85%] m-4 hover:menuHov"
              style={{
                background:
                  "radial-gradient(circle at top left , #9C60B4 12.81%, #186ED0 100%) ",
              }}
            >
              <div className="w-8 h-8 flex items-center justify-center text-white rounded-full logoglass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 "
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </div>
              <Link href="/">
              <div className="flex flex-grow rounded-r-full items-center justify-start  pr-2 text-white font-semibold ">
                Home
              </div>
              </Link>
            </div>
            <div className="h-10 flex gap-4 rounded-full items-center p-1 w-[85%] m-4 menuHov">
              <div className="w-8 h-8 flex items-center justify-center text-white rounded-full logoglass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#747B95]"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <Link href="/explore">

           
              <div className="flex flex-grow rounded-r-full items-center justify-start  pr-2 text-white font-semibold">
                Explore
              </div>
              </Link>
            </div>
            <div className="m-2 text-sm font-semibold text-[#59607A]">
              A C C O U N T S
            </div>
            <div className="h-10 flex gap-4 rounded-full items-center p-1 w-[85%] m-4 menuHov">
              <div className="w-8 h-8 flex items-center justify-center text-white rounded-full logoglass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#747B95] "
                >
                  <path
                    fillRule="evenodd"
                    d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex flex-grow rounded-r-full items-center justify-start  pr-2 text-white font-semibold">
                Settings
              </div>
            </div>
            <div className="h-10 flex gap-4 rounded-full items-center p-1 w-[85%] m-4 menuHov">
              <div className="w-8 h-8 flex items-center justify-center text-white rounded-full logoglass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#747B95]"
                >
                  <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
                </svg>
              </div>
              <div className="flex flex-grow rounded-r-full items-center justify-start  pr-2 text-white font-semibold">
                Walet
              </div>
            </div>
            <div className="flex-grow"></div>
            <div className="mb-8 w-[55%] h-12 p-2 gap-2 flex justify-center items-center rounded-full bg-[#1F263D] menuHov">
              <div className="w-8 h-8 flex items-center justify-center text-white rounded-full logoglass">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#747B95]"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex flex-grow rounded-r-full items-center justify-center  pr-2 text-white font-normal">
                Logout
              </div>
            </div>
          </div>
        

        {/* sidemenu */}

        {/* main container */}
        <div className="flex-grow flex ">{props.children}</div>
        {/* main container */}
      </div>
    </div>
  );
}
export default Layout;
