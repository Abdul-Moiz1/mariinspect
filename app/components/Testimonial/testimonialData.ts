import image1 from "@/public/images/user/1.jpg";
import image2 from "@/public/images/user/2.jpg";
import image3 from "@/public/images/user/3.jpg";
import image4 from "@/public/images/user/4.jpg";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah T.",
    designation: "Graphic Designer",
    image: image1,
    content:
    "I was blown away by the detail in my Motor Inspection Hub report! The team highlighted every little thing, including some past repairs I hadn’t been told about. I felt confident moving forward with my purchase. Worth every penny!",
  },
  {
    id: 2,
    name: "Mark L.",
    designation: "Independent Contractor",
    image: image2,
    content:
      "The inspection revealed a major accident the seller hadn’t disclosed. This report saved me thousands in future repairs. I’ll definitely use this service for my next car purchase!",
  },
  {
    id: 3,
    name: "Jessica K.",
    designation: "Marketing Specialist",
    image: image3,
    content:
      "I needed a quick inspection on a used car, and they delivered a full report within 24 hours. I appreciated the easy-to-read summary and all the details on maintenance history and recalls. Super helpful!",
  },
  {
    id: 4,
    name: "Evan R.",
    designation: "Electrician",
    image: image4,
    content:
    "The Motor Inspection Hub report was incredibly detailed and accurate. They went over everything from odometer verification to title checks. I feel secure knowing I have all the facts on my car.",
  },
];