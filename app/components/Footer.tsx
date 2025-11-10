export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-20 px-8 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* About */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider mb-6 text-gray-400">ABOUT</h3>
            <p className="text-white leading-relaxed">
              This website honors the brave men and women who served and sacrificed in World War I and World War II.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider mb-6 text-gray-400">RESOURCES</h3>
            <ul className="space-y-3 text-white">
              <li>
                <a href="https://www.veterans.gc.ca/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">
                  Veterans Affairs Canada
                </a>
              </li>
              <li>
                <a href="https://www.legion.ca/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">
                  Royal Canadian Legion
                </a>
              </li>
              <li>
                <a href="https://www.cwgc.org/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">
                  Commonwealth War Graves
                </a>
              </li>
            </ul>
          </div>

          {/* Remember */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider mb-6 text-gray-400">REMEMBER</h3>
            <p className="text-white leading-relaxed mb-2">
              November 11th, 11:00 AM
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              A moment of silence for those who gave their all.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">In loving memory of all those who served</p>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Noah Whiteson x Remembrance Day</p>
        </div>
      </div>
    </footer>
  );
}

