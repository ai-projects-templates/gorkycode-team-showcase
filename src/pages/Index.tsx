import { TeamMemberCard } from "@/components/TeamMemberCard";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";
import teamMember5 from "@/assets/team-member-5.jpg";
import teamMember6 from "@/assets/team-member-6.jpg";

const teamMembers = [
  {
    name: "Александр Иванов",
    photo: teamMember1,
    telegram: "alex_dev",
    education: "ННГУ им. Н.И. Лобачевского, Прикладная математика",
    specialization: "Full-stack разработчик",
    techStack: ["React", "Node.js", "PostgreSQL", "TypeScript"],
  },
  {
    name: "Мария Петрова",
    photo: teamMember2,
    telegram: "maria_code",
    education: "ННГТУ им. Р.Е. Алексеева, Информационные системы",
    specialization: "Frontend разработчик",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    name: "Дмитрий Смирнов",
    photo: teamMember3,
    telegram: "dmitry_tech",
    education: "ВШЭ, Программная инженерия",
    specialization: "Backend разработчик",
    techStack: ["Python", "FastAPI", "Docker", "Redis"],
  },
  {
    name: "Елена Козлова",
    photo: teamMember4,
    telegram: "elena_data",
    education: "ННГУ, Data Science",
    specialization: "ML-инженер",
    techStack: ["Python", "TensorFlow", "PyTorch", "scikit-learn"],
  },
  {
    name: "Никита Волков",
    photo: teamMember5,
    telegram: "nikita_dev",
    education: "ИТМО, Информатика и вычислительная техника",
    specialization: "DevOps инженер",
    techStack: ["Kubernetes", "CI/CD", "AWS", "Terraform"],
  },
  {
    name: "Анна Морозова",
    photo: teamMember6,
    telegram: "anna_ux",
    education: "СПбГУ, Информационные технологии",
    specialization: "UI/UX дизайнер",
    techStack: ["Figma", "Adobe XD", "Design Systems", "Prototyping"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 gradient-primary opacity-10 animate-glow"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <h1 className="text-5xl md:text-7xl font-bold mb-2 text-gradient animate-float">
                GorkyCode 2024
              </h1>
              <div className="h-1 gradient-accent rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Команда инноваторов, объединенных страстью к технологиям и желанием создавать будущее
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наша команда</h2>
            <p className="text-muted-foreground">
              Шесть талантливых специалистов, готовых покорить хакатон
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.telegram} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            Готовы к новым вызовам на GorkyCode 2024 🚀
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
