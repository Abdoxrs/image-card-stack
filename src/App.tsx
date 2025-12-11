import { ImageStack } from "./components/features/ImageStack";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-cyan-600">
      <h1 className="text-3xl font-extrabold text-center mb-15">Image-Card Slider</h1>
      <div><ImageStack/></div>
    </div>
  );
}
