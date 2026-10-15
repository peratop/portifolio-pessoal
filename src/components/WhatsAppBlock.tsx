import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Copy, MessageCircle } from 'lucide-react';

interface WhatsAppBlockProps {
  phoneNumber?: string; // Formato internacional sem símbolos, ex: 5511999999999
  formattedPhone?: string; // Formato amigável de exibição, ex: +55 (11) 99999-9999
  defaultMessage?: string;
  customMessage?: string;
  className?: string;
}

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
  </svg>
);

export const WhatsAppBlock: React.FC<WhatsAppBlockProps> = ({
  phoneNumber = '5511999999999',
  defaultMessage = 'Olá Leonardo! Vi seu portfólio e gostaria de conversar sobre um projeto freelance.',
  customMessage,
  className = '',
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const messageToSend = customMessage || defaultMessage;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageToSend)}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(whatsappUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className={`p-5 rounded-none bg-zinc-900/70 border border-zinc-800 space-y-4 ${className}`}>
      {/* Top Header */}
      <div className="flex items-center justify-between gap-3 border-b border-zinc-800/80 pb-3">
        <div className="flex items-center gap-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-white">
            Conversa Direta via WhatsApp
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-zinc-300 leading-relaxed font-normal">
        Precisa alinhar um projeto freelance com urgência ou quer tirar dúvidas sobre prazos e escopo?
        <p>Envie uma mensagem direta no meu WhatsApp.</p>
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch gap-2.5 pt-1">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider py-3.5 px-5 rounded-none transition-all duration-200 shadow-md group cursor-pointer"
        >
          <WhatsAppIcon className="w-4 h-4 text-white" />
          <span className="text-xs font-bold uppercase tracking-wider text-white">Iniciar Conversa no WhatsApp</span>
        </a>

      </div>
    </div>
  );
};
