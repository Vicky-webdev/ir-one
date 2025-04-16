const ImageBanner = ({ image }: { image: string }) => (
    <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg mb-4">
      <img src={image} alt="Property" className="w-full h-full object-cover" />
    </div>
  );
  
  export default ImageBanner;
  