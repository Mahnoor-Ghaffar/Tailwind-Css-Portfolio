import { gridItems } from "../data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(({id ,title,description,className,img,imgClassName,titleClassName,spareImg,}) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            titleClassName={titleClassName}
            spareImg={spareImg}
            imgClassName={imgClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
