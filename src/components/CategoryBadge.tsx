interface CategoryBadgeProps {
  title: string;
  type: "historic" | "accommodation" | "dining";
  delay?: string;
}

const CategoryBadge = ({ title, type, delay = "" }: CategoryBadgeProps) => {
  const getTypeClass = () => {
    switch (type) {
      case "historic":
        return "category-historic";
      case "accommodation":
        return "category-accommodation";
      case "dining":
        return "category-dining";
      default:
        return "category-historic";
    }
  };

  return (
    <div className={`fade-in-up ${delay} group`}>
      <div className={`${getTypeClass()} px-8 py-4 rounded-2xl text-center font-bold text-lg transition-all duration-300 group-hover:scale-105 shadow-medium`}>
        {title}
      </div>
    </div>
  );
};

export default CategoryBadge;