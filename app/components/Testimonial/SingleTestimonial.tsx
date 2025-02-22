import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;

  return (
    <div
      className="rounded-lg bg-white p-9 pt-7.5 shadow-lg text-center" // Centered text and shadow fix
      role="article" // Add semantic role for accessibility
    >
      <div className="mb-7.5 flex flex-col items-center border-b border-stroke pb-6">
        <div className="text-center">
          <h3 className="mb-1.5 text-metatitle3 text-black">{name}</h3>
          <p className="text-gray-600">{designation}</p>
        </div>
        <div className="relative h-[60px] w-[60px] overflow-hidden rounded-full mt-4">
          <Image
            src={image}
            alt={`${name}, ${designation}`} // Improved alt text for accessibility
            width={60}
            height={60}
            className="object-cover"
            priority={false} // Optimize image loading
          />
        </div>
      </div>

      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default SingleTestimonial;