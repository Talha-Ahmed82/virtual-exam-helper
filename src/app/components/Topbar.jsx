// import { Phone, Mail } from "lucide-react";

// export default function TopBar() {
//   return (
//     <div className="w-full bg-[#113565] text-white text-sm">
//       <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-end gap-2">
        

//         {/* Right Contact Info */}
//         <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
          
//           {/* Phone */}
//           <div className="flex items-center gap-1">
//             <Phone size={14} />
//             <span>+1 724 246-4538</span>
//           </div>

//           {/* Email */}
//           <div className="flex items-center gap-1">
//             <Mail size={14} />
//             <span>info@thebrooklyndesign.com</span>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }







import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-[#0B2E6D] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-10 flex items-center justify-center md:justify-end">
          
          <div className="flex items-center gap-6 text-sm">
            
            {/* Phone */}
            <a
              href="tel:+17242464538"
              className="
                flex
                items-center
                gap-2
                text-slate-200
                hover:text-[#D4AF37]
                transition-colors
              "
            >
              <Phone
                size={14}
                className="text-[#D4AF37]"
              />
              <span>+1 724 246-4538</span>
            </a>

            {/* Divider */}
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>

            {/* Email */}
            <a
              href="mailto:info@virtualexamhelper.com"
              className="
                flex
                items-center
                gap-2
                text-slate-200
                hover:text-[#D4AF37]
                transition-colors
              "
            >
              <Mail
                size={14}
                className="text-[#D4AF37]"
              />
              <span>info@virtualexamhelper.com</span>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}