import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import './estilos/course-card.css'
import { IoEnterSharp } from "react-icons/io5";

import { IconBadge } from "@/components/icon-badge";
import { formatPrice } from "@/lib/format";
import { CourseProgress } from "@/components/course-progress";

interface CourseCardProps {
  id: string;
  title: string;
  imageUrl: string;
  chaptersLength: number;
  price: number;
  progress: number | null;
  category: string;
};

export const CourseCard = ({
  id,
  title,
  imageUrl,
  chaptersLength,
  price,
  progress,
  category
}: CourseCardProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <div className="group transition overflow-hidden p-3 h-full">
        <div className="relative w-full aspect-video  overflow-hidden">
          <Image
            fill
            className="object-cover image-card"
            alt={title}
            src={imageUrl}
          />
        </div>
        <div className="flex flex-col pt-2">
          <div className="main-info">
            <div>
              <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
                {title}
              </div>
              <p className="text-xs text-muted-foreground">
                {category}
              </p>
            </div>
            <div className="div-enroll">
              <IoEnterSharp className="icon-enrolll hidden group-hover:block" />
            </div>
          </div>
          <hr className="mt-5 line-cardd"/>
          <div className="info-price">
            <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
              <div className="flex items-center gap-x-1 text-slate-500">
                <IconBadge size="sm" icon={BookOpen} />
                <span>
                  {chaptersLength} {chaptersLength === 1 ? "Chapter" : "Chapters"}
                </span>
              </div>
            </div>
            {progress !== null ? (
              <CourseProgress
                variant={progress === 100 ? "success" : "default"}
                size="sm"
                value={progress}
              />
            ) : (
              <p className="text-md md:text-sm font-medium text-slate-700">
                {formatPrice(price)}
              </p>
            )}
            </div>
        </div>
      </div>
    </Link>
  )
}