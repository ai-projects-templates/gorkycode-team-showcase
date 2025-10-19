import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send } from "lucide-react";

interface TeamMember {
  name: string;
  photo: string;
  telegram: string;
  education: string;
  specialization: string;
  techStack: string[];
}

export const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <Card className="group overflow-hidden border-border/50 bg-card backdrop-blur-sm transition-smooth hover:shadow-glow hover:scale-105">
      <CardContent className="p-6">
        <div className="relative mb-4">
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/60 transition-smooth">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover transition-smooth group-hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
            <a
              href={`https://t.me/${member.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium hover:shadow-glow transition-smooth"
            >
              <Send className="w-3 h-3" />
              @{member.telegram}
            </a>
          </div>
        </div>

        <div className="text-center mt-6 space-y-3">
          <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
          
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{member.education}</p>
            <p className="text-sm font-medium text-accent">{member.specialization}</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center pt-3">
            {member.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-muted/50 text-foreground border-primary/20 hover:border-primary/60 transition-smooth"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
