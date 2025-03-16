import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Title from "./Title";

export default function Gallery() {
  return (
    <div className="overflow-hidden px-5">
      <Title heading="Gallery" title="Our Gallery Images (CPI IT CLUB)" />
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mySwiper w-full max-w-[900px] mx-auto overflow-x-hidden"
      >
        <SwiperSlide>
          <img
            className="w-full h-full object-cover overflow-hidden"
            src="https://scontent.fcgp28-1.fna.fbcdn.net/v/t39.30808-6/481176864_122109755642770054_6127954479973328132_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3asaoxDxumIQ7kNvgFKaUeQ&_nc_oc=AdhIY2ILSzm1nDNkKMhI9JGBIGoT9FsXxn2vKwMpygnPOV7wUChipibOlZfD9cPXR7Q&_nc_zt=23&_nc_ht=scontent.fcgp28-1.fna&_nc_gid=c_VbIaKTn_LO3BovHR7MWQ&oh=00_AYGuSlhIBCZgYaQD0c1-GFVflMDA_SrDefmi5-B00Gn0_g&oe=67DBAF6A"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full mx-auto h-[600px] object-cover overflow-hidden"
            src="https://scontent.fcgp28-1.fna.fbcdn.net/v/t39.30808-6/484249942_122117016038770054_1615338654203692342_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=amORDhoMlFoQ7kNvgEf5-_R&_nc_oc=AdhSedjFlFwGlaeBe9a0-OCFqIVyiE9DbNEE30kYLRo-tbCmB1MSemioCpJXF_wCVbQ&_nc_zt=23&_nc_ht=scontent.fcgp28-1.fna&_nc_gid=eCo7rZGAnPG9vDa3jyoagg&oh=00_AYGFU-PA3-ZfYR-yGcXf-5ZXqrjyJwtdkNFe7itfxT7tTg&oe=67DBDFCE"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover"
            src="https://scontent.fcgp28-1.fna.fbcdn.net/v/t39.30808-6/482010626_122108626790770054_7155150234283418046_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KC0JBMmSQI8Q7kNvgHWgF-P&_nc_oc=Adh8Fa9lodAI4uaE7R4enH8lk6EueXstOWOjlo5EOUVfmBsmwX8Mz2vE_AtbY4An_P0&_nc_zt=23&_nc_ht=scontent.fcgp28-1.fna&_nc_gid=srqMwzMxZyufLqkIBukMmg&oh=00_AYGBBSkxNkriQzgzAnFTS802bd_wlRvlfga43R8ayDM-BA&oe=67DBD389"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover"
            src="https://scontent.fcgp28-1.fna.fbcdn.net/v/t39.30808-6/480525991_122108626604770054_2508486577162230327_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GmQxLU69I_wQ7kNvgHIXuc7&_nc_oc=AdgXK2fYmmj0sI1BHJPbJJoxUMjuWZGDiwUM0DzlSEUntU9d2U5xo85ukUlPlTodNvk&_nc_zt=23&_nc_ht=scontent.fcgp28-1.fna&_nc_gid=B1qgSJwQxSimUxapIQ6Vng&oh=00_AYFtx0WlRaHvUeT2L8t-PXr50wxY7ETgM_4a7Y_zuZT00Q&oe=67DBDD3B"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[600px] object-cover"
            src="https://scontent.fcgp28-1.fna.fbcdn.net/v/t39.30808-6/481182998_122109748658770054_864353200252581344_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LNmckZ9GSO4Q7kNvgFyBVjV&_nc_oc=Adg7o2GnabvjCTv_6fwDNMfa8smUYS8-B9IS7lg3TzB-_asaAutVOmRWEgLeo2elIhI&_nc_zt=23&_nc_ht=scontent.fcgp28-1.fna&_nc_gid=NpHbUAzIYS91v1I_AHIPUw&oh=00_AYH_g7XxvvJzA2dmNKmf-pxyHwcIuaUOTnau2-qR_wEkKg&oe=67DBB30E"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
