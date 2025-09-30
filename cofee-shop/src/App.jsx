import { useEffect, useState } from "react"

function App() {

  const [theme ,setTheme] = useState(localStorage.theme || "light")


  const showSubmenu=(e)=>{
    const parent = e.currentTarget.parentElement;
    const submenu = document.querySelector(".submenu");

    submenu.classList.toggle("submenu_open")

    if (submenu.classList.contains("submenu_open")) {
      parent.classList.add("text-orange-300");
    } else {
      parent.classList.remove("text-orange-300");
    }
  }
  
  
    const showSidbar=()=>{
       document.querySelector(".nav").classList.add("right-0")
       document.querySelector(".nav").classList.remove("-right-64")
       document.querySelector(".overlay").classList.add("overlay_visible")
    }
    

    const close=()=>{
      if(document.querySelector(".cart-shop").classList.contains('left-0')){
          document.querySelector(".cart-shop").classList.remove("left-0")
          document.querySelector(".cart-shop").classList.add("-left-64")
          document.querySelector(".overlay").classList.remove("overlay_visible")
        }else if( document.querySelector(".nav").classList.contains("right-0")){
           document.querySelector(".nav").classList.remove("right-0")
       document.querySelector(".nav").classList.add("-right-64")
        document.querySelector(".overlay").classList.remove("overlay_visible")
        }

    }


    const showShop=()=>{
       document.querySelector(".cart-shop").classList.remove("-left-64")
       document.querySelector(".cart-shop").classList.add("left-0")
        document.querySelector(".overlay").classList.add("overlay_visible")
    }



  useEffect(()=>{
    if (theme=='dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme" , 'dark')
    }else{
       document.documentElement.classList.remove('dark')
       localStorage.setItem("theme" , 'light')
    }
  },[theme])
  

  return (
    <>

      <header className="fixed z-50 top-9 right-0 left-0 hidden md:flex items-center w-[98%] lg:w-[90%] h-24 m-auto 
      px-5 lg:px-10 py-5 bg-black/50 rounded-3xl backdrop-blur-[6px]">
        <div className=" flex w-full items-center justify-between">
          {/* logo */}
          <nav className="flex items-center gap-x-5 lg:gap-x-9 h-14">
              <div className="shrink-0">
                <img src="/public/images/app-logo.png" alt="Golden coffee" />
              </div>
          
            {/* menu */}
          
              <ul className="flex gap-x-5 lg:gap-x-9 h-full text-xl text-gray-300  child:leading-[56px]">
                  <li className="font-dana-medium text-orange-200">
                    <a href="#">صفحه اصلی</a>
                  </li>
                  <li className="relative group">
                    <a href="#" className="group-hover:text-orange-300 transition-colors"> فروشگاه</a>
                    {/* sub menu */}
                    <div className="absolute top-full opacity-0 invisible group-hover:opacity-100
                    group-hover:visible transition-all space-y-4 w-52 p-6 text-zinc-700 dark:text-white text-base
                    bg-white dark:bg-zinc-700 border-t-3 border-t-orange-300 rounded-2xl shadow-normal
                      child:inline-block child:transition-colors child-hover:text-orange-300 ">
                        <a href="#">قهوه ویژه</a>
                        <a href="#">ویژه در سطح جهانی </a>
                        <a href="#">قهوه درجه یک </a>
                        <a href="#"> ترکیبات تجاری </a>
                        <a href="#">کپسول قهوه </a>
                        <a href="#">قهوه زینو برزیلی</a>
                      
                    </div>
                  </li>

                  <li>
                    <a href="#"> دیکشنری</a>
                  </li>

                  <li>
                    <a href="#"> درباره ما</a>
                  </li>

                  <li>
                    <a href="#"> تماس با ما</a>
                  </li>
                
                </ul>
          
        </nav>


          <div className="flex gap-x-4 lg:gap-x-5 xl:gap-x-10 text-xl text-orange-200">
            <div className="flex items-center gap-x-4 lg:gap-x-5">
                <div className="relative group">
                <div className="py-3 cursor-pointer">
                    <svg className="size-8">
                      <use href="#shopping-cart"></use>
                    </svg>
                </div>
                
                  <div className="absolute opacity-0 invisible top-full left-0  group-hover:opacity-100 group-hover:visible w-[400px] p-5
                    bg-white dark:bg-zinc-700  border-t-3 border-t-orange-300 rounded-2xl shadow-normal transition-all">
                      <div className="flex items-center justify-between font-dana-medium text-xs">
                        <span className="text-gray-300 ">2 مورد</span>
                        <a className="flex items-center justify-center text-orange-300">
                          مشاهده سبد خرید
                        <svg className="size-4">
                          <use href="#chevron-left"></use>
                        </svg>
                        </a>
                      </div>
                    <div className="pb-1 border-b-1 border-gray-300 dark:border-b-white/10
                    divide-y divide-gray-100 dark:divide-white/10 child:py-5">
                        <div className="flex gap-x-2.5 ">

                          <img src="./public/images/products/p1.png" className="w-30 h-30"/>

                        <div className="flex flex-col justify-between  ">
                          <h4 className="text-base font-dana-medium text-zinc-700 dark:text-white line-clamp-2">قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                          <div className="flex flex-col">
                            <span className="text-sm text-teal-600 dark:text-emerald-500" >14,500 تومان تخفیف</span>
                          <div className="text-zinc-700 dark:text-white font-dana-demibold">175,000
                            <span className="font-dana text-sm">تومان</span>
                          </div>
                          </div>
                        </div>
                        
                      </div>
                        <div className="flex gap-x-2.5 ">

                          <img src="./public/images/products/p2.png" className="w-30 h-30"/>

                        <div className="flex flex-col justify-between  ">
                          <h4 className="text-base font-dana-medium text-zinc-700 dark:text-white line-clamp-2">قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                          <div className="flex flex-col">
                            <span className="text-sm text-teal-600 dark:text-emerald-500" >14,500 تومان تخفیف</span>
                          <div className="text-zinc-700 dark:text-white font-dana-demibold">175,000
                            <span className="font-dana text-sm">تومان</span>
                          </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>

                      {/* footer */}
                      <div className="flex items-center justify-between mt-5">
                        <div>
                          <span className="font-dana-medium text-xs text-gray-300 ">مبلغ قابل پرداخت</span>
                          <div className="text-zinc-700 dark:text-white font-dana-demibold">350,000
                            <span className="font-dana text-sm">تومان</span>
                          </div>
                        </div>
                      
                        <a href="#" className="flex items-center justify-center h-14 w-36 text-white rounded-xl bg-teal-600 dark:bg-emerald-500
                        hover:bg-teal-700 dark:hover:bg-emerald-600 transition-colors">ثبت سفارش</a>
                      </div>

                    </div>
                </div>

                <span className="cursor-pointer" 
                onClick={()=> setTheme(theme=="dark" ? "light" : "dark")}>
                  <svg className="inline-block dark:hidden size-8">
                    <use href="#moon"></use>
                  </svg>
                  <svg className="hidden dark:inline-block size-8">
                    <use href="#sun"></use>
                  </svg>
                </span>
            </div>

            <div className="w-px h-14 bg-white/40"></div>

            <a href="#" className="flex items-center gap-x-2.5 tracking-tightest">
              <svg className="size-8">
                    <use href="#arrow-left-on-rectangle"></use>
                  </svg>
            <span className="hidden xl:inline-block">ورود | ثبت نام</span>
            </a>

          </div>
        </div>

      </header> 


      {/* Header mobile */}
      <div className=" flex md:hidden items-center justify-between px-4 bg-white dark:bg-zinc-700  h-16">

     
      <div onClick={showSidbar}>
         <svg className="size-8 text-zinc-700 dark:text-white" >
           <use href="#bars-3"></use>
        </svg>
      </div>

        <div className="nav overflow-y-auto fixed top-0 bottom-0 -right-64 w-64 min-h-screen bg-white dark:bg-zinc-700 pt-3 px-4 z-20 transition-all">
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-gray-200 dark:border-white ">
                <div className="size-10">
                  <img src="../public/images/svgs/logo.svg" alt="Golden coffee" />
                </div>
                
              <div className="w-25 h-10">
                <img src="../public/images/svgs/logo-type.svg"/>
              </div>

              <div onClick={close}>
                <svg  className="size-6 text-zinc-700 dark:text-white">
                  <use href="#x-mark"></use>
                </svg>
              </div>
            </div>

            {/* Nav Menu */}
              <li className="flex items-center pr-2.5 mb-4 bg-orange-200/20  text-orange-300  h-12 rounded-md">
                <a className="flex items-center gap-x-2 ">
                <svg className="size-7">
                  <use href="#home"></use>
                </svg>
                صفحه اصلی
                </a>
              </li>
            <ul className="child:pr-2.5 space-y-6 text-zinc-600 dark:text-white">
              
              <li>
                <div  className="flex items-center justify-between text-orange-300" >
                   <a className="flex items-center gap-x-2">
                      <svg className=" size-7">
                        <use href="#shopping-cart"></use>
                      </svg>
                      فروشگاه
                   </a>
                  <div className="submenu_open_btn" onClick={(e)=>showSubmenu(e)} >
                      <svg className="size-5">
                        <use href="#down"></use>
                      </svg>
                  </div>
                </div>

                  <div className="submenu">
                    <a href="#">قهوه ویژه</a>
                    <a href="#" className="submenu_item-active">قهوه در سطح جهانی</a>
                    <a href="#">قهوه درجه یک</a>
                    <a href="#">ترکیبات تجاری</a>
                    <a href="#">کپسول قهوه</a>
                    <a href="#">قهوه زینو برزیلی</a>
                  </div>
              </li>

              <li>
                <a href="#" className="flex items-center gap-x-2 ">
                <svg className=" size-7">
                  <use href="#chat"></use>
                </svg>
                دیکشنری 
                </a>
              </li>

              <li>
                <a href="#" className="flex items-center gap-x-2">
                <svg className=" size-7">
                  <use href="#briefcase"></use>
                </svg>
                 درباره ما
                </a>
              </li>
              
              <li>
                <a href="#" className="flex items-center gap-x-2">
                <svg className=" size-7">
                  <use href="#document"></use>
                </svg>
                  بلاگ
                </a>
              </li>
              
              <li>
                <a href="#" className="flex items-center gap-x-2 ">
                <svg className=" size-7">
                  <use href="#phone"></use>
                </svg>
                 تماس با ما
                </a>
              </li>
              
              
            </ul>

          {/* down menu */}
          <div className=" flex flex-col gap-y-3 text-orange-300  border-t border-t-gray-200 dark:border-white px-2.5 py-8 mt-8">
            
            <a href="#" className="inline-flex items-center gap-x-2 ">
                <svg className="size-7">
                   <use href="#arrow-left-on-rectangle"></use>
                </svg>
              <span>ورود | ثبت نام</span>
            </a>


             <span className="inline-flex w-fit space-x-2" onClick={()=> setTheme(theme=="dark" ? "light" : "dark")}>
                <svg className="inline-block dark:hidden size-7">
                  <use href="#moon"></use>
                </svg>
                <svg className="hidden dark:inline-block size-7">
                  <use href="#sun"></use>
                </svg>
                <span className="hidden dark:inline-block">تم روشن</span>
                <span className="inline-block dark:hidden">تم تاریک</span>
            </span>
           

              <a className="flex items-center gap-x-2">
                <svg className="size-7">
                  <use href="#shopping-cart"></use>
                </svg>
                فرشگاه
              </a>

          </div>

        </div>

        <div className="w-25 h-10">
          <img src="../public/images/svgs/logo-type.svg"/>
        </div>

        <div onClick={showShop}>
          <svg className="size-7 text-zinc-700 dark:text-white">
            <use href="#shopping-cart"></use>
          </svg>
        </div>

         <div className="cart-shop flex flex-col overflow-y-auto fixed top-0 bottom-0 -left-64 w-64 min-h-screen bg-white dark:bg-zinc-700 pt-3 px-4 z-20 transition-all">
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-gray-200 dark:border-white ">

              <div  className="mt-2 pb-1" onClick={close}>
                <svg  className="size-6 text-zinc-700 dark:text-white">
                  <use href="#x-mark"></use>
                </svg>
              </div>
               <span className="font-dana-medium text-zinc-700 dark:text-white">سبد خرید</span>
            </div>

           <div className="child:mb-5 child:border-b child:border-gray-300 child:pb-5">
             <div className="flex gap-x-1 ">
              <img className="w-22.5 h-22.5" src="./public/images/products/p1.png" alt="Picture 1"/>
              <div className="flex flex-col justify-between">
                <h4 className="text-sm font-dana-medium text-zinc-700 dark:text-white ">
                  قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                <div className="flex flex-col">
                  <span className="text-xs font-dana-medium text-teal-600 dark:text-emerald-500">14,500 تومان تخفیف</span>
                  <div className=" text-zinc-700 dark:text-white font-dana-demibold">
                    175,000
                    <span className="font-dana text-xs mr-1">تومان</span>
                    </div>
                </div>
              </div>
            </div>
             <div className="flex gap-x-1 ">
              <img className="w-22.5 h-22.5" src="./public/images/products/p2.png" alt="Picture 2"/>
              <div className="flex flex-col justify-between">
                <h4 className="text-sm font-dana-medium text-zinc-700 dark:text-white ">
                  قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                <div className="flex flex-col">
                  <span className="text-xs font-dana-medium text-teal-600 dark:text-emerald-500">14,500 تومان تخفیف</span>
                  <div className=" text-zinc-700 dark:text-white font-dana-demibold">
                    175,000
                    <span className="font-dana text-xs mr-1">تومان</span>
                    </div>
                </div>
              </div>
            </div>
           </div>

          {/* down cart-shop */}
          <div className=" flex items-start gap-x-4 mt-auto mb-8">
            
                <a href="#" className="flex  grow-1 items-center justify-center h-12 w-28
                 bg-teal-600  dark:bg-emerald-500 text-white rounded-xl">ثبت سفارش</a>

                <div>
                  <span className="font-dana-medium text-gray-300 text-xs">مبلغ قابل پرداخت</span>
                    <div className="text-zinc-700 dark:text-white font-dana-demibold">
                      350,000
                    <span className="font-dana text-xs mr-1">تومان</span>
                    </div>
                </div>
          </div>

        </div>

      </div>



      {/* App Main */}

      <main>
        <section className="relative h-[200px] xs:h-auto xs:aspect-[2/1]  bg-[url('/images/headerBgMobile.webp')] md:bg-[url('/images/headerBgDesktop.webp')] 
        bg-no-repeat bg-cover bg-[center_top]">

          <div className=" container h-full md:min-h-screen flex items-center justify-end">
            <div className="text-white">
              <h2 className="font-morabba-bold text-2xl md:text-6xl mb-0.5 md:mb-2">قهوه عربیکا تانزانیا</h2>
              <span className="font-morabba-light text-xl md:text-5xl">یک فنجان بالانس !</span>
              <span className="block w-[100px] h-px md:h-[2px] bg-orange-400 my-3 md:my-8"></span>
              <p className="max-w-[201px] md:max-w-[460px] text-xs md:text-2xl">قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.</p>
            </div>
          </div>

            <svg className="absolute -bottom-[0.5px] right-0 left-0 hidden md:flex mx-auto w-25 h-[22px] size-8 text-background dark:text-zinc-700  " >
              <use  href="#curve"></use>
            </svg>

            <svg className="size-6 p-1 absolute -bottom-1.5 right-0 left-0 hidden md:flex mx-auto text-zinc-700 dark:text-white  border-2 border-amber-500 rounded-full">
              <use href="#down"></use>
            </svg>
        </section>

      {/* <section className="pt-8 md:pt-24 lg:pt-48  bg-no-repeat
          md:bg-[linear-gradient(rgba(243,244,246,0.25),rgba(243,244,246,0.25)),url('/images/products-bg.png')]
        dark:bg-[url('/images/products-bg.png')]">

        <div className="container "> 
          <div className="flex items-end justify-between ">
            <div>
              <h3 className="section_title">جدیدترین محصولات</h3>
              <span  className="section_suptitle">فرآوری شده از دانه قهوه</span>
            </div>
            <a href="#" className="hidden md:inline-block section_link">مشاهده همه محصولات</a>
            <a href="#" className="inline-block md:hidden section_link">مشاهده همه </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 child:rounded-2xl py-20">
            <div className="p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-normal" >
              <div className="relative mb-2 md:mb-5">
                <img src="../public/images/products/p1.png" className="w-32 mx-auto md:w-auto" alt="p 1" />
                <span className="absolute top-1 right-1.5 font-dana-demibold bg-orange-300 px-2.5 md:px-3.5 
                text-xs/[24px] md:text-base/[35px] h-5 md:h-[30px] rounded-full text-white dark:text-zinc-700">%12</span>
              </div>
              <h4 className="font-dana-medium text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 h-10 md:h-14">
                قهوه ترک بن مانو مقدار 250 گرم 
                    خط دوم اسم طولانی
                    </h4>

              <div className="flex gap-x-2 md:gap-2.5 mt-1.5 md:mt-2.5">
                <div className="  text-teal-600 dark:text-emerald-500">
                  <span className="font-dana-demibold text-base md:text-xl">145,000</span>
                  <span className="text-xs md:text-sm">تومان</span>
                </div>
                <div className="offer">
                  <span className="text-base md:text-xl">175,000</span>
                  <span className="hidden xl:inline text-xs md:text-sm">تومان</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-1.5 md:mt-2.5">
                  <div className="flex  gap-x-3">
                  <a href="#">
                      <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#shopping-cart"></use>
                    </svg>
                  </a>
                    
                    <a href="#">
                       <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#right-left"></use>
                    </svg>
                    </a>
                  </div>

                  <div className="flex ">
                    <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                  </div>
              </div>

            </div>

            <div className="p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-normal" >
              <div className="relative mb-2 md:mb-5">
                <img src="../public/images/products/p2.png" className="w-32 mx-auto md:w-auto" alt="p 1" />
                <span className="absolute top-1 right-1.5 font-dana-demibold bg-orange-300 px-2.5 md:px-3.5 
                text-xs/[24px] md:text-base/[35px] h-5 md:h-[30px] rounded-full text-white dark:text-zinc-700">%12</span>
              </div>
              <h4 className="font-dana-medium text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2h-10 md:h-14">
                قهوه ترک بن مانو مقدار 250 گرم 
                    خط دوم اسم طولانی
                    </h4>

              <div className="flex gap-x-2 md:gap-2.5 mt-1.5 md:mt-2.5">
                <div className="  text-teal-600 dark:text-emerald-500">
                  <span className="font-dana-demibold text-base md:text-xl">145,000</span>
                  <span className="text-xs md:text-sm">تومان</span>
                </div>
                <div className="offer">
                  <span className="text-base md:text-xl">175,000</span>
                  <span className="hidden xl:inline text-xs md:text-sm">تومان</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-1.5 md:mt-2.5">
                  <div className="flex  gap-x-3">
                  <a href="#">
                      <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#shopping-cart"></use>
                    </svg>
                  </a>
                    
                    <a href="#">
                       <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#right-left"></use>
                    </svg>
                    </a>
                  </div>

                  <div className="flex ">
                    <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                  </div>
              </div>


            </div>

            <div className="p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-normal" >
              <div className="relative mb-2 md:mb-5">
                <img src="../public/images/products/p3.png" className="w-32 mx-auto md:w-auto" alt="p 1" />
                <span className="absolute top-1 right-1.5 font-dana-demibold bg-orange-300 px-2.5 md:px-3.5 
                text-xs/[24px] md:text-base/[35px] h-5 md:h-[30px] rounded-full text-white dark:text-zinc-700">%12</span>
              </div>
              <h4 className="font-dana-medium text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 h-10 md:h-14">
                قهوه ترک بن مانو مقدار 250 گرم 
                    خط دوم اسم طولانی
                    </h4>

              <div className="flex gap-x-2 md:gap-2.5 mt-1.5 md:mt-2.5">
                <div className="  text-teal-600 dark:text-emerald-500">
                  <span className="font-dana-demibold text-base md:text-xl">145,000</span>
                  <span className="text-xs md:text-sm">تومان</span>
                </div>
                <div className="offer">
                  <span className="text-base md:text-xl">175,000</span>
                  <span className="hidden xl:inline text-xs md:text-sm">تومان</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-1.5 md:mt-2.5">
                  <div className="flex  gap-x-3">
                  <a href="#">
                      <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#shopping-cart"></use>
                    </svg>
                  </a>
                    
                    <a href="#">
                       <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#right-left"></use>
                    </svg>
                    </a>
                  </div>

                  <div className="flex ">
                    <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                  </div>
              </div>


            </div>

            <div className="p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-normal" >
              <div className="relative mb-2 md:mb-5">
                <img src="../public/images/products/p4.png" className="w-32 mx-auto md:w-auto" alt="p 1" />
                <span className="absolute top-1 right-1.5 font-dana-demibold bg-orange-300 px-2.5 md:px-3.5 
                text-xs/[24px] md:text-base/[35px] h-5 md:h-[30px] rounded-full text-white dark:text-zinc-700">%12</span>
              </div>
              <h4 className="font-dana-medium text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 h-10 md:h-14">
                قهوه ترک بن مانو مقدار 250 گرم 
                    خط دوم اسم طولانی
                    </h4>

              <div className="flex gap-x-2 md:gap-2.5 mt-1.5 md:mt-2.5">
                <div className="  text-teal-600 dark:text-emerald-500">
                  <span className="font-dana-demibold text-base md:text-xl">145,000</span>
                  <span className="text-xs md:text-sm">تومان</span>
                </div>
                <div className="offer">
                  <span className="text-base md:text-xl">175,000</span>
                  <span className="hidden xl:inline text-xs md:text-sm">تومان</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-1.5 md:mt-2.5">
                  <div className="flex  gap-x-3">
                  <a href="#">
                      <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#shopping-cart"></use>
                    </svg>
                  </a>
                    
                    <a href="#">
                       <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#right-left"></use>
                    </svg>
                    </a>
                  </div>

                  <div className="flex ">
                    <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                  </div>
              </div>


            </div>

            <div className="p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-normal" >
              <div className="relative mb-2 md:mb-5">
                <img src="../public/images/products/p5.png" className="w-32 mx-auto md:w-auto" alt="p 1" />
                <span className="absolute top-1 right-1.5 font-dana-demibold bg-orange-300 px-2.5 md:px-3.5 
                text-xs/[24px] md:text-base/[35px] h-5 md:h-[30px] rounded-full text-white dark:text-zinc-700">%12</span>
              </div>
              <h4 className="font-dana-medium text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 h-10 md:h-14">
                قهوه ترک بن مانو مقدار 250 گرم 
                    خط دوم اسم طولانی
                    </h4>

              <div className="flex gap-x-2 md:gap-2.5 mt-1.5 md:mt-2.5">
                <div className="  text-teal-600 dark:text-emerald-500">
                  <span className="font-dana-demibold text-base md:text-xl">145,000</span>
                  <span className="text-xs md:text-sm">تومان</span>
                </div>
                <div className="offer">
                  <span className="text-base md:text-xl">175,000</span>
                  <span className="hidden xl:inline text-xs md:text-sm">تومان</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-1.5 md:mt-2.5">
                  <div className="flex  gap-x-3">
                  <a href="#">
                      <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#shopping-cart"></use>
                    </svg>
                  </a>
                    
                    <a href="#">
                       <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#right-left"></use>
                    </svg>
                    </a>
                  </div>

                  <div className="flex ">
                    <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                  </div>
              </div>


            </div>

            <div className="p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-normal" >
              <div className="relative mb-2 md:mb-5">
                <img src="../public/images/products/p6.png" className="w-32 mx-auto md:w-auto" alt="p 1" />
                <span className="absolute top-1 right-1.5 font-dana-demibold bg-orange-300 px-2.5 md:px-3.5 
                text-xs/[24px] md:text-base/[35px] h-5 md:h-[30px] rounded-full text-white dark:text-zinc-700">%12</span>
              </div>
              <h4 className="font-dana-medium text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 h-10 md:h-14">
                قهوه ترک بن مانو مقدار 250 گرم 
                    خط دوم اسم طولانی
                    </h4>

              <div className="flex gap-x-2 md:gap-2.5 mt-1.5 md:mt-2.5">
                <div className="  text-teal-600 dark:text-emerald-500">
                  <span className="font-dana-demibold text-base md:text-xl">145,000</span>
                  <span className="text-xs md:text-sm">تومان</span>
                </div>
                <div className="offer">
                  <span className="text-base md:text-xl">175,000</span>
                  <span className="hidden xl:inline text-xs md:text-sm">تومان</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-1.5 md:mt-2.5">
                  <div className="flex  gap-x-3">
                  <a href="#">
                      <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#shopping-cart"></use>
                    </svg>
                  </a>
                    
                    <a href="#">
                       <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#right-left"></use>
                    </svg>
                    </a>
                  </div>

                  <div className="flex ">
                    <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                  </div>
              </div>


            </div>

            <div className="p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-normal" >
              <div className="relative mb-2 md:mb-5">
                <img src="../public/images/products/p7.png" className="w-32 mx-auto md:w-auto" alt="p 1" />
                <span className="absolute top-1 right-1.5 font-dana-demibold bg-orange-300 px-2.5 md:px-3.5 
                text-xs/[24px] md:text-base/[35px] h-5 md:h-[30px] rounded-full text-white dark:text-zinc-700">%12</span>
              </div>
              <h4 className="font-dana-medium text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 h-10 md:h-14">
                قهوه ترک بن مانو مقدار 250 گرم 
                    خط دوم اسم طولانی
                    </h4>

              <div className="flex gap-x-2 md:gap-2.5 mt-1.5 md:mt-2.5">
                <div className="  text-teal-600 dark:text-emerald-500">
                  <span className="font-dana-demibold text-base md:text-xl">145,000</span>
                  <span className="text-xs md:text-sm">تومان</span>
                </div>
                <div className="offer">
                  <span className="text-base md:text-xl">175,000</span>
                  <span className="hidden xl:inline text-xs md:text-sm">تومان</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-1.5 md:mt-2.5">
                  <div className="flex  gap-x-3">
                  <a href="#">
                      <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#shopping-cart"></use>
                    </svg>
                  </a>
                    
                    <a href="#">
                       <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#right-left"></use>
                    </svg>
                    </a>
                  </div>

                  <div className="flex ">
                    <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                  </div>
              </div>


            </div>

            <div className="p-2 md:p-5 bg-white dark:bg-zinc-700 shadow-normal" >
              <div className="relative mb-2 md:mb-5">
                <img src="../public/images/products/p8.png" className="w-32 mx-auto md:w-auto" alt="p 1" />
                <span className="absolute top-1 right-1.5 font-dana-demibold bg-orange-300 px-2.5 md:px-3.5 
                text-xs/[24px] md:text-base/[35px] h-5 md:h-[30px] rounded-full text-white dark:text-zinc-700">%12</span>
              </div>
              <h4 className="font-dana-medium text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 h-10 md:h-14">
                قهوه ترک بن مانو مقدار 250 گرم 
                    خط دوم اسم طولانی
                    </h4>

              <div className="flex gap-x-2 md:gap-2.5 mt-1.5 md:mt-2.5">
                <div className="  text-teal-600 dark:text-emerald-500">
                  <span className="font-dana-demibold text-base md:text-xl">145,000</span>
                  <span className="text-xs md:text-sm">تومان</span>
                </div>
                <div className="offer">
                  <span className="text-base md:text-xl">175,000</span>
                  <span className="hidden xl:inline text-xs md:text-sm">تومان</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-1.5 md:mt-2.5">
                  <div className="flex  gap-x-3">
                  <a href="#">
                      <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#shopping-cart"></use>
                    </svg>
                  </a>
                    
                    <a href="#">
                       <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#right-left"></use>
                    </svg>
                    </a>
                  </div>

                  <div className="flex ">
                    <svg className="size-5 md:size-6 text-gray-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                    <svg className="size-5 md:size-6 text-orange-400">
                      <use href="#star"></use>
                    </svg>
                  </div>
              </div>


            </div>

          </div> 


        </div>
      </section> */}


      <section className="my-20">
        <div className="container">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
            <a href="#" className="flex flex-col items-start justify-center pr-12 rounded-2xl h-[179px] md:h-[248px] lg:h-[298px] 
             bg-no-repeat bg-cover
              bg-[linear-gradient(rgba(0,0,0,0.45),rgba(243,244,246,0.1)),url('/images/categories/category-left.jpg')] ">
              <span className="font-dana-demibold text-2xl md:text-4xl mb-6">انواع قهوه</span>
              <span className="md:font-dana-medium md:text-xl">نرکیبی و تک خاستگاه</span>
            </a>
               <a href="#" className="flex flex-col items-start justify-center pr-12 rounded-2xl h-[179px] md:h-[248px] lg:h-[298px]
                  bg-no-repeat bg-cover
              bg-[linear-gradient(rgba(0,0,0,0.45),rgba(243,244,246,0.1)),url('/images/categories/category-right.jpg')]">
              <spac className="font-dana-demibold text-2xl md:text-4xl  mb-6">پودرهای فوری</spac>
              <span className="md:font-dana-medium md:text-xl">نسکافه ، هات چاکلت</span>
            </a>
         </div>
        </div>
      </section>
  

      </main>

      <div className="overlay" onClick={close}></div>

    </>
  )
}

export default App
