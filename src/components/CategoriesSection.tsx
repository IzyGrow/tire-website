import CategoryBadge from "./CategoryBadge";

const CategoriesSection = () => {
  const categories = [
    {
      title: "Tarihi - Kültürel",
      type: "historic" as const
    },
    {
      title: "Konaklama", 
      type: "accommodation" as const
    },
    {
      title: "Yeme-İçme",
      type: "dining" as const
    }
  ];

  return (
    <section className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 fade-in-up">
            Kategori Renkleri
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto fade-in-up delay-200">
            Uygulamada farklı kategori türleri için kullanılan renk kodları
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {categories.map((category, index) => (
            <CategoryBadge
              key={category.title}
              title={category.title}
              type={category.type}
              delay={`delay-${(index + 1) * 200}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;