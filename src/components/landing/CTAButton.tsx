import { MessageSquare } from "lucide-react";

interface CTAButtonProps {
  text: string;
  className?: string;
}

const CTAButton = ({ text, className = "" }: CTAButtonProps) => {
  const handleClick = () => {
    window.open("https://api.whatsapp.com/send?phone=5531993611361&text=Oi,%20tenho%20interesse%20em%20iniciar%20ou%20saber%20mais%20sobre%20o%20sistema!", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${className}`}
    >
      <MessageSquare className="w-5 h-5" />
      {text}
    </button>
  );
};

export default CTAButton;