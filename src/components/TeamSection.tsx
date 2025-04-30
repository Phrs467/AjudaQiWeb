import * as React from 'react';
import { jsx as _jsx } from 'react/jsx-runtime';
import TeamMember from "./TeamMember";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Felipe B. Martins",
      role: "CEO - Diretor Executivo",
      // Using empty string will trigger the fallback with initials
      imageUrl: ""
    },
    {
      name: "Ricardo Prado",
      role: "CFO - Diretor Financeiro",
      imageUrl: "src/images/ricardo.png"
    },
    {
      name: "Pedro H. Ramos",
      role: "COO - Diretor de Operações",
      imageUrl: "src/images/pedrofoto.png"
    },
    {
      name: "Lucas Macedo",
      role: "CMO - Diretor de marketing",
      imageUrl: "src/images/lucas.png"
    },
    {
      name: "Douglas H. Souza",
      role: "CTO - Diretor de Tecnologia",
      imageUrl: "src/images/douglas.png"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Nossa Equipe</h2>
          <div className="h-1 w-24 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;