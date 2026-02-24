const About = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold text-gold mb-6 italic">Our Heritage</h1>
        <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
        <p className="text-gray-300 text-lg leading-relaxed">
          Founded in 2026, <span className="text-white font-bold">Time Fusion</span> has been the 
          pioneer in bringing world-class timepieces to your wrist. We believe that a watch is not 
          just a tool to tell time; it's a reflection of your legacy.
        </p>
        <p className="mt-6 text-gray-400">
          From mechanical marvels to the latest smart technology, we curate only the finest.
        </p>
      </div>
    </div>
  );
};

export default About;