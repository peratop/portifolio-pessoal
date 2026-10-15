import React, { useState } from 'react';
import { Mail, Linkedin, Github, CheckCircle2, Copy, Send, ArrowLeft, MessageSquare, Code, Loader2, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { WhatsAppBlock, WhatsAppIcon } from './WhatsAppBlock.tsx';
import { PageId } from './Header';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
  onOpenResume: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate, onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: 'Nova Aplicação Web',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showCodeSnippet, setShowCodeSnippet] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const whatsappMessageFormatted = formData.message
    ? `Olá Leonardo! Meu nome é ${formData.name || 'Cliente'}. Vi seu portfólio.\nServiço: ${formData.serviceType}\nAssunto: ${formData.subject || 'Freelance'}\n\n${formData.message}`
    : PERSONAL_INFO.whatsappMessage;

  const whatsappDirectUrl = `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessageFormatted
  )}`;

  const codeSnippetToCopy = `<!-- BLOCO DE CONTATO / BOTÃO VIA WHATSAPP -->
<a
  href="https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(PERSONAL_INFO.whatsappMessage)}"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-none transition-all duration-200 cursor-pointer shadow-md"
>
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
  </svg>
  <span>Falar no WhatsApp</span>
</a>`;

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(codeSnippetToCopy);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2500);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'activation' | 'error'>('idle');
  const [submitErrorMsg, setSubmitErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitErrorMsg('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          'Nome': formData.name,
          'Email': formData.email,
          'Tipo de Serviço': formData.serviceType,
          'Assunto': formData.subject || 'Proposta de Projeto Freelance',
          'Mensagem': formData.message,
          '_replyto': formData.email,
          '_subject': `[Portfólio Freelance] Novo contato de ${formData.name} - ${formData.serviceType}`,
          '_template': 'table',
          '_captcha': 'false',
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (data.success === 'true' || response.ok) {
        setSubmitStatus('success');
        setSubmitted(true);
      } else if (data.message && typeof data.message === 'string' && data.message.toLowerCase().includes('activation')) {
        setSubmitStatus('activation');
        setSubmitted(true);
      } else {
        setSubmitStatus('success');
        setSubmitted(true);
      }
    } catch (err: any) {
      console.error('Erro ao enviar mensagem:', err);
      setSubmitStatus('error');
      setSubmitErrorMsg('Houve uma instabilidade na conexão temporária. Por favor, tente enviar novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-zinc-400"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar para Início</span>
          </button>
          <span className="text-zinc-600">/</span>
          <span className="text-[#ffa200] font-semibold">Contato Freelance</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Let's Connect */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white tracking-wide uppercase mb-6">
              VAMOS CONVERSAR
            </h1>

            <div className="space-y-4 mb-8">
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                Tem um projeto em mente, precisa de um desenvolvedor frontend/full-stack para sua equipe ou quer tirar uma ideia do papel?
              </p>

              <div className="text-zinc-300 text-base">
                <span>Mande uma mensagem direta para </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-white font-medium underline underline-offset-4 decoration-[#ffa200] hover:text-[#ffa200] transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div className="text-zinc-400 text-sm">
                <span>Para mais informações profissionais, veja meu </span>
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="text-white font-medium underline underline-offset-4 hover:text-[#ffa200] transition-colors cursor-pointer"
                >
                  currículo detalhado
                </button>
                <span>.</span>
              </div>
            </div>

            {/* WhatsApp Direct Message Block */}
            <WhatsAppBlock
              phoneNumber={PERSONAL_INFO.whatsappNumber}
              formattedPhone={PERSONAL_INFO.whatsappFormatted}
              defaultMessage={PERSONAL_INFO.whatsappMessage}
              className="mb-6"
            />


            {/* Social Icons + WhatsApp (Square) */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="w-12 h-12 rounded-none bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-[#ffa200] transition-colors"
                aria-label="Perfil no LinkedIn de Leonardo Pereira"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer noopener"
                className="w-12 h-12 rounded-none bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-[#ffa200] transition-colors"
                aria-label="Perfil no GitHub de Leonardo Pereira"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-12 h-12 rounded-none bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-[#ffa200] transition-colors"
                aria-label="Enviar email"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          
          </div>

          {/* Right Column: Form (Square) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 sm:p-10 rounded-none bg-zinc-900/80 border border-zinc-750 text-center space-y-6">
                <div className="w-16 h-16 rounded-none bg-[#ffa200]/20 border border-[#ffa200]/40 flex items-center justify-center mx-auto text-[#ffa200]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-semibold text-[#ffa200] uppercase tracking-wider block">
                    {submitStatus === 'activation' ? 'Primeiro Registro de Envio' : 'Envio Concluído com Sucesso'}
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-wide">
                    {submitStatus === 'activation'
                      ? 'Mensagem Recebida!'
                      : 'Mensagem Enviada ao Email!'}
                  </h2>
                  <p className="text-zinc-300 text-sm max-w-lg mx-auto leading-relaxed">
                    Obrigado, <strong className="text-white">{formData.name}</strong>. 
                    <p>
                      Sua mensagem foi transmitida, assim que eu receber eu entro em contato e a gente alinha esse projeto, estou ansioso para ter você no meu portifólio de clientes!.
                    </p>
                  </p>
                </div>

                {submitStatus === 'activation' && (
                  <div className="p-4 bg-[#ffa200]/10 border border-[#ffa200]/30 text-left text-xs text-zinc-300 space-y-2">
                    <p className="font-semibold text-[#ffa200] flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4" />
                      Aviso de Ativação Única (FormSubmit)
                    </p>
                    <p className="leading-relaxed">
                      Como esta é a primeira vez que seu formulário é acionado, o FormSubmit enviou um email de confirmação para <strong>{PERSONAL_INFO.email}</strong>. Basta abrir sua caixa de entrada e clicar em <strong>&ldquo;Activate Form&rdquo;</strong> uma única vez para autorizar a entrega contínua de todas as mensagens futuras!
                    </p>
                  </div>
                )}

              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                    Nome Completo *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome ou da sua empresa"
                    className="w-full px-4 py-3.5 rounded-none bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ffa200] focus:ring-1 focus:ring-[#ffa200] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                    Email para Retorno *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="voce@exemplo.com"
                    className="w-full px-4 py-3.5 rounded-none bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ffa200] focus:ring-1 focus:ring-[#ffa200] transition-colors text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="serviceType" className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                      Tipo de Serviço Freelance
                    </label>
                    <select
                      id="serviceType"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-none bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-[#ffa200] focus:ring-1 focus:ring-[#ffa200] transition-colors text-sm"
                    >
                      <option value="Nova Aplicação Web">Nova Aplicação Web (Full-Stack)</option>
                      <option value="Landing Page & Alta Conversão">Landing Page / Site Institucional</option>
                      <option value="Desenvolvimento Frontend React">Desenvolvimento Frontend (React / TS)</option>
                      <option value="Integração de APIs & Backend">Integração de APIs RESTful / Backend</option>
                      <option value="Design no Figma / Identidade Visual">UI/UX Design no Figma</option>
                      <option value="Outro Projeto">Outro Projeto / Consultoria</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                      Assunto
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Ex: Novo projeto para startup"
                      className="w-full px-4 py-3.5 rounded-none bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ffa200] focus:ring-1 focus:ring-[#ffa200] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                    Mensagem / Detalhes do Projeto *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte sobre suas necessidades, funcionalidades esperadas, prazo aproximado e objetivos..."
                    className="w-full px-4 py-3.5 rounded-none bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#ffa200] focus:ring-1 focus:ring-[#ffa200] transition-colors text-sm resize-y"
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-950/40 border border-red-800 text-red-200 text-xs flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-semibold">{submitErrorMsg}</p>
                      <p className="text-red-300 text-[11px]">Você também pode falar diretamente pelo WhatsApp ou tentar o envio novamente.</p>
                    </div>
                  </div>
                )}

                <div className="space-y-3 pt-2">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 bg-[#ffa200] hover:bg-[#ffb333] disabled:opacity-60 text-black font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-none transition-all duration-200 cursor-pointer shadow-none hover:translate-y-[-1px] active:translate-y-[0px] text-center"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-black" />
                          <span>ENVIANDO DIRETAMENTE AO SEU EMAIL...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-black" />
                          <span>ENVIAR MENSAGEM</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
