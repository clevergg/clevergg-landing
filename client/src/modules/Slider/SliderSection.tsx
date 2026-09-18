import { TitleSlider } from './components/TitleSlider';
import { Slider } from './Slider';

export function SliderSection() {
  return (
    <section className="w-full overflow-x-clip">
      <div className="
        mx-auto w-full max-w-[1440px]
        px-5 md:px-8 lg:px-10
        flex flex-col md:flex-row items-center
        gap-10 md:gap-8 lg:gap-12 xl:gap-20
      ">
        <TitleSlider />
        <Slider />
      </div>
    </section>
  );
}