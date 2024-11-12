import { MessageCircle } from "lucide-react";

interface CTAButtonProps {
  text: string;
  className?: string;
}

const CTAButton = ({ text, className = "" }: CTAButtonProps) => {
  const handleClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {text}
    </button>
  );
};

export default CTAButton;