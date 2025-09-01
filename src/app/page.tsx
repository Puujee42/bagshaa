'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#fdf8f0] via-[#fbeee5] to-[#fdf8f0] text-[#5c4d42] font-serif min-h-screen flex flex-col items-center justify-center p-8 selection:bg-[#e6d8c5]">
      <main className="flex flex-col gap-16 max-w-3xl w-full">
        {/* Header Section */}
        <header className="text-center animate-fade-in-down">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-[#a87a64] drop-shadow-md">
            Төрсөн өдрийн мэнд, Ээжээ 🌸
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#6d5c50] italic">
            Бидэнд амьдрал бэлэглэсэн хүнд зориулсан үгсийн цоморлиг.
          </p>
        </header>

        {/* A Letter to Mom Section */}
        <section className="animate-fade-in-up animation-delay-300 bg-white/70 shadow-md rounded-2xl p-8 border border-[#e5d5c5]">
          <h2 className="text-3xl font-semibold text-[#8b5e34] border-b border-[#dcd0b8] pb-3 mb-6">
            Танд зориулсан захидал
          </h2>
          <p className="text-lg leading-relaxed text-[#5c4d42] animate-text-reveal">
            Ээжээ, таны хайр миний амьдралын бүхий л мөчид гэрэлтэгч гэрэл байсаар ирсэн. 
            Энэхүү төрсөн өдрөөр тань зүрх сэтгэлийн тань багтаамж дүүрэн баяр баясгалан, амар амгаланг хүсье. 
            Миний түшиг тулгуур, миний дундаршгүй урам зориг байдагт тань баярлалаа. 
            Таны заасан сургаал, гаргасан золиос, хуваалцсан хайр бүхэн намайг өнөөдрийн намайг бүтээсэн юм шүү. Би үүрд талархах болно.
          </p>
        </section>

        {/* Memories Section */}
        <section className="animate-fade-in-up animation-delay-600 bg-white/70 shadow-md rounded-2xl p-8 border border-[#e5d5c5]">
          <h2 className="text-3xl font-semibold text-[#8b5e34] border-b border-[#dcd0b8] pb-3 mb-6">
            Хамгийн нандин дурсамжууд
          </h2>
          <ul className="list-none space-y-5 text-lg leading-relaxed animate-text-reveal animation-delay-900">
            <li className="flex items-start"><span className="text-[#a87a64] mr-3 mt-1 text-xl">✦</span>Унтахын өмнө надад ном уншиж өгдөг, дүр бүрийн хоолойг дуурайдаг байсан тань.</li>
            <li className="flex items-start"><span className="text-[#a87a64] mr-3 mt-1 text-xl">✦</span>Гал тогоонд таны алдарт шоколадтай жигнэмгийг хийж сурахад, аз жаргалтайгаар бүхнийг тарааж байсан үе.</li>
            <li className="flex items-start"><span className="text-[#a87a64] mr-3 mt-1 text-xl">✦</span>Бидэнд цаг гарган ярилцаж, надад хамгийн хэрэгтэй үед төгс зөвлөгөө өгсөн тэр мөч.</li>
          </ul>
        </section>

        {/* Wishes for the Future Section */}
        <section className="animate-fade-in-up animation-delay-1200 bg-white/70 shadow-md rounded-2xl p-8 border border-[#e5d5c5]">
          <h2 className="text-3xl font-semibold text-[#8b5e34] border-b border-[#dcd0b8] pb-3 mb-6">
            Ирэх жилийн ерөөл
          </h2>
          <p className="text-lg leading-relaxed text-[#5c4d42] animate-text-reveal animation-delay-1500">
            Таны ирэх жил амар амгалангийн мөчүүд, гайхалтай шинэ дурсамжууд, инээд хөөр, бусдад харамгүй түгээдэг хайраар тань дүүрэн байх болтугай.
            Зөвхөн өнөөдөр гэлтгүй, өдөр бүр хайрлуулж, хүндлэгдээрэй.
          </p>
        </section>
      </main>

      <footer className="text-center mt-20 text-[#7d6a5d] animate-fade-in-up animation-delay-1800">
        <p className="text-base">Хязгааргүй их хайраар,</p>
        <p className="mt-3 text-xl font-semibold tracking-wider text-[#8b5e34]">[Таны Нэр]</p>
      </footer>
    </div>
  );
}