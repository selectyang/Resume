webpackJsonp([1],{24:function(t,c,e){"use strict";var l=e(2),i=e(85);l.default.use(i.a),c.a=new i.a({routes:[]})},26:function(t,c){},27:function(t,c,e){function l(t){e(78)}var i=e(14)(e(50),e(84),l,null,null);t.exports=i.exports},50:function(t,c,e){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var l=e(74),i=(e.n(l),e(75)),s=(e.n(i),e(81)),n=e.n(s),a=e(80),o=e.n(a),r=e(55),u=e(53);e.n(u);c.default={name:"app",data:function(){return{text:"你好"}},store:r.a,components:{Topbar:n.a,ResumePreview:o.a}}},51:function(t,c,e){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default={name:"ResumePreview",computed:{projects:function(){return this.$store.state.projects},skill:function(){return this.$store.state.skill},other:function(){return this.$store.state.other}}}},52:function(t,c,e){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default={name:"Topbar",computed:{contacts:function(){return this.$store.state.contacts}}}},53:function(t,c){!function(t){function c(){var t,c;t=document.createElement("div"),t.innerHTML=e,e=null,(c=t.getElementsByTagName("svg")[0])&&(c.setAttribute("aria-hidden","true"),c.style.position="absolute",c.style.width=0,c.style.height=0,c.style.overflow="hidden",n(c,document.body))}var e='<svg><symbol id="icon-book" viewBox="0 0 1024 1024"><path d="M637.638977 854.143451c-52.188616 0-97.828073 28.036543-122.796744 69.687152-24.968671-41.649586-70.40449-69.687152-122.285091-69.687152l-336.974731 0 0 40.827871 336.974731 0c56.17951 0 101.818967 45.845141 101.818967 102.126982l40.829917 0c0-56.281841 45.946448-102.126982 102.43295-102.126982l337.077062 0 0-40.827871L637.638977 854.143451 637.638977 854.143451z"  ></path><path d="M423.564343 731.550345l-317.224922 0 0-663.818731 286.218744 0c56.17951 0 101.818967 45.844118 101.818967 102.125959l0 612.858082 40.829917 0 0-612.858082c0-56.281841 45.946448-102.125959 102.43295-102.125959l286.21772 0 0 663.818731L605.916485 731.550345l0 40.829917 358.771153 0L964.687638 26.901697l-327.048661 0c-52.188616 0-97.828073 28.03859-122.796744 69.687152-24.968671-41.648562-70.40449-69.687152-122.285091-69.687152l-327.048661 0 0 745.580896 358.055862 0L423.564343 731.550345z"  ></path></symbol><symbol id="icon-flag" viewBox="0 0 1024 1024"><path d="M745.76458 303.19744 269.253862 303.19744l0 59.564607 476.510718 0L745.76458 303.19744zM745.76458 422.324608 269.253862 422.324608l0 59.564607 476.510718 0L745.76458 422.324608zM507.509221 541.452799 269.253862 541.452799l0 59.563584 238.255359 0L507.509221 541.452799zM856.978521 64.883753 158.09211 64.883753c-40.774659 19.836791-67.530023 67.998697-67.530023 121.454166l0 641.24255c0 43.393299 17.682731 83.996043 47.172369 108.307751 18.033725 14.891152 39.08825 22.511713 60.202127 22.511713 13.497409 0 27.049053-3.081175 39.902802-9.364275l268.505313-130.820488c5.063319-2.443655 9.18929-6.570649 13.784958-9.829879 4.653997 3.260254 8.727779 7.387247 13.843286 9.829879L777.17394 949.034635c12.854772 6.284123 26.411533 9.364275 39.902802 9.364275 21.171182 0 42.114167-7.620561 60.202127-22.511713 29.494755-24.311709 47.178509-64.914452 47.178509-108.307751L924.457378 186.337919C924.456355 132.881426 897.700991 84.720543 856.978521 64.883753zM817.076742 827.580468 573.822532 696.759981 466.441896 696.759981 197.936583 827.580468 197.936583 186.337919l619.140159 0L817.076742 827.580468z"  ></path></symbol><symbol id="icon-star" viewBox="0 0 1024 1024"><path d="M120.326 383.712h247.382l106.048-249.633c0 0 27.636-72.048 70.7 0 22.945 56.237 106.048 249.633 106.048 249.633h247.382c0 0 96.151 24.102 0 106.949s-176.682 142.62-176.682 142.62l70.7 249.633c0 0 25.965 98.593-70.7 71.341-103.542-68.064-212.032-178.291-212.032-178.291l-212.032 178.291c0 0-103.286 39.785-70.7-71.341 29.437-99.172 70.7-249.633 70.7-249.633l-176.682-142.62c-0.129 0.065-90.494-59.645-0.129-106.949z"  ></path></symbol><symbol id="icon-city" viewBox="0 0 1024 1024"><path d="M512 0C283.092978 0 97.52497 185.568008 97.52497 414.47503S512 1024 512 1024s414.47503-380.617948 414.47503-609.52497S740.907022 0 512 0zM512 950.850179c0 0-365.700357-319.972578-365.700357-527.088217C146.275268 216.670697 310.027517 48.774673 512 48.774673c201.972483 0 365.700357 167.896025 365.700357 374.987289C877.700357 630.877601 512 950.850179 512 950.850179zM512 243.800238c-94.2587 0-170.650417 76.416091-170.650417 170.674792s76.416091 170.674792 170.650417 170.674792c94.283075 0 170.650417-76.416091 170.650417-170.674792S606.283075 243.800238 512 243.800238zM512 536.375149c-67.324161 0-121.900119-54.575958-121.900119-121.900119s54.575958-121.900119 121.900119-121.900119c67.324161 0 121.875744 54.575958 121.875744 121.900119S579.324161 536.375149 512 536.375149z"  ></path></symbol><symbol id="icon-email" viewBox="0 0 1024 1024"><path d="M952.510294 558.238091c12.902868 0 23.372314-10.501168 23.372314-23.404036L975.882608 231.575216c0-18.742876-5.863545-36.087916-15.753799-50.418296-0.407276-0.655939-0.50756-1.402953-0.962931-2.030239-0.775666-1.006933-1.834788-1.566682-2.726088-2.434445-16.284895-20.573571-41.179888-34.012651-69.452815-34.012651L150.830729 142.679583c-49.114604 0-88.897679 39.781028-88.897679 88.895633l0 538.546609c0 49.122791 39.783075 88.872097 88.897679 88.872097l736.157269 0c49.118698 0 88.895633-39.749306 88.895633-88.872097l0-74.069973c-0.071631-12.858866-10.488889-23.280216-23.372314-23.280216-12.879332 0-23.351847 10.42135-23.408129 23.280216l0 69.393463c0 25.858948-20.977777 46.799886-46.795792 46.799886L155.511331 812.245202c-25.814945 0-46.806026-20.941961-46.806026-46.799886L108.705306 236.255819c0-2.558265 0.36532-4.996804 0.74906-7.458879l408.995021 333.6101c0.023536 0 0.067538 0.023536 0.092098 0.048095 3.64911 2.726088 7.794523 3.8814 11.992125 4.340865 1.207501 0.215918 2.390443 0.148379 3.621481 0.171915 1.207501-0.023536 2.38635 0.048095 3.593851-0.171915 4.221138-0.455371 8.370645-1.614777 11.992125-4.340865 0.020466-0.023536 0.071631-0.048095 0.096191-0.048095L928.76652 232.858442c0.075725 1.130753 0.343831 2.242064 0.343831 3.397377l0 298.581306C929.110351 547.736922 939.579797 558.238091 952.510294 558.238091L952.510294 558.238091 952.510294 558.238091zM155.511331 189.45184l726.790948 0c6.15621 0 12.019755 1.258667 17.423835 3.433192L534.154068 512.353041 142.189931 191.630459C146.438699 190.347233 150.850172 189.45184 155.511331 189.45184L155.511331 189.45184 155.511331 189.45184zM155.511331 189.45184"  ></path></symbol><symbol id="icon-phone" viewBox="0 0 1024 1024"><path d="M971.093 865.28c-20.481 64.853-109.227 158.72-191.147 158.72v0h-5.119c-122.88-6.827-290.133-121.173-447.147-308.907l-58.027-69.973c-155.307-187.733-237.227-370.347-218.454-489.813 13.653-83.627 139.947-155.307 211.627-155.308 35.84 0 47.787 17.067 52.907 27.307 40.961 71.68 90.453 196.267 92.16 242.347v3.412l-1.707 3.412c-8.533 23.893-29.013 34.133-46.080 44.373-23.893 13.653-35.84 22.187-37.547 46.080 0 6.826 6.827 40.961 109.227 167.253l44.373 52.906c104.107 121.173 136.532 134.827 143.36 134.827 25.6 3.412 35.84-6.827 54.613-27.307 13.653-15.36 29.013-32.427 54.613-35.84h6.826c44.373 10.24 160.427 83.627 225.28 138.239 6.827 8.533 22.188 27.307 10.24 68.267v0zM930.133 827.733c-71.68-59.733-167.253-114.347-201.387-124.587-10.24 3.413-18.773 10.24-30.72 23.893-18.773 18.773-42.667 42.667-88.747 35.84-20.48-3.413-59.733-22.187-174.080-157.013l-11.947-13.653-6.827-11.947-11.947-13.653c-112.64-136.533-128-182.613-126.294-201.387 3.413-44.373 35.84-64.853 58.027-76.8 15.36-8.533 25.6-13.653 29.013-23.893-3.413-35.84-39.253-136.532-83.627-215.040-3.413-6.827-15.36-8.533-20.48-8.533-56.32 0-158.72 56.32-168.96 119.467-13.654 85.333 34.133 250.88 211.627 462.507l58.027 69.973c175.787 211.627 327.68 286.72 414.72 290.133h3.412c63.147 0 133.12-75.093 150.187-128 3.413-11.947 5.119-23.893 0-27.307z"  ></path></symbol><symbol id="icon-chilun1" viewBox="0 0 1024 1024"><path d="M848 576 792.464 576C785.152 608.032 772.48 637.984 755.456 664.96L794.848 704.336C801.088 710.576 801.088 720.72 794.848 726.96L726.96 794.848C720.72 801.088 710.576 801.088 704.336 794.848L664.976 755.488C638 772.528 608.048 785.2 576 792.528L576 848C576 856.832 568.832 864 560 864L464 864C455.168 864 448 856.832 448 848L448 792.544C415.984 785.232 386.032 772.608 359.056 755.616L319.328 795.328C313.072 801.6 302.928 801.6 296.672 795.328L228.672 727.328C222.4 721.072 222.4 710.928 228.672 704.672L268.432 664.912C251.456 637.936 238.88 608 231.584 576L176 576C167.168 576 160 568.832 160 560L160 464C160 455.168 167.168 448 176 448L231.536 448C238.848 415.968 251.52 386.016 268.544 359.04L229.152 319.664C222.912 313.424 222.912 303.28 229.152 297.04L297.04 229.152C303.28 222.912 313.424 222.912 319.664 229.152L359.024 268.512C386 251.472 415.952 238.8 448 231.472L448 176C448 167.168 455.168 160 464 160L560 160C568.832 160 576 167.168 576 176L576 231.456C608.016 238.768 637.968 251.392 664.944 268.384L704.672 228.672C710.928 222.4 721.072 222.4 727.328 228.672L795.328 296.672C801.6 302.928 801.6 313.072 795.328 319.328L755.568 359.088C772.544 386.064 785.12 416 792.416 448L848 448C856.832 448 864 455.168 864 464L864 560C864 568.832 856.832 576 848 576ZM832 496C832 487.168 824.832 480 816 480L798.016 480 798.016 480 765.776 480C760.352 436.928 743.952 397.472 719.872 363.824 717.856 361.008 716.144 357.952 714.032 355.232L714.048 355.216 736.8 332.448 736.8 332.448 749.584 319.664C755.84 313.424 755.84 303.28 749.584 297.04L726.96 274.416C720.72 268.16 710.576 268.16 704.336 274.416L691.6 287.152 691.6 287.152 668.816 309.92 668.768 309.968C663.072 305.536 656.896 301.712 650.832 297.76 619.232 277.264 583.152 263.104 544 258.208L544 225.872 544 225.872 544 208C544 199.168 536.832 192 528 192L496 192C487.168 192 480 199.168 480 208L480 225.872 480 225.872 480 258.208C433.296 264.048 390.672 282.608 355.328 310.08L332.48 287.232 332.48 287.232 319.664 274.416C313.424 268.16 303.28 268.16 297.04 274.416L274.416 297.04C268.16 303.28 268.16 313.424 274.416 319.664L287.248 332.496 287.248 332.496 310.08 355.328C282.624 390.688 264.064 433.312 258.224 480L225.936 480 225.936 480 208 480C199.168 480 192 487.168 192 496L192 528C192 536.832 199.168 544 208 544L225.984 544 225.984 544 258.224 544C263.648 587.072 280.048 626.528 304.128 660.176 306.144 662.992 307.856 666.048 309.968 668.768L309.952 668.784 287.2 691.552 287.2 691.552 274.416 704.336C268.16 710.576 268.16 720.72 274.416 726.96L297.04 749.584C303.28 755.84 313.424 755.84 319.664 749.584L332.4 736.848 332.4 736.848 355.184 714.08 355.232 714.032C360.928 718.464 367.104 722.288 373.168 726.24 404.768 746.736 440.848 760.896 480 765.792L480 798.128 480 798.128 480 816C480 824.832 487.168 832 496 832L528 832C536.832 832 544 824.832 544 816L544 798.128 544 798.128 544 765.792C590.704 759.952 633.328 741.392 668.672 713.92L691.52 736.768 691.52 736.768 704.336 749.584C710.576 755.84 720.72 755.84 726.96 749.584L749.584 726.96C755.84 720.72 755.84 710.576 749.584 704.336L736.752 691.504 736.752 691.504 713.92 668.672C741.376 633.312 759.936 590.688 765.776 544L798.064 544 798.064 544 816 544C824.832 544 832 536.832 832 528L832 496ZM512 672C423.632 672 352 600.368 352 512 352 423.632 423.632 352 512 352 600.368 352 672 423.632 672 512 672 600.368 600.368 672 512 672ZM512 384C441.312 384 384 441.312 384 512 384 582.688 441.312 640 512 640 582.688 640 640 582.688 640 512 640 441.312 582.688 384 512 384Z"  ></path></symbol><symbol id="icon-qq" viewBox="0 0 1024 1024"><path d="M370.757139 989.754035c-42.969651 0-82.105996-3.463891-113.178689-10.015098-26.290783-5.544273-47.413869-13.43601-62.782905-23.457248-27.558659-17.968234-33.342386-40.312124-33.342386-55.891961 0-36.309974 9.945513-49.269124 32.637328-70.183456l4.275373-3.940752 5.708002-1.103124c4.036943-0.781806 7.995091-2.170432 12.385075-3.823072-9.531074-10.116405-19.287275-22.985504-29.223579-38.567387-9.269108-14.536065-17.751293-30.188556-24.484647-44.855604-16.388249 21.318538-40.45948 39.623439-68.014046 42.46823l-1.047866 0.107447h-1.574868c-3.774977 0-11.967566-0.928139-18.080797-8.178263l-2.846838-0.972141-3.570316-8.42488c-6.949272-16.394389-13.378705-34.893718-13.378705-59.028394 0-52.552913 12.492522-101.234659 37.130666-144.691404 20.852934-36.781718 49.938366-69.905116 88.690971-100.947109-1.054005-6.459109-1.267876-12.723789-1.267876-18.719341 0-17.10661 8.670473-40.116673 18.011212-54.696739 0.87288-13.83817 5.054109-35.515888 15.314801-50.021254 1.738597-47.64923 19.363-100.661607 50.071395-150.219303C294.780747 131.998313 337.251024 91.27482 381.7761 69.925582c50.539047-24.01802 107.515712-35.679617 174.249603-35.679617 45.879933 0 98.207719 10.80816 143.565766 29.654391 60.272735 25.388227 102.094236 61.944817 131.703601 115.085108 26.906813 48.287773 40.352033 104.533798 52.762691 162.773224 19.684318 30.754444 29.262464 58.425667 29.262464 84.490299 0 10.510378-3.2623 20.049638-5.882987 27.714202-0.892323 2.608407-1.854231 5.420453-2.500961 7.814989 45.027519 66.709331 86.508259 140.290163 86.50826 226.300073 0 10.089799-2.535753 32.613792-9.519818 53.308113-13.192464 39.086204-34.072003 47.291073-49.26503 47.291073-19.649526 0-34.972513-16.598027-48.359405-38.300305-10.595312 23.650653-23.415292 47.032176-41.22696 68.328202 4.396123 2.38635 9.052167 4.616134 13.816681 6.898107 23.517623 11.263531 52.786227 25.28078 60.20008 66.595744l1.125637 6.266727-2.561336 5.64865c-0.143263 0.476861-0.36839 1.681292-0.536212 2.572592-0.841158 4.480035-2.105964 11.20418-6.986112 18.10024-25.907043 38.717813-83.412758 58.34585-170.93102 58.34585-61.171198 0-112.034633-15.132652-165.885098-31.153534-3.776-1.12359-7.582699-2.255367-11.424191-3.39226-4.665253-1.36509-13.384845-1.441838-21.078061-1.5104-3.067872-0.026606-6.186909-0.054235-9.287527-0.152473-46.651506 40.666188-139.698692 42.829458-158.769026 42.829458zM217.908962 863.945701c-13.201673 12.392238-15.523555 16.70752-15.523555 36.444027 0 28.968775 67.663052 48.432059 168.371732 48.432059 49.381687 0 112.974028-11.479449 135.902226-36.683481l7.05365-7.753591 10.414187 1.192152c4.114714 0.470721 9.423627 0.517793 15.044647 0.567935 10.862395 0.096191 22.094204 0.194428 32.272008 3.173272a7535.432417 7535.432417 0 0 1 11.540847 3.428076c53.122895 15.803941 99.001805 29.453822 154.213268 29.453822 71.119781 0 119.785154-14.331403 137.029909-40.355103l0.149403-0.224104c0.151449-0.588401 0.355087-1.669012 0.51063-2.49482 0.23536-1.254573 0.506537-2.699482 0.88823-4.281514-4.427846-16.256242-15.552208-22.25998-36.568871-32.325219-13.281491-6.361895-28.336372-13.57211-41.224913-26.01449l-15.350616-14.819521 15.44783-14.720259c31.18014-29.712719 47.941895-68.835761 62.438051-106.3604l1.969864-5.099135 12.410658-10.03761h7.239891c7.867178 0 13.062504 3.542686 16.034185 6.514367l2.128477 2.127454 1.425466 2.650363c0.974188 1.812275 2.114151 4.050246 3.433192 6.640234 3.797489 7.454786 9.535167 18.720364 15.84692 28.435632 6.099928 9.388834 10.202363 13.473873 12.289907 15.166421 2.358721-2.196015 6.996344-8.714476 11.243065-23.146162 4.117784-13.994736 5.970992-29.347398 5.970992-35.779902 0-75.43711-38.541805-142.828986-80.19139-204.419739l-0.864694-1.367137-0.287549-0.429789c-2.642177-3.963265-5.932106-8.895601-5.932106-15.805987 0-9.338692 2.90619-17.838274 5.471618-25.337062 1.809205-5.291516 3.680832-10.764158 3.680833-14.469549 0-18.7439-8.070816-40.104393-24.672936-65.300239l-2.161223-3.28072-1.301645-6.312775C818.537512 230.519164 793.461393 147.852396 683.794691 101.658308c-40.47483-16.815991-87.078241-26.482141-127.767965-26.482141-61.362556 0-111.127983 10.06831-156.61599 31.686676-76.646658 36.751019-146.504702 149.098783-146.504702 235.681744v9.435906l-7.0383 6.010901c-3.654226 4.02364-8.720615 22.160719-8.305153 32.743752l0.301875 7.668656-4.814656 5.976108c-6.227842 7.731078-13.328563 26.456558-13.328563 35.151592 0 7.743358 0.426719 13.577227 2.549056 18.72855l6.012947 14.594393-12.58769 9.52391c-81.102133 61.356416-120.527051 133.813658-120.52705 221.511 0 12.07706 2.339278 22.37459 6.132674 32.923854 16.622586-6.961552 32.267914-24.821315 39.643905-41.504276l0.206708-0.65901c0.685615-2.184759 1.722224-5.484921 3.481288-8.786107 6.577812-12.344143 17.183358-13.675464 21.437241-13.675464h5.66707l15.162328 9.094122 1.816368 8.792247c2.871397 13.891382 15.138792 42.634006 33.030278 70.691016 21.920242 34.374902 38.300304 45.918819 43.898813 47.221488l7.76587 1.807158 9.106402 13.328564v6.324032c0 6.77224-2.690272 12.794397-7.605211 17.086144l-3.773954 3.770883-6.625907 1.36509c-2.62171 0.544399-5.848195 1.215688-9.909698 1.288343-7.437389 0.496304-13.785981 2.913353-21.1149 5.702885-4.682649 1.780553-9.832949 3.741207-15.578813 5.285377z" fill="#3E3A39" ></path></symbol><symbol id="icon-blog" viewBox="0 0 1024 1024"><path d="M512 348.028928c-64.937984 0-124.901376 21.38112-173.221888 57.491456V146.255872c0-27.404288-26.079232-49.620992-58.232832-49.620992-32.147456 0-58.228736 22.216704-58.228736 49.620992V651.204608c0 2.799616 0.28672 5.541888 0.811008 8.214528 11.114496 149.829632 136.2432 267.945984 288.872448 267.945984 160.02048 0 289.681408-129.691648 289.681408-289.66912S672.02048 348.028928 512 348.028928z m0 479.862784c-90.0096 0-165.451776-62.5664-185.174016-146.5856a190.754816 190.754816 0 0 1-5.031936-43.608064c0-28.049408 6.080512-54.677504 16.984064-78.647296 29.93152-65.796096 96.251904-111.54432 173.221888-111.54432 105.070592 0 190.208 85.153792 190.208 190.193664 0 105.035776-85.137408 190.191616-190.208 190.191616z" fill="" ></path></symbol><symbol id="icon-chilun" viewBox="0 0 1024 1024"><path d="M325.12 504.832c-69.632 0-125.952 56.32-125.952 125.952 0 69.632 56.32 125.952 125.952 125.952 33.792 0 65.536-13.312 89.088-36.864 23.552-23.552 36.864-55.296 36.864-89.088 0-69.12-56.32-125.952-125.952-125.952z m0 216.576c-49.664 0-90.112-40.448-90.112-90.112 0-49.664 40.448-90.112 90.112-90.112 49.664 0 90.112 40.448 90.112 90.112 0 24.064-9.216 46.592-26.624 64s-39.424 26.112-63.488 26.112zM776.704 278.528c-53.248 0-96.256 43.008-96.256 96.256s43.008 96.256 96.256 96.256 96.256-43.008 96.256-96.256-43.52-96.256-96.256-96.256z m0 156.672c-33.28 0-60.416-27.136-60.416-60.416 0-33.28 27.136-60.416 60.416-60.416 33.28 0 60.416 27.136 60.416 60.416 0 33.28-27.136 60.416-60.416 60.416z" fill="" ></path><path d="M587.264 569.856h-28.672c-4.096 0-9.728-4.096-10.752-8.192 0-0.512-0.512-1.024-0.512-1.536l-14.848-36.352c0-0.512-0.512-1.024-0.512-1.536-2.048-3.584-1.024-10.24 2.048-13.312l20.48-20.48c7.168-7.168 10.752-16.384 10.752-26.112 0-9.728-3.584-18.944-10.752-26.112l-34.816-34.304c-7.168-7.168-16.384-10.752-26.112-10.752-9.728 0-18.944 3.584-26.112 10.752l-20.48 20.48c-2.56 2.56-9.728 3.584-13.312 2.048-0.512-0.512-1.024-0.512-1.536-1.024l-36.352-14.848c-0.512 0-1.024-0.512-1.536-0.512-3.584-1.024-8.192-6.656-8.192-10.752v-28.672c0-9.728-3.584-18.944-10.752-26.112-7.168-7.168-16.384-10.752-26.112-10.752h-49.152c-9.728 0-18.944 3.584-26.112 10.752-7.168 7.168-10.752 16.384-10.752 26.112v28.672c0 4.096-4.096 9.728-8.192 10.752-0.512 0-1.024 0.512-1.536 0.512l-36.352 14.848c-0.512 0-1.024 0.512-1.536 1.024-3.584 2.048-10.24 1.024-13.312-2.048l-20.48-20.48c-7.168-7.168-16.384-10.752-26.112-10.752-9.728 0-18.944 3.584-26.112 10.752l-34.304 34.304c-6.656 6.656-10.752 15.872-10.752 26.112 0 9.728 3.584 18.944 10.752 26.112l20.48 20.48c2.56 2.56 4.096 9.728 2.048 13.312-0.512 0.512-0.512 1.024-1.024 1.536l-14.848 36.352c0 0.512-0.512 1.024-0.512 1.536-1.024 3.584-6.656 8.192-10.752 8.192h-28.672c-9.728 0-18.944 3.584-26.112 10.752-7.168 7.168-10.752 16.384-10.752 26.112v48.64c0 9.728 3.584 18.944 10.752 26.112 7.168 7.168 16.384 10.752 26.112 10.752h28.672c4.096 0 9.728 4.096 10.752 8.192 0 0.512 0.512 1.024 0.512 1.536l14.848 36.352c0 0.512 0.512 1.024 0.512 1.536 2.048 3.584 1.024 10.24-2.048 13.312l-20.48 20.48c-7.168 7.168-10.752 16.384-10.752 26.112s3.584 18.944 10.752 26.112l34.816 34.304c7.168 7.168 16.384 10.752 26.112 10.752 9.728 0 18.944-3.584 26.112-10.752l20.48-20.48c2.56-2.56 9.728-3.584 13.312-2.048 0.512 0.512 1.024 0.512 1.536 1.024l36.352 14.848c0.512 0 1.024 0.512 1.536 0.512 3.584 1.024 8.192 6.656 8.192 10.752v28.672c0 9.728 3.584 18.944 10.752 26.112 7.168 6.656 16.384 10.752 26.112 10.752h48.64c9.728 0 18.944-3.584 26.112-10.752 7.168-7.168 10.752-16.384 10.752-26.112v-28.672c0-4.096 4.096-9.728 8.192-10.752 0.512 0 1.024-0.512 1.536-0.512l36.352-14.848c0.512 0 1.024-0.512 1.536-1.024 3.584-2.048 10.24-1.024 13.312 2.048l20.48 20.48c7.168 7.168 16.384 10.752 26.112 10.752 9.728 0 18.944-3.584 26.112-10.752l34.816-34.816c7.168-7.168 10.752-16.384 10.752-26.112 0-9.728-3.584-18.944-10.752-26.112l-20.48-20.48c-2.56-2.56-3.584-9.728-2.048-13.312 0-0.512 0.512-1.024 0.512-1.536l14.848-36.352c0-0.512 0.512-1.024 0.512-1.536 1.024-4.096 7.168-8.192 10.752-8.192h28.672c9.728 0 18.944-3.584 26.112-10.752 7.168-7.168 10.752-16.384 10.752-26.112v-49.152c0-9.728-3.584-18.944-10.752-26.112-6.656-5.632-15.872-9.728-25.6-9.728z m-73.728 118.784l-14.336 34.816c-8.704 17.408-5.12 40.96 8.704 54.784l20.48 20.48 0.512 0.512c0 0.512 0 0.512-0.512 0.512l-34.816 34.816s-0.512 0.512-1.024 0l-20.48-20.48c-13.824-13.824-37.376-17.408-54.784-8.704l-34.816 14.336c-18.432 6.144-32.256 25.6-32.256 45.056V893.952l-0.512 0.512h-49.152l-0.512-0.512v-28.672c0-19.456-13.824-38.912-32.256-45.056l-34.816-14.336c-17.408-8.704-40.96-5.12-54.272 8.704l-20.48 20.48s-1.024 0.512-1.024 0l-34.816-34.816-0.512-0.512v-0.512l20.48-20.48c13.824-13.824 17.408-37.376 8.704-54.784l-14.336-34.816c-6.144-18.432-25.6-32.256-45.056-32.256H62.464l-0.512-0.512v-48.64c0-0.512 0-0.512 0.512-0.512l0.512-0.512h28.672c19.456 0 38.912-13.824 45.056-32.256l14.336-34.816c8.704-17.408 5.12-40.96-8.704-54.784l-20.48-20.48-0.512-0.512c0-0.512 0-0.512 0.512-0.512l34.304-34.304c0.512-0.512 1.024-0.512 1.536 0l20.48 20.48c13.824 13.824 36.864 17.408 54.784 8.704l34.816-14.336c18.432-6.144 32.256-25.6 32.256-45.056v-28.672s0-0.512 0.512-0.512l0.512-0.512h49.152s0.512 0 0.512 0.512V398.848c0 19.456 13.824 38.912 32.256 45.056l34.816 14.336c17.408 8.704 40.96 5.12 54.784-8.704l20.48-20.48c0.512-0.512 1.024-0.512 1.536 0l34.816 34.816v1.024l-20.48 20.48c-13.824 13.824-17.408 37.376-8.704 54.272l14.336 34.816c6.144 18.432 25.6 32.256 45.056 32.256h28.672s0.512 0 0.512 0.512 0.512 0.512 0.512 0.512v49.152s0 0.512-0.512 0.512l-0.512 0.512h-28.672c-20.48-1.536-39.424 12.288-46.08 30.72zM988.672 334.848c-6.144-6.144-13.824-9.216-22.528-9.216h-20.992c-1.024 0-3.072-1.536-3.072-2.56 0-0.512-0.512-1.024-0.512-1.536l-10.752-26.112c0-0.512-0.512-1.024-0.512-1.536-0.512-1.024 0-3.072 0.512-3.584l14.848-14.848c6.144-6.144 9.216-13.824 9.216-22.528 0-8.704-3.072-16.384-9.216-22.528l-25.088-25.088c-6.144-6.144-13.824-9.216-22.528-9.216-8.192 0-16.384 3.072-22.528 9.216l-14.848 14.848c-0.512 0.512-3.072 1.024-3.584 0.512-0.512-0.512-1.024-0.512-1.536-1.024l-26.112-10.752c-0.512 0-1.024-0.512-1.536-0.512-1.024-0.512-2.56-2.56-2.56-3.072v-20.48c0-8.192-3.072-16.384-9.216-22.528-6.144-6.144-13.824-9.216-22.528-9.216h-35.328c-8.192 0-16.384 3.072-22.528 9.216-6.144 6.144-9.216 13.824-9.216 22.528v20.992c0 1.024-1.536 3.072-2.56 3.072-0.512 0-1.024 0.512-1.536 0.512l-26.112 10.752c-0.512 0-1.024 0.512-1.536 1.024-1.024 0.512-3.072 0-3.584-0.512l-14.848-14.848c-6.144-6.144-13.824-9.216-22.528-9.216-8.192 0-16.384 3.072-22.528 9.216l-25.088 25.088c-6.144 6.144-9.216 13.824-9.216 22.528 0 8.192 3.072 16.384 9.216 22.528l14.848 14.848c0.512 0.512 1.024 3.072 0.512 3.584-0.512 0.512-0.512 1.024-1.024 1.536l-10.752 26.112c0 0.512-0.512 1.024-0.512 1.536-0.512 1.024-2.56 2.048-3.072 2.56h-20.992c-8.192 0-16.384 3.072-22.528 9.216-6.144 6.144-9.216 13.824-9.216 22.528v35.328c0 8.192 3.072 16.384 9.216 22.528 6.144 6.144 13.824 9.216 22.528 9.216h20.992c1.024 0 3.072 1.536 3.072 2.56 0 0.512 0.512 1.024 0.512 1.536l10.752 26.112c0 0.512 0.512 1.024 0.512 1.536 0.512 1.024 0 3.072-0.512 3.584l-14.848 14.848c-6.144 6.144-9.216 13.824-9.216 22.528 0 8.192 3.072 16.384 9.216 22.528l25.088 25.088c6.144 6.144 13.824 9.216 22.528 9.216 8.192 0 16.384-3.072 22.528-9.216l14.848-14.848c0.512-0.512 3.072-1.024 3.584-0.512 0.512 0.512 1.024 0.512 1.536 1.024l26.112 10.752c0.512 0 1.024 0.512 1.536 0.512 1.024 0.512 2.048 2.048 2.56 3.072v20.992c0 8.192 3.072 16.384 9.216 22.528 6.144 6.144 13.824 9.216 22.528 9.216h35.328c8.192 0 16.384-3.072 22.528-9.216 6.144-6.144 9.216-13.824 9.216-22.528v-20.48c0-1.024 1.536-3.072 2.56-3.072 0.512 0 1.024-0.512 1.536-0.512l26.112-10.752c0.512 0 1.024-0.512 1.536-0.512 1.024-0.512 3.072 0 3.584 0.512l14.848 14.848c6.144 6.144 13.824 9.216 22.528 9.216 8.192 0 16.384-3.072 22.016-9.216l25.088-25.088c6.144-6.144 9.216-13.824 9.216-22.528 0-8.192-3.072-16.384-9.216-22.528l-14.848-14.848c-0.512-0.512-1.024-3.072-0.512-4.096 0.512-0.512 0.512-1.024 0.512-1.536l10.752-26.112c0-0.512 0.512-1.024 0.512-1.536 0.512-1.024 2.56-2.56 3.072-2.56h20.992c8.192 0 16.384-3.072 22.528-9.216 6.144-6.144 9.216-13.824 9.216-22.528v-35.328c1.024-9.728-2.048-17.92-8.192-23.552z m-80.384 79.872l-10.24 25.088c-7.168 14.336-4.096 33.792 7.168 45.056l11.776 11.776-18.944 18.944-11.776-11.776c-11.264-11.264-30.72-14.336-45.056-7.168l-25.088 10.24c-15.36 5.12-26.624 20.992-26.624 37.376v16.384H762.88v-16.384c0-15.872-11.264-31.744-26.624-37.376l-25.088-10.24c-14.336-7.168-33.792-4.096-45.056 7.168l-11.776 11.776-18.944-18.944 11.776-11.776c11.264-11.264 14.336-30.72 7.168-45.056l-10.24-25.088c-5.12-15.36-20.992-26.624-36.864-26.624h-16.384v-26.624h16.384c15.872 0 31.744-11.264 37.376-26.624l10.24-25.088c7.168-14.336 4.096-33.792-7.168-45.056l-11.776-11.776 18.944-18.944 11.776 11.776c11.264 11.264 30.72 14.336 45.056 7.168l25.088-10.24c15.36-5.12 26.624-20.992 26.624-37.376v-16.384h26.624v16.384c0 15.872 11.264 31.744 26.624 37.376l25.088 10.24c14.336 7.168 33.792 4.096 45.056-7.168l11.776-11.776 18.944 18.944-11.776 11.776c-11.264 11.264-14.336 30.72-7.168 45.056l10.24 25.088c5.12 15.36 20.992 26.624 37.376 26.624H962.56v26.624h-16.384c-16.384 0-32.256 11.264-37.888 26.624z" fill="" ></path></symbol><symbol id="icon-projects" viewBox="0 0 1024 1024"><path d="M363.681 67.041c41.714 0 74.16 32.445 74.16 74.16v222.479c0 41.714-32.445 74.16-74.16 74.16h-222.479c-41.714 0-74.16-32.445-74.16-74.16v-222.479c0-41.714 32.445-74.16 74.16-74.16h222.479M363.681 29.962h-222.479c-64.891 0-115.873 50.986-115.873 111.241v222.479c0 64.891 50.986 115.873 115.873 115.873h222.479c64.891 0 115.873-50.986 115.873-115.873v-222.479c0-60.255-50.986-111.241-115.873-111.241zM887.434 479.555h-222.479c-64.891 0-115.873-50.986-115.873-115.873v-222.479c0-64.891 50.986-115.873 115.873-115.873h222.479c64.891 0 115.873 50.986 115.873 115.873v222.479c-4.636 64.891-55.619 115.873-115.873 115.873zM363.681 581.524c41.714 0 74.16 32.445 74.16 74.16v222.479c0 41.714-32.445 74.16-74.16 74.16h-222.479c-41.714 0-74.16-32.445-74.16-74.16v-222.479c0-41.714 32.445-74.16 74.16-74.16h222.479M363.681 544.445h-222.479c-64.891 0-115.873 50.986-115.873 115.873v222.479c0 64.891 50.986 115.873 115.873 115.873h222.479c64.891 0 115.873-50.986 115.873-115.873v-222.479c0-64.891-50.986-115.873-115.873-115.873zM887.434 581.524c41.714 0 74.16 32.445 74.16 74.16v222.479c0 41.714-32.445 74.16-74.16 74.16h-222.479c-41.714 0-74.16-32.445-74.16-74.16v-222.479c0-41.714 32.445-74.16 74.16-74.16h222.479M887.434 544.445h-222.479c-64.891 0-115.873 50.986-115.873 115.873v222.479c0 64.891 50.986 115.873 115.873 115.873h222.479c64.891 0 115.873-50.986 115.873-115.873v-222.479c-4.636-64.891-55.619-115.873-115.873-115.873z"  ></path></symbol><symbol id="icon-Git" viewBox="0 0 1024 1024"><path d="M511.82 15.47C230.58 15.47 2.556 243.492 2.556 524.734c0 225.032 145.905 415.879 348.274 483.23 25.463 4.71 34.821-11.076 34.821-24.508 0-12.16-0.51-52.264-0.7-94.787-141.703 30.81-171.559-60.094-171.559-60.094-23.172-58.884-56.528-74.544-56.528-74.544-46.216-31.638 3.5-30.937 3.5-30.937 51.118 3.565 78.045 52.454 78.045 52.454 45.452 77.855 119.168 55.32 148.196 42.334 4.583-32.912 17.76-55.383 32.339-68.115-113.12-12.859-232.034-56.528-232.034-251.704 0-55.574 19.925-101.026 52.455-136.674-5.284-12.86-22.726-64.613 4.901-134.765 0 0 42.779-13.686 140.112 52.2 40.614-11.267 84.156-16.932 127.444-17.124 43.288 0.192 86.893 5.857 127.571 17.124 97.206-65.886 139.921-52.2 139.921-52.2 27.692 70.152 10.313 121.97 5.029 134.765 32.656 35.649 52.39 81.1 52.39 136.674 0 195.62-119.168 238.654-232.543 251.258 18.27 15.788 34.566 46.789 34.566 94.278 0 68.115-0.573 122.988-0.573 139.73 0 13.559 9.167 29.41 35.012 24.444 202.242-67.414 347.956-258.26 347.956-483.165 0-281.242-228.023-509.266-509.266-509.266l-0.063 0.126z"  ></path></symbol><symbol id="icon-portfolio" viewBox="0 0 1024 1024"><path d="M930.134 212.397h-238.933v-57.86c0-48.531-39.203-89.6-89.6-89.6h-179.201c-49.469 0-89.6 41.068-89.6 89.6v57.86h-238.933c-32.668 0-59.734 27.067-59.734 59.734v627.2c0 32.668 27.067 59.734 59.734 59.734h836.267c32.668 0 59.734-27.067 59.734-59.734v-627.2c-0.001-31.73-27.068-59.734-59.734-59.734zM392.533 154.538c0-15.875 14.002-29.867 29.867-29.867h179.201c17.729 0 29.867 13.991 29.867 29.867v57.86h-238.934v-57.86zM93.868 272.13h836.267v210.003h-328.534v-30.803c0-32.668-28.002-59.734-59.734-59.734h-59.734c-33.603 0-59.732 27.067-59.732 59.734v30.803h-328.533v-210.003zM541.867 601.601h-59.734v-150.271h59.734v150.271zM93.868 899.331v-357.463h328.533v59.734c0 33.603 26.129 59.734 59.732 59.734h59.734c31.73 0 59.734-27.067 59.734-59.734v-59.734h328.533v357.462h-836.267z" fill="" ></path></symbol><symbol id="icon-skill" viewBox="0 0 1024 1024"><path d="M292.693333 787.626667c0 30.72-24.746667 55.466667-55.466666 55.466666s-55.466667-24.746667-55.466667-55.466666 24.746667-55.466667 55.466667-55.466667c30.72-0.853333 55.466667 24.746667 55.466666 55.466667z"  ></path><path d="M1000.96 241.493333c-2.56-5.973333-4.266667-11.946667-6.826667-17.92-0.853333-6.826667-4.266667-12.8-8.533333-17.92-7.68-9.386667-18.773333-15.36-31.573333-15.36-6.826667 0-13.653333 1.706667-19.626667 5.12l-15.36 15.36-17.066667 17.066667-21.333333 21.333333-131.413333 132.266667c-14.506667 14.506667-38.4 14.506667-52.906667 0l-54.613333-54.613333c-14.506667-14.506667-14.506667-38.4 0-52.906667l132.266666-132.266667 14.506667-14.506666 20.48-20.48 16.213333-16.213334c3.413333-5.973333 5.12-11.946667 5.12-19.626666 0-12.8-5.973333-24.746667-16.213333-32.426667-5.973333-4.266667-11.946667-6.826667-18.773333-7.68-5.12-2.56-10.24-4.266667-16.213334-5.973333C742.4 11.946667 702.293333 5.12 661.333333 5.12c-7.68 0-14.506667 0-22.186666 0.853333C450.56 17.92 301.226667 174.08 301.226667 366.933333c0 16.213333 0.853333 32.426667 3.413333 48.64l-248.32 247.466667C-17.066667 737.28-17.066667 856.746667 56.32 930.133333l33.28 33.28c73.386667 73.386667 193.706667 73.386667 267.093333 0L597.333333 721.92c21.333333 4.266667 42.666667 5.973333 64 5.973333 190.293333 0 346.453333-146.773333 360.106667-333.653333 0.853333-8.533333 0.853333-17.92 0.853333-27.306667 0.853333-44.373333-6.826667-86.186667-21.333333-125.44zM658.773333 639.146667c-28.16 0-54.613333-4.266667-79.36-11.093334-4.266667 7.68-10.24 14.506667-16.213333 21.333334l-258.56 258.56c-43.52 43.52-115.2 43.52-158.72 0l-29.013333-29.013334c-43.52-44.373333-43.52-115.2 0-158.72l212.48-212.48 46.08-46.08c5.973333-5.973333 12.8-11.093333 19.626666-15.36-8.533333-26.453333-12.8-54.613333-12.8-83.626666v-1.706667C382.293333 208.213333 506.026667 85.333333 658.773333 85.333333c18.773333 0 37.546667 1.706667 55.466667 5.973334L597.333333 207.36c-52.053333 52.053333-52.053333 137.386667 0 189.44l29.866667 29.866667c52.053333 52.053333 137.386667 52.053333 189.44 0l114.346667-114.346667c2.56 16.213333 4.266667 33.28 4.266666 50.346667 0 152.746667-123.733333 276.48-276.48 276.48z"  ></path></symbol></svg>',l=function(){var t=document.getElementsByTagName("script");return t[t.length-1]}(),i=l.getAttribute("data-injectcss"),s=function(t,c){c.parentNode.insertBefore(t,c)},n=function(t,c){c.firstChild?s(t,c.firstChild):c.appendChild(t)};if(i&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(t){console&&console.log(t)}}!function(c){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(c,0);else{var e=function t(){document.removeEventListener("DOMContentLoaded",t,!1),c()};document.addEventListener("DOMContentLoaded",e,!1)}else document.attachEvent&&function(t,c){var e=t.document,l=!1,i=function(){l||(l=!0,c())};!function t(){try{e.documentElement.doScroll("left")}catch(c){return void setTimeout(t,50)}i()}(),e.onreadystatechange=function(){"complete"==e.readyState&&(e.onreadystatechange=null,i())}}(t,c)}(c)}(window)},54:function(t,c,e){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var l=e(2),i=e(27),s=e.n(i),n=e(24),a=e(25),o=e.n(a),r=e(26);e.n(r);l.default.use(o.a),l.default.config.productionTip=!1,new l.default({el:"#app",router:n.a,template:"<App/>",components:{App:s.a}})},55:function(t,c,e){"use strict";var l=e(87);e(2).default.use(l.a),c.a=new l.a.Store({state:{contacts:[{icon:"phone",url:"#",content:"18665168286"},{icon:"email",url:"#",content:"yangjiawen_01@163.com"},{icon:"Git",url:"https://github.com/selectyang",content:"github.com/selectyang"},{icon:"blog",url:"http://www.jianshu.com/u/a2f78bf8a87b",content:"jianshu.com/selectyang"},{icon:"city",url:"#",content:"深圳宝安"}],projects:{config:[{field:"compontent",title:"组件库",sort:"jQuery库"},{field:"translate",title:"仿写有道翻译",sort:"jQuery库"},{field:"fullpage",title:"仿写锤子fullpage首页",sort:"原生JS"},{field:"vue",title:"Vue 应用",sort:"Vue 框架"}],compontent:[{content:"jQuery制作轮播组件",preview:"https://selectyang.github.io/Mypractice/advanced/carousel/",code:"https://github.com/selectyang/Mypractice/tree/master/advanced/carousel"},{content:"jQuery制作曝光加载组件",preview:"https://selectyang.github.io/Mypractice/advanced/exposure/",code:"https://github.com/selectyang/Mypractice/tree/master/advanced/exposure"},{content:"jQuery日历组件",preview:"https://selectyang.github.io/Mypractice/advanced/Calendar/",code:"https://github.com/selectyang/Mypractice/tree/master/advanced/Calendar"}],translate:[{content:"使用jQuery仿写有道翻译",preview:"#",code:"#"}],fullpage:[{content:"使用原生JS仿写锤子fullpage",preview:"#",code:"#"}],vue:[{content:"Todo-list",preview:"https://selectyang.github.io/Sample/Todo/page.html",code:"https://github.com/selectyang/Sample/tree/master/Todo"},{content:"vue 在线简历编辑器",preview:"#",code:"#"}]},skill:{xxx:[{field:"h5",title:"HTML/CSS"},{field:"js",title:"ECMAScript(JavaScript)"},{field:"dom",title:"DOM / BOM 及常见的 Web API"},{field:"lib",title:"库 / 框架"}],h5:[{tips:"熟悉盒模型概念, 能编写语义合理的 HTML, 模块化的 CSS, 实现常见的界面布局与动画"},{tips:"熟悉已经标准化的 HTML5 / CSS3 特性"}],js:[{tips:"熟悉 ECMAScript(JavaScript), 熟练掌握模块化, 面向对象, MVC 等编程思想"},{tips:"熟练使用原生 JS 编程, 具备学习各种框架的能力学习 ES6/7 规范, 对 ES6 新特性较为熟悉"},{tips:"了解常见的数据结构与算法知识, 能够使用 JS 实现哈希表等常见数据结构"}],dom:[{tips:"熟悉原生 DOM 与 BOM 的使用, 有桌面 / 移动端前端组件开发经验"},{tips:"了解基本的前端兼容性处理, 性能优化知识与技巧, 并能在项目中加以实践"}],lib:[{tips:"熟悉 jQuery / Elemnt 等常见库的使用"},{tips:"对vue 有一定的了解, 有过 Demo 实现经验"}]},other:[{tips:"熟练掌握程序调试方法, 能快速定位解决错误"},{tips:"日常使用 Git 进行开发, 乐于尝试新工具"}]}})},74:function(t,c){},75:function(t,c){},76:function(t,c){},77:function(t,c){},78:function(t,c){},79:function(t,c,e){t.exports=e.p+"static/img/wechat.3e190fb.png"},80:function(t,c,e){function l(t){e(77)}var i=e(14)(e(51),e(83),l,"data-v-20949a65",null);t.exports=i.exports},81:function(t,c,e){function l(t){e(76)}var i=e(14)(e(52),e(82),l,null,null);t.exports=i.exports},82:function(t,c,e){t.exports={render:function(){var t=this,c=t.$createElement,l=t._self._c||c;return l("div",{attrs:{id:"header"}},[l("el-row",[l("el-col",{attrs:{span:24}},[l("div",{staticClass:"bg-purple-dark"},[l("div",{staticClass:"qrcode"},[l("img",{attrs:{src:e(79)}})]),t._v(" "),l("div",{staticClass:"figure"},[l("h1",[t._v("杨家文")]),t._v(" "),l("p",[t._v("前端开发工程师")])]),t._v(" "),l("ul",{staticClass:"contacts"},t._l(t.contacts,function(c){return l("li",[l("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[l("use",{attrs:{"xlink:href":"#icon-"+c.icon}})]),t._v(" "),l("a",{attrs:{href:""+c.url}},[t._v(t._s(c.content))])])}))])])],1)],1)},staticRenderFns:[]}},83:function(t,c){t.exports={render:function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{attrs:{id:"container"}},[e("el-row",[e("el-col",{attrs:{span:12}},[e("div",{staticClass:"grid-content bg-purple"},[e("section",{staticClass:"education"},[e("h3",[e("svg",{staticClass:"icon xxx",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-book"}})]),e("span",{staticClass:"title"},[t._v("毕业院校")])]),t._v(" "),e("ul",[e("li",[e("h4",[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-flag"}})]),e("span",{staticClass:"title"},[t._v("2004-2008")])]),t._v(" "),e("dl",{staticClass:"content"},[e("dt",[t._v("长沙文理专修学院")]),t._v(" "),e("dd",[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-flag"}})]),t._v("计算机应用（大专）")])])])])]),t._v(" "),e("section",{staticClass:"projects"},[e("h3",[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-projects"}})]),e("span",{staticClass:"title"},[t._v("项目经验")])]),t._v(" "),e("ul",t._l(t.projects.config,function(c){return e("li",[e("h4",[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-portfolio"}})]),e("span",{staticClass:"title"},[t._v(t._s(c.title))])]),t._v(" "),e("dl",{staticClass:"content"},[e("dt",[t._v(t._s(c.sort))]),t._v(" "),t._l(t.projects[c.field],function(c,l){return e("dd",{staticClass:"clearfix"},[e("span",[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-chilun1"}})]),t._v(t._s(c.content))]),e("span",{staticClass:"link"},[e("a",{attrs:{href:""+c.preview}},[e("el-button",{attrs:{size:"mini"}},[t._v("预览")])],1),t._v(" "),e("a",{attrs:{href:""+c.code}},[e("el-button",{attrs:{size:"mini"}},[t._v("Code")])],1)])])})],2)])}))])])]),t._v(" "),e("el-col",{attrs:{span:12}},[e("div",{staticClass:"grid-content bg-purple-light clearfix"},[e("section",{staticClass:"skill"},[e("h3",[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-skill"}})]),e("span",{staticClass:"title"},[t._v("技能")])]),t._v(" "),e("ul",[e("li",[e("h4",[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-portfolio"}})]),e("span",{staticClass:"title"},[t._v("web前端")])]),t._v(" "),t._l(t.skill.xxx,function(c){return e("dl",[e("dt",[t._v(t._s(c.title))]),t._v(" "),t._l(t.skill[c.field],function(c,l){return e("dd",[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-star"}})]),t._v(t._s(c.tips))])})],2)}),t._v(" "),e("h4",[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-chilun"}})]),e("span",{staticClass:"title"},[t._v("其他")])]),t._v(" "),t._l(t.other,function(c){return e("dl",[e("dd",[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-star"}})]),t._v(t._s(c.tips))])])})],2)])])])])],1)],1)},staticRenderFns:[]}},84:function(t,c){t.exports={render:function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{attrs:{id:"app"}},[e("Topbar"),t._v(" "),e("ResumePreview")],1)},staticRenderFns:[]}}},[54]);
//# sourceMappingURL=app.624ceb47ee6aabd86aa6.js.map